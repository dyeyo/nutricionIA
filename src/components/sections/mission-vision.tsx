import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const values = [
    { name: "Responsabilidad", description: "Cumplimos con los protocolos y garantizamos un servicio seguro y confiable para cada paciente." },
    { name: "Respeto", description: "Ofrecemos un trato humanizado, reconociendo y valorando las costumbres, necesidades y decisiones de cada persona." },
    { name: "Equidad", description: "Aseguramos una atención justa y accesible para todos, sin distinción de condición social o económica." },
];

export default function MissionVision() {
  return (
    <section id="mission-vision" className="w-full bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Misión</h2>
            <p className="text-lg text-muted-foreground">
              Somos una institución prestadora de servicios de salud ubicada en el municipio de Pasto, enfocada en la atención integral de pacientes con alteraciones metabólicas y nutricionales, ofreciendo servicios que promueven la salud, el bienestar y la calidad de vida mediante el manejo y prevención de dichas alteraciones. Contamos con un equipo multidisciplinario competente de especialistas certificados, con una tecnología avanzada y humanización del servicio.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Visión</h2>
            <p className="text-lg text-muted-foreground">
              En el año 2030 seremos reconocidos como una clínica líder en la región de Nariño con énfasis en el manejo y prevención de alteraciones metabólicas y nutricionales, destacada por su soporte científico, innovación tecnológica y atención humanizada. Seremos percibidos como una institución transformadora de vida aportando a la construcción de una sociedad más consciente, activa y con mejor calidad de vida.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-8">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value) => (
                    <Card key={value.name}>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-accent">{value.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{value.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
