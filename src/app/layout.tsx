import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Clínica Vitalis - Su Salud, Nuestra Prioridad',
  description: 'Clínica Vitalis ofrece servicios médicos de calidad con un equipo de expertos dedicados a su bienestar. Contáctenos para agendar su cita.',
  openGraph: {
    title: 'Clínica Vitalis - Su Salud, Nuestra Prioridad',
    description: 'Clínica Vitalis ofrece servicios médicos de calidad con un equipo de expertos dedicados a su bienestar.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://clinicavitalis.example.com', // Replace with your actual URL
    siteName: 'Clínica Vitalis',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
