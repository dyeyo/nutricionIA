import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Tatiana Guerrero',
    specialty: 'Directora General de NutriMet Clinic',
    imageId: 'doctor-1',
    description: 'Soy profesional en dirección y gestión de servicios de salud, con amplia experiencia en liderazgo estratégico y desarrollo de proyectos enfocados en nutrición y bienestar. Me caracterizo por una visión integral orientada al crecimiento institucional, la calidad del servicio y la innovación en procesos clínicos y administrativos. Mi gestión está marcada por el compromiso, la responsabilidad y la búsqueda constante de excelencia en cada área de la organización.'
  },
  {
    name: 'Vanesa Ramos',
    specialty: 'Coordinadora Asistencial',
    imageId: 'doctor-2',
    description: 'Soy profesional en el área de la salud con experiencia en la coordinación de servicios asistenciales y en la implementación de protocolos de atención seguros y humanizados. Me destaco por mi capacidad para gestionar equipos, optimizar procesos y asegurar una atención oportuna y de alta calidad. Mi enfoque está orientado al bienestar del paciente y al cumplimiento riguroso de estándares clínicos.'
  },
  {
    name: 'Jordan Lugmana',
    specialty: 'Coordinador Administrativo',
    imageId: 'doctor-3',
    description: 'Soy profesional en administración de servicios de salud, con trayectoria en gestión operativa, control de recursos y diseño de estrategias para la eficiencia institucional. Me distingo por mi capacidad analítica, organización y liderazgo en la toma de decisiones. Mi compromiso es garantizar procesos administrativos sólidos que respalden el crecimiento y la sostenibilidad de NutriMet Clinic.'
  },
  {
    name: 'Karen Sánchez',
    specialty: 'Nutricionista',
    imageId: 'doctor-4',
    description: 'Soy nutricionista con experiencia en la valoración, diagnóstico nutricional y diseño de planes de intervención personalizados. Me especializo en el abordaje integral de alteraciones metabólicas y en la educación para la salud. Destaco por mi sensibilidad humana, mi enfoque basado en la evidencia y mi compromiso con acompañar a cada paciente en la construcción de hábitos que mejoren su calidad de vida.'
  },
  {
    name: 'Jhoana Cabrera',
    specialty: 'Coordinadora de Enfermería',
    imageId: 'doctor-5',
    description: 'Soy profesional en enfermería con experiencia en el cuidado clínico, educación al paciente y gestión de procesos asistenciales. Me destaco por una atención humanizada, liderazgo en equipos de trabajo y manejo riguroso de protocolos de seguridad del paciente. Mi labor se orienta a garantizar cuidados integrales y contribuir a una atención eficiente, ética y de alta calidad.'
  },
  {
    name: 'Nataly Ordoñez',
    specialty: 'Fisioterapeuta',
    imageId: 'doctor-6',
    description: 'Soy fisioterapeuta con trayectoria en promoción de estilos de vida saludables, rehabilitación y acompañamiento en procesos de cambio físico y funcional. Mi práctica se basa en la evaluación integral, el diseño de intervenciones personalizadas y el fortalecimiento de la movilidad y bienestar del usuario. Me distingo por mi empatía, responsabilidad y compromiso con la recuperación y el fortalecimiento de la salud integral.'
  },
];

export default function Team() {
  return (
    <section id="team" className="w-full bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            En NutriMet Clinic disponemos de un equipo interdisciplinario conformado por profesionales en nutrición, medicina, enfermería, psicología y gestión de procesos, cuyo desempeño es fundamental para la prestación de nuestros servicios. Este talento humano participa en la evaluación integral de los usuarios, la formulación de planes nutricionales especializados y el seguimiento continuo, garantizando calidad, rigor técnico y coherencia en cada etapa de la atención.
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
                        className="object-contain"
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
