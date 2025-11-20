import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Clients() {
  const internalClientsImage = PlaceHolderImages.find(image => image.id === 'internal-clients');

  return (
    <section id="clients" className="w-full bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Clientes Internos</h2>
            <p className="text-lg text-muted-foreground">
              En NutriMet Clinic disponemos de un equipo interdisciplinario conformado por profesionales en nutrición, medicina, enfermería, psicología y gestión de procesos, cuyo desempeño es fundamental para la prestación de nuestros servicios. Este talento humano participa en la evaluación integral de los usuarios, la formulación de planes nutricionales especializados y el seguimiento continuo, garantizando calidad, rigor técnico y coherencia en cada etapa de la atención.
            </p>
          </div>
          <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
            {internalClientsImage && (
              <Image
                src={internalClientsImage.imageUrl}
                alt={internalClientsImage.description}
                fill
                loading="lazy"
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                data-ai-hint={internalClientsImage.imageHint}
              />
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-4">Clientes Externos</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Atendemos a pacientes con necesidades nutricionales y metabólicas, así como a sus familias y cuidadores. Colaboramos con EPS, IPS y aseguradoras para fortalecer la atención especializada, y trabajamos con proveedores de suplementos, dispositivos médicos e instituciones educativas que apoyan nuestros procesos y programas de salud.
            </p>
        </div>
      </div>
    </section>
  );
}
