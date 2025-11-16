import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const areas = [
  {
    id: 'reception',
    title: 'Recepción y Sala de Espera',
    description: 'Espacio cómodo, accesible y moderno donde recibimos a nuestros usuarios con un servicio ágil y humanizado.',
  },
  {
    id: 'clinic-office',
    title: 'Consultorios de Atención Clínica',
    description: 'Áreas equipadas para brindar servicios de medicina interna, endocrinología, nutrición, psicología y enfermería, con tecnología de apoyo diagnóstico y atención personalizada.',
  },
  {
    id: 'gym',
    title: 'Gimnasio Clínico / Rehabilitación Metabólica',
    description: 'Zona especializada para actividad física supervisada, control metabólico y programas de ejercicio terapéutico adaptado.',
  },
  {
    id: 'admin-area',
    title: 'Área Administrativa y Coordinación',
    description: 'Espacios destinados a la gestión institucional, talento humano y procesos asistenciales, garantizando organización, calidad y eficiencia en cada servicio.',
  },
];

export default function Areas() {
  return (
    <section id="areas" className="w-full bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Nuestras Áreas</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Nutrimet Clinic, cuenta con espacios diseñados para brindar atención integral en salud metabólica y nutricional. Cada ambiente ha sido creado con criterios de calidad, seguridad y humanización, garantizando una experiencia cálida, eficiente y orientada al bienestar de nuestros pacientes y sus familias.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area) => {
            const areaImage = PlaceHolderImages.find(img => img.id === area.id);
            return (
              <Card key={area.id} className="overflow-hidden text-center flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-60 w-full">
                    {areaImage ? (
                       <Image
                        src={areaImage.imageUrl}
                        alt={area.title}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        data-ai-hint={areaImage.imageHint}
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center">
                        <span className="text-muted-foreground">Foto pendiente</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <CardTitle className="font-headline text-xl">{area.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-4 flex-grow">{area.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
