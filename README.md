# Text-to-Image Generator

An AI-powered text-to-image application that transforms natural language prompts into generated images. The app provides a simple, responsive interface for creating images in real time and downloading the results.

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

Framework: Next.js 14
Language: TypeScript
Frontend: React 18
Styling: Tailwind CSS
AI Image Generation: fal.ai
AI SDK: Vercel AI SDK
AI Integrations: OpenAI, Anthropic, Replicate
Voice/Audio: Deepgram
Backend Services: Firebase
Animations: Framer Motion
Icons: Lucide React
Markdown: React Markdown
Date Utilities: date-fns
Deployment: Next.js-compatible hosting

## License

MIT
