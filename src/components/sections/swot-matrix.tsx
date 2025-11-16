import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SwotMatrix() {
  const swotImage = PlaceHolderImages.find(image => image.id === 'swot-matrix');

  return (
    <section id="swot-matrix" className="w-full bg-background">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Matriz DOFA
        </h2>
        <div className="relative h-96 md:h-[500px] lg:h-[600px] w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          {swotImage && (
            <Image
              src={swotImage.imageUrl}
              alt={swotImage.description}
              fill
              loading="lazy"
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
              data-ai-hint={swotImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
