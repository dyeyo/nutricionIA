import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Tatiana Guerrero',
    specialty: 'Directora General',
    imageId: 'doctor-1',
    description: 'Profesional en dirección y gestión de servicios de salud, con amplia experiencia en liderazgo estratégico y desarrollo de proyectos enfocados en nutrición y bienestar.'
  },
  {
    name: 'Vanesa Ramos',
    specialty: 'Coordinadora Asistencial',
    imageId: 'doctor-2',
    description: 'Profesional en el área de la salud con experiencia en la coordinación de servicios asistenciales y en la implementación de protocolos de atención seguros y humanizados.'
  },
  {
    name: 'Jordan Lugmana',
    specialty: 'Coordinador Administrativo',
    imageId: 'doctor-3',
    description: 'Profesional en administración de servicios de salud, con trayectoria en gestión operativa, control de recursos y diseño de estrategias para la eficiencia institucional.'
  },
  {
    name: 'Karen Sánchez',
    specialty: 'Nutricionista',
    imageId: 'doctor-4',
    description: 'Nutricionista con experiencia en la valoración, diagnóstico nutricional y diseño de planes de intervención personalizados. Especializada en el abordaje integral de alteraciones metabólicas.'
  },
  {
    name: 'Jhoana Cabrera',
    specialty: 'Coordinadora de Enfermería',
    imageId: 'doctor-5',
    description: 'Profesional en enfermería con experiencia en el cuidado clínico, educación al paciente y gestión de procesos asistenciales. Destacada por una atención humanizada.'
  },
  {
    name: 'Nataly Ordoñez',
    specialty: 'Fisioterapeuta',
    imageId: 'doctor-6',
    description: 'Fisioterapeuta con trayectoria en promoción de estilos de vida saludables, rehabilitación y acompañamiento en procesos de cambio físico y funcional.'
  },
];

export default function Team() {
  return (
    <section id="team" className="w-full bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            En NutriMet Clinic disponemos de un equipo interdisciplinario conformado por profesionales en nutrición, medicina, enfermería, psicología y gestión de procesos, cuyo desempeño es fundamental para la prestación de nuestros servicios.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(img => img.id === member.imageId);
            return (
              <Card key={member.name} className="overflow-hidden text-center flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-80 w-full">
                    {memberImage ? (
                       <Image
                        src={memberImage.imageUrl}
                        alt={`Fotografía de ${member.name}`}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        data-ai-hint={memberImage.imageHint}
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center">
                        <span className="text-muted-foreground">Foto pendiente</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold text-base mt-1">{member.specialty}</CardDescription>
                  <p className="text-muted-foreground text-sm mt-4 flex-grow">{member.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
