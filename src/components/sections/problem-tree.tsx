import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProblemTree() {
  const problemTreeImage = PlaceHolderImages.find(image => image.id === 'problem-tree');

  return (
    <section id="problem-tree" className="w-full bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Árbol de Problemas
        </h2>
        <div className="relative h-96 md:h-[500px] lg:h-[600px] w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          {problemTreeImage && (
            <Image
              src={problemTreeImage.imageUrl}
              alt={problemTreeImage.description}
              fill
              loading="lazy"
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
              data-ai-hint={problemTreeImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
