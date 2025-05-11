# Text-to-Image Generator

A Next.js application that generates images from text descriptions using AI.

## Features

- Text-to-image generation using fal.ai API
- Real-time image generation
- Download generated images
- Modern and responsive UI
- Loading states and error handling

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a `.env.local` file in the root directory with your fal.ai API key:
```bash
FAL_AI_API_KEY=your_api_key_here
```
4. Run the development server:
```bash
npm run dev
```

## ⚠️ Important Note About Image Generation

If the images are not generating, it likely means that the API credits have been exhausted. To fix this:

1. Visit [fal.ai dashboard](https://fal.ai/dashboard/keys) to create a new account
2. Generate a new API key
3. Replace the `FAL_AI_API_KEY` in your `.env.local` file with the new key
4. Restart the development server

## Environment Variables

- `FAL_AI_API_KEY`: Your fal.ai API key for image generation

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- fal.ai API for image generation

## License

MIT