import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { SkillsAssessmentForm } from '@/components/skills-assessment-form';

export const metadata: Metadata = {
  title: 'Skills Assessment',
  description: 'Get AI-powered suggestions for your career development.',
};

export default function SkillsAssessmentPage() {
  return (
    <div className="container py-12 md:py-24">
      <SectionHeading
        title="AI-Powered Skills Assessment"
        description="Describe your professional and academic experience, and our AI career advisor will suggest areas for skill development to enhance your portfolio and career prospects."
        className="mb-12"
      />
      <div className="max-w-3xl mx-auto">
        <SkillsAssessmentForm />
      </div>
    </div>
  );
}
