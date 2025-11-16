import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ShieldCheck, HandHeart, Users } from 'lucide-react';

const principles = [
  { icon: ShieldCheck, title: 'Seguridad', description: 'Protegemos la salud de nuestros usuarios mediante prácticas basadas en evidencia y prevención de riesgos.' },
  { icon: HandHeart, title: 'Atención Humanizada', description: 'Brindamos una atención cálida, empática y personalizada, respetando la dignidad y realidad de cada paciente.' },
  { icon: Zap, title: 'Mejoramiento Continuo', description: 'Actualizamos nuestros procesos y conocimientos para ofrecer servicios de calidad y en constante evolución.' },
  { icon: Users, title: 'Trabajo en Equipo', description: 'Promovemos la colaboración entre profesionales para garantizar soluciones integrales y una atención más eficaz.' },
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
                Sobre NutriMet Clinic
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                NutriMet Clinic integra los conceptos de nutrición y metabolismo para representar una atención especializada orientada al fortalecimiento de la salud a través de la alimentación. El lema “Nutrición que impulsa tu mejor versión” sintetiza el compromiso institucional de promover hábitos saludables, apoyar el logro de metas individuales y favorecer una vida con mayor bienestar.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
            <div className="text-center mb-12">
                 <h3 className="font-headline text-2xl md:text-3xl font-bold tracking-tight">Nuestros Principios</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle) => (
                <Card key={principle.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit">
                      <principle.icon className="w-8 h-8 text-accent" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl font-headline">{principle.title}</CardTitle>
                    <p className="text-muted-foreground mt-2">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
