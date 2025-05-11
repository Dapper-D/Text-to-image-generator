'use client';

import { useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImages([]);

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate images');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setGeneratedImages(data.imageUrls);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate images');
      console.error('Error generating images:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your image description..."
            className="flex-1 p-3 border border-slate-700 rounded-lg bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
        </div>
      </form>

      {error && (
        <div className="text-red-500 text-center">{error}</div>
      )}

      <div className="grid grid-cols-2 gap-x-4 gap-y-4 max-h-[calc(100vh-200px)] place-items-center">
        {[...Array(4)].map((_, index) => (
          <ImagePlaceholder
            key={index}
            index={index}
            isLoading={isLoading}
            imageUrl={generatedImages[index]}
          />
        ))}
      </div>
    </div>
  );
} 