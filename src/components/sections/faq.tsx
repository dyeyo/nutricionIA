'use client';

import React, { useState, useEffect } from 'react';
import { generateFaqAnswers } from '@/ai/flows/generate-faq-answers';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

const questions = [
  "¿Cuál es el horario de atención de la clínica?",
  "¿Qué seguros médicos aceptan?",
  "¿Ofrecen servicios de emergencia?",
  "¿Cómo puedo agendar una cita?",
  "¿Qué servicios de especialidad ofrecen?"
];

export default function Faq() {
  const [faqData, setFaqData] = useState<{ question: string; answer: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFaqAnswers() {
      try {
        setIsLoading(true);
        // This is a server action that calls the GenAI flow
        const answers = await generateFaqAnswers(questions);
        const combinedData = questions.map((question, index) => ({
          question,
          answer: answers[index] || "Respuesta no disponible en este momento.",
        }));
        setFaqData(combinedData);
      } catch (error) {
        console.error("Failed to generate FAQ answers:", error);
        const errorData = questions.map(q => ({ question: q, answer: "No se pudo cargar la respuesta. Por favor, inténtelo de nuevo más tarde." }));
        setFaqData(errorData);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFaqAnswers();
  }, []);

  return (
    <section id="faqs" className="w-full bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Encuentre respuestas rápidas a las consultas más comunes sobre nuestros servicios y procedimientos.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-6 w-5/6" />
                </div>
              ))}
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
}
