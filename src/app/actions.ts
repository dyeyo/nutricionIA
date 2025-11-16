'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, ingrese un correo válido."),
  subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
})

export async function submitContactForm(data: unknown) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Falló la validación."
    }
  }
  
  // In a real application, you would send an email, save to a database, etc.
  console.log("New contact form submission:", validatedFields.data);

  return { 
    success: true, 
    message: "¡Gracias por contactarnos! Su mensaje ha sido enviado con éxito."
  }
}
