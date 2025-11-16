import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

const objectives = [
  {
    id: "01",
    text: "Ampliar la prestación de servicios, garantizando el acceso a programas de prevención y manejo de alteraciones nutricionales y metabólicas."
  },
  {
    id: "02",
    text: "Integrar tecnologías y protocolos estandarizados para asegurar una atención más ágil, precisa y efectiva."
  },
  {
    id: "03",
    text: "Fortalecer el talento humano mediante formación continua que impulse la calidad, la excelencia y la competitividad en el sector salud."
  },
  {
    id: "04",
    text: "Desarrollar infraestructura funcional y sostenible que permita brindar servicios especializados en nutrición y metabolismo con comodidad y seguridad."
  },
];

export default function StrategicObjectives() {
  return (
    <section id="strategic-objectives" className="w-full bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Objetivos Estratégicos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective) => (
            <Card key={objective.id} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit mb-4">
                  <span className="font-bold text-2xl text-accent">{objective.id}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{objective.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
