'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, HeartPulse } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre Nosotros', href: '#about' },
  { name: 'Árbol de Problemas', href: '#problem-tree' },
  { name: 'Matriz DOFA', href: '#swot-matrix' },
  { name: 'Misión y Visión', href: '#mission-vision' },
  { name: 'Objetivos', href: '#strategic-objectives' },
  { name: 'Clientes', href: '#clients' },
  { name: 'Mapa de Procesos', href: '#process-map' },
  { name: 'Equipo', href: '#team' },
  { name: 'Áreas', href: '#areas' },
  { name: 'Servicios', href: '#services' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Alianzas', href: '#interdependence' },
  { name: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <HeartPulse className="h-6 w-6 text-accent" />
          <span className="font-bold font-headline sm:inline-block">
            NutriMet Clinic
          </span>
        </Link>
        <nav className="hidden lg:flex lg:items-center lg:gap-4 text-sm font-medium">
          {navLinks.slice(0, 8).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-accent"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
           <Sheet>
            <SheetTrigger asChild>
                <Button variant="link" className="text-sm font-medium transition-colors hover:text-accent p-0 h-auto">Más</Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
                 <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-accent"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
            </SheetContent>
           </Sheet>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-4 border-b">
                   <Link href="/" className="flex items-center space-x-2" onClick={(e) => handleLinkClick(e, '/')}>
                    <HeartPulse className="h-6 w-6 text-accent" />
                    <span className="font-bold">NutriMet Clinic</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Cerrar menú</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-accent"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                 <div className="mt-auto pt-6">
                    <Button asChild className="w-full">
                        <Link href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>Agendar Cita</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Button asChild className="hidden lg:flex">
            <Link href="#contact">Agendar Cita</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
