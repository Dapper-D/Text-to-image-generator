import { NextResponse } from 'next/server';
import { fal } from '@fal-ai/client';

if (!process.env.FAL_KEY) {
  throw new Error('FAL_KEY environment variable is not set');
}

fal.config({
  credentials: process.env.FAL_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    // Generate 4 images in parallel
    const imagePromises = Array(4).fill(null).map(() =>
      fal.subscribe("fal-ai/flux-pro/v1.1-ultra", {
        input: {
          prompt,
          num_images: 1,
          enable_safety_checker: true,
          safety_tolerance: "2",
          output_format: "jpeg",
          aspect_ratio: "1:1"  // Square images for our grid
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            console.log(update.logs.map(log => log.message));
          }
        },
      })
    );

    const results = await Promise.all(imagePromises);
    const imageUrls = results.map((result: any) => result.data.images[0].url);

    return NextResponse.json({ imageUrls });
  } catch (error) {
    console.error('Image generation failed:', error);
    return NextResponse.json(
      { error: 'Image generation failed' },
      { status: 500 }
    );
  }
} 