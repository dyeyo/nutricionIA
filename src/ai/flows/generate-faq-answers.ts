'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate FAQ answers for the clinic.
 *
 * The flow uses a prompt to generate succinct answers to common questions about the clinic,
 * such as clinic hours, accepted insurance, and services offered.
 *
 * @exported {
 *   generateFaqAnswers: (questions: string[]) => Promise<string[]> - A function to generate FAQ answers.
 *   FaqAnswersInput: type - The input type for the generateFaqAnswers function (an array of questions).
 *   FaqAnswersOutput: type - The output type for the generateFaqAnswers function (an array of answers).
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqAnswersInputSchema = z.array(z.string().describe('A frequently asked question.')).describe('An array of frequently asked questions.');
export type FaqAnswersInput = z.infer<typeof FaqAnswersInputSchema>;

const FaqAnswersOutputSchema = z.array(z.string().describe('The answer to a frequently asked question.')).describe('An array of answers to frequently asked questions.');
export type FaqAnswersOutput = z.infer<typeof FaqAnswersOutputSchema>;

export async function generateFaqAnswers(questions: string[]): Promise<string[]> {
  return generateFaqAnswersFlow(questions);
}

const faqPrompt = ai.definePrompt({
  name: 'faqPrompt',
  input: {schema: FaqAnswersInputSchema},
  output: {schema: FaqAnswersOutputSchema},
  prompt: `You are a helpful assistant providing succinct answers to frequently asked questions about a medical clinic called Clínica Vitalis.  Given the following list of questions, provide a concise and informative answer for each question.  Limit each answer to one or two sentences, suitable for display in an FAQ accordion. Output in JSON format. Questions: {{{questions}}}`,
});

const generateFaqAnswersFlow = ai.defineFlow(
  {
    name: 'generateFaqAnswersFlow',
    inputSchema: FaqAnswersInputSchema,
    outputSchema: FaqAnswersOutputSchema,
  },
  async questions => {
    const {output} = await faqPrompt(questions);
    return output!;
  }
);
