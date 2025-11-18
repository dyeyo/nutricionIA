import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  HeartPulse,
  Stethoscope,
  Droplets,
  BrainCircuit,
  Activity,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from 'next/image';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const servicesList: Service[] = [
  {
    icon: HeartPulse,
    title: "Medicina Interna",
    description:
      "Servicio orientado al diagnóstico, control y seguimiento de enfermedades metabólicas, garantizando una atención integral y basada en la evidencia.",
  },
  {
    icon: Stethoscope,
    title: "Endocrinología",
    description:
      "Atención especializada en el manejo de alteraciones hormonales y trastornos metabólicos, con énfasis en precisión diagnóstica y tratamiento oportuno.",
  },
  {
    icon: Droplets,
    title: "Nutrición y Dietética",
    description:
      "Evaluación nutricional completa, formulación de planes alimentarios individualizados, educación en hábitos saludables y seguimiento continuo.",
  },
  {
    icon: BrainCircuit,
    title: "Psicología",
    description:
      "Acompañamiento emocional y clínico enfocado en el manejo de la ansiedad asociada a la alimentación, fortalecimiento de la adherencia terapéutica y bienestar mental.",
  },
  {
    icon: Activity,
    title: "Entrenamiento y Rehabilitación Metabólica",
    description:
      "Programas de ejercicio adaptado orientados a mejorar la condición física, optimizar el metabolismo y favorecer el control del peso corporal.",
  },
];

const partners = [
  { name: "Dotacion", imageId: "123213" },
  { name: "Dotacion",imageId: "contact1",},
  { name: "Dotacion", imageId: "contact2" },
  { name: "Dotacion", imageId: "contact3" },
  { name: "Dotacion", imageId: "contact4" },
  { name: "Dotacion", imageId: "contact5" },
  { name: "Dotacion", imageId: "contact6" },
  { name: "Dotacion", imageId: "contact7" },
];

export default function Services() {

  return (
    <section id="services" className="w-full bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Bienvenido a los servicios de Nutrimet Clinic, un conjunto de
            atenciones especializadas diseñadas para prevenir, diagnosticar y
            tratar alteraciones metabólicas y nutricionales. Cada servicio
            integra ciencia, tecnología y un enfoque humanizado, garantizando
            intervenciones seguras, personalizadas y orientadas a mejorar la
            salud y calidad de vida de nuestros pacientes y sus familias.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="bg-accent/10 p-4 rounded-full mb-4 inline-flex">
                  <service.icon
                    className="h-8 w-8 text-accent"
                    aria-label={service.title}
                  />
                </div>
                <CardTitle className="font-headline text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="font-headline text-2xl md:text-3xl font-bold tracking-tight">
            Dotación
          </h3>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Nutrimet dispone de recursos tecnológicos avanzados y de un equipo
            profesional altamente capacitado, lo que garantiza evaluaciones
            metabólicas confiables y una atención integral, segura y eficiente
            para todos nuestros pacientes.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>

            {partners.map((partner) => {
              const partnerImage = PlaceHolderImages.find(
                (img) => img.id === partner.imageId
              );
              return (
                <Card
                  key={partner.name}
                  className="p-4 flex flex-col items-center justify-center h-50"
                >
                  {partnerImage ? (
                    <div className="relative w-full h-20 mb-2">
                      <Image
                        src={partnerImage.imageUrl}
                        alt={`Logo de ${partner.name}`}
                        fill
                        loading="lazy"
                        className="object-contain"
                        sizes="150px"
                        data-ai-hint={partnerImage.imageHint}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-20 bg-muted rounded-md mb-2"></div>
                  )}
                  <p className="text-center text-sm font-semibold">
                    {partner.name}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
