import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(image => image.id === 'hero');

  return (
    <section id="hero" className="w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-accent">Clínica Vitalis:</span> Su Salud, Nuestra Prioridad
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl">
              Ofrecemos atención médica integral y personalizada para usted y su familia. Nuestro compromiso es su bienestar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Agendar una Cita</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">Ver Servicios</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-[450px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
