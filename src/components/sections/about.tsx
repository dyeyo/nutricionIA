import Image from 'next/image';
import { Award, HeartHandshake, Stethoscope } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stats = [
  { icon: Award, value: '20+', label: 'Años de Experiencia' },
  { icon: HeartHandshake, value: '10,000+', label: 'Pacientes Satisfechos' },
  { icon: Stethoscope, value: '15', label: 'Especialistas Médicos' },
];

export default function About() {
  const aboutImage = PlaceHolderImages.find(image => image.id === 'about');

  return (
    <section id="about" className="w-full bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-left">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                Dedicados a Cuidar de Usted en Cada Etapa de la Vida
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                En Clínica Vitalis, creemos en un enfoque de la medicina que combina la última tecnología con un trato humano y cercano. Nuestra misión es proporcionar una atención médica excepcional, centrada en el paciente, en un entorno seguro y acogedor.
              </p>
              <p className="mt-2 text-lg text-muted-foreground">
                Desde nuestra fundación, hemos crecido para convertirnos en un pilar de la comunidad, comprometidos con la salud y el bienestar de cada persona que cruza nuestras puertas.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <stat.icon className="w-8 h-8 text-accent mb-2" aria-hidden="true" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
