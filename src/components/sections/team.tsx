import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Dra. Ana García',
    specialty: 'Cardióloga',
    imageId: 'doctor-1',
  },
  {
    name: 'Dr. Carlos Rodríguez',
    specialty: 'Pediatra',
    imageId: 'doctor-2',
  },
  {
    name: 'Dra. Laura Martínez',
    specialty: 'Dermatóloga',
    imageId: 'doctor-3',
  },
];

export default function Team() {
  return (
    <section id="team" className="w-full bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Nuestro Equipo de Expertos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Conozca a los profesionales altamente cualificados y dedicados que forman parte de Clínica Vitalis.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(img => img.id === member.imageId);
            return (
              <Card key={member.name} className="overflow-hidden text-center">
                <CardHeader className="p-0">
                  <div className="relative h-80 w-full">
                    {memberImage && (
                       <Image
                        src={memberImage.imageUrl}
                        alt={`Fotografía de ${member.name}`}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        data-ai-hint={memberImage.imageHint}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold text-base mt-1">{member.specialty}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
