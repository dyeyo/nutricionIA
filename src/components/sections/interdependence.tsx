import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const partners = [
  { name: 'Clinizad laboratorio de especialidades', imageId: 'clinizad' },
  { name: 'Proveedores de insumos médicos y de oficina', imageId: 'medical-supplies' },
  { name: 'Limpieza integral del sur', imageId: 'cleaning-service' },
  { name: 'Seguridad del Sur', imageId: 'security-service' },
  { name: 'Meganet', imageId: 'meganet' },
  { name: 'Empresa metropolitana de aseo de Pasto', imageId: 'emaseo' },
];

export default function Interdependence() {
  return (
    <section id="interdependence" className="w-full bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Interdependencia y Alianzas</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            En Nutrimet Clinic comprendemos la importancia que nuestro trabajo se fortalece gracias al apoyo de diferentes aliados y servicios que nos acompañan, estas alianzas facilitan que nuestra institución ofrezca una atención integral de calidad, permitiéndonos contar con el acompañamiento necesario para responder a las necesidades de la comunidad de manera oportuna.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => {
            const partnerImage = PlaceHolderImages.find(img => img.id === partner.imageId);
            return (
              <Card key={partner.name} className="p-4 flex flex-col items-center justify-center h-40">
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
                <p className="text-center text-sm font-semibold">{partner.name}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
