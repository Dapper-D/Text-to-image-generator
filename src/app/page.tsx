import ImageGenerator from '@/components/ImageGenerator';

export default function Home() {
  return (
    <main className="min-h-screen bg-dotted">
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-6">Text to Image Generator</h1>
        <ImageGenerator />
      </div>
    </main>
  );
}
