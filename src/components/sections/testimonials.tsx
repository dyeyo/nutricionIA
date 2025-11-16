import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: 'Ana Sofía R.',
    role: 'Paciente',
    text: 'El enfoque personalizado y el profesionalismo del equipo de NutriMet Clinic transformaron mi relación con la comida. ¡He alcanzado metas que nunca creí posibles!',
    imageId: 'patient-1',
  },
  {
    name: 'Carlos M.',
    role: 'Paciente',
    text: 'Gracias a la orientación experta, he logrado controlar mis niveles de azúcar y mejorar mi energía. El seguimiento constante marca la diferencia.',
    imageId: 'patient-2',
  },
  {
    name: 'Laura V.',
    role: 'Paciente',
    text: 'El acompañamiento psicológico fue clave en mi proceso. Aprendí a manejar la ansiedad y a construir hábitos sostenibles. ¡Recomiendo totalmente sus servicios!',
    imageId: 'patient-3',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Lo que Dicen Nuestros Pacientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            El bienestar de nuestros pacientes es nuestra mayor satisfacción. Lea algunas de sus experiencias.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const patientImage = PlaceHolderImages.find(img => img.id === testimonial.imageId);
              return(
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between">
                    <CardContent className="p-6 flex flex-col gap-4 items-center text-center">
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                      </div>
                      <blockquote className="text-base italic">"{testimonial.text}"</blockquote>
                      <div className="flex items-center gap-4 mt-4">
                        <Avatar>
                          {patientImage && <AvatarImage src={patientImage.imageUrl} alt={`Avatar de ${testimonial.name}`} data-ai-hint={patientImage.imageHint} />}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
