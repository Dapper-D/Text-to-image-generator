'use client';
import { Download } from 'lucide-react';
import { useState } from 'react';

interface ImagePlaceholderProps {
  index: number;
  isLoading: boolean;
  imageUrl?: string;
}

export default function ImagePlaceholder({ index, isLoading, imageUrl }: ImagePlaceholderProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!imageUrl || isDownloading) return;
    
    setIsDownloading(true);
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `generated-image-${index + 1}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    } finally {
      setTimeout(() => setIsDownloading(false), 500); // Reset after animation
    }
  };

  return (
    <div
      className={`aspect-square max-w-[200px] w-full rounded-lg border-2 border-dashed border-slate-700 flex items-center justify-center overflow-hidden relative
        ${isLoading ? 'animate-pulse relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-slate-700/20 before:to-transparent before:animate-[shimmer_3s_infinite]' : 'bg-slate-900'}`}
    >
      {imageUrl ? (
        <>
          <img src={imageUrl} alt={`Generated image ${index + 1}`} className="w-full h-full object-cover" />
          <button
            onClick={handleDownload}
            className={`absolute bottom-2 right-2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all transform
              ${isDownloading ? 'scale-90' : 'scale-100'}`}
            title="Download image"
            disabled={isDownloading}
          >
            <Download size={16} className={`text-white transition-transform ${isDownloading ? 'scale-90' : 'scale-100'}`} />
          </button>
        </>
      ) : (
        <span className="text-slate-400 text-sm">
          {isLoading ? 'Generating...' : `Image ${index + 1}`}
        </span>
      )}
    </div>
  );
} 