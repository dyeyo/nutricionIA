import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
// @ts-ignore
import './globals.css';

export const metadata: Metadata = {
  title: 'NutriMet Clinic - Nutrición que impulsa tu mejor versión',
  description: 'NutriMet Clinic, una institución dedicada a la orientación y atención nutricional integral. Promovemos hábitos saludables para fortalecer el bienestar y la calidad de vida.',
  openGraph: {
    title: 'NutriMet Clinic - Nutrición que impulsa tu mejor versión',
    description: 'NutriMet Clinic, una institución dedicada a la orientación y atención nutricional integral.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://nutrimetclinic.example.com', // Replace with your actual URL
    siteName: 'NutriMet Clinic',
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
