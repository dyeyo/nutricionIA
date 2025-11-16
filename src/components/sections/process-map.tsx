import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProcessMap() {
  const processMapImage = PlaceHolderImages.find(image => image.id === 'process-map');

  return (
    <section id="process-map" className="w-full bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Mapa de Procesos
        </h2>
        <div className="relative h-96 md:h-[500px] lg:h-[600px] w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          {processMapImage && (
            <Image
              src={processMapImage.imageUrl}
              alt={processMapImage.description}
              fill
              loading="lazy"
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
              data-ai-hint={processMapImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
