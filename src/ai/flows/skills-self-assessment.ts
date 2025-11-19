'use server';

/**
 * @fileOverview Provides a GenAI-powered self-assessment tool to analyze user experience and suggest areas for skill development.
 *
 * - skillsSelfAssessment - A function that handles the skill self-assessment process.
 * - SkillsSelfAssessmentInput - The input type for the skillsSelfAssessment function.
 * - SkillsSelfAssessmentOutput - The return type for the skillsSelfAssessment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillsSelfAssessmentInputSchema = z.object({
  experience: z
    .string()
    .describe("A detailed description of the user's professional and academic experience."),
});
export type SkillsSelfAssessmentInput = z.infer<typeof SkillsSelfAssessmentInputSchema>;

const SkillsSelfAssessmentOutputSchema = z.object({
  suggestions: z
    .string()
    .describe("A list of suggested areas for skill development, tailored to the user's experience, to improve their portfolio and career prospects."),
});
export type SkillsSelfAssessmentOutput = z.infer<typeof SkillsSelfAssessmentOutputSchema>;

export async function skillsSelfAssessment(input: SkillsSelfAssessmentInput): Promise<SkillsSelfAssessmentOutput> {
  return skillsSelfAssessmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'skillsSelfAssessmentPrompt',
  input: {schema: SkillsSelfAssessmentInputSchema},
  output: {schema: SkillsSelfAssessmentOutputSchema},
  prompt: `You are a career advisor specializing in technology roles. Analyze the following experience and provide suggestions on areas where the user should focus on developing new skills to improve their portfolio and career prospects.\n\nExperience: {{{experience}}}`,
});

const skillsSelfAssessmentFlow = ai.defineFlow(
  {
    name: 'skillsSelfAssessmentFlow',
    inputSchema: SkillsSelfAssessmentInputSchema,
    outputSchema: SkillsSelfAssessmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
