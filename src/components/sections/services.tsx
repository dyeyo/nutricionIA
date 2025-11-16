import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HeartPulse, Stethoscope, Droplets, Bone, FlaskConical, Baby } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const servicesList: Service[] = [
  {
    icon: HeartPulse,
    title: 'Cardiología',
    description: 'Diagnóstico y tratamiento de enfermedades del corazón y sistema circulatorio.',
  },
  {
    icon: Stethoscope,
    title: 'Medicina General',
    description: 'Atención primaria integral para todas las edades y chequeos de rutina.',
  },
  {
    icon: Baby,
    title: 'Pediatría',
    description: 'Cuidado médico especializado para bebés, niños y adolescentes.',
  },
  {
    icon: Bone,
    title: 'Traumatología',
    description: 'Tratamiento de lesiones musculoesqueléticas, fracturas y problemas articulares.',
  },
  {
    icon: Droplets,
    title: 'Análisis Clínicos',
    description: 'Laboratorio completo para análisis de sangre, orina y otros fluidos.',
  },
  {
    icon: FlaskConical,
    title: 'Dermatología',
    description: 'Cuidado de la piel, diagnóstico y tratamiento de afecciones dermatológicas.',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Nuestros Servicios Médicos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ofrecemos una amplia gama de especialidades para cubrir todas sus necesidades de salud con la máxima calidad y profesionalidad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="bg-accent/10 p-4 rounded-full mb-4 inline-flex">
                  <service.icon className="h-8 w-8 text-accent" aria-label={service.title} />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
