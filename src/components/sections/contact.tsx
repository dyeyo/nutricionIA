'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "@/app/actions"
import { PlaceHolderImages } from '@/lib/placeholder-images';

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, ingrese un correo válido."),
  subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
})

export default function Contact() {
  const { toast } = useToast()
  const contactImage = PlaceHolderImages.find(image => image.id === 'contact');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitContactForm(values);

    if (result.success) {
      toast({
        title: "Mensaje Enviado",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error al enviar",
        description: result.message || "Hubo un problema. Por favor, inténtelo de nuevo.",
      });
    }
  }

  return (
    <>
      <section id="contact" className="w-full bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Contáctenos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Si deseas recibir orientación, agendar una cita o conocer más sobre nuestros servicios, estamos aquí para acompañarte. En Nutrimet Clinic valoramos tu bienestar y queremos brindarte respuestas claras, apoyo oportuno y una atención cercana. ¡Tu salud es nuestra prioridad!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <h3 className="text-2xl font-bold font-headline">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full"><MapPin className="h-6 w-6 text-accent" /></div>
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-muted-foreground">Avenida Los Estudiantes No. 25–40<br/>San Juan de Pasto, Nariño, Colombia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full"><Phone className="h-6 w-6 text-accent" /></div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-muted-foreground">(602) 7325467</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full"><Mail className="h-6 w-6 text-accent" /></div>
                  <div>
                    <h4 className="font-semibold">Correo Electrónico</h4>
                    <p className="text-muted-foreground">nutrimetclinic@gmail.com</p>
                  </div>
                </div>
              </div>
               <div className="mt-4">
                  <h4 className="text-lg font-bold font-headline mb-4">Redes Sociales</h4>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-muted-foreground hover:text-accent">Facebook</Link>
                    <Link href="#" className="text-muted-foreground hover:text-accent">X</Link>
                    <Link href="#" className="text-muted-foreground hover:text-accent">LinkedIn</Link>
                    <Link href="#" className="text-muted-foreground hover:text-accent">Instagram</Link>
                  </div>
              </div>
            </div>
            <div className="lg:col-span-3 p-8 border rounded-lg bg-secondary/50">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Su nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="su@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asunto</FormLabel>
                        <FormControl>
                          <Input placeholder="Motivo de su consulta" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Escriba su mensaje aquí..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                    {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-primary text-primary-foreground py-6">
        <div className="container mx-auto text-center text-sm">
          <p>© {new Date().getFullYear()} NutriMet Clinic. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}
