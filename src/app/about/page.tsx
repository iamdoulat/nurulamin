import type { Metadata } from 'next';
import { about, education, experiences } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';
import { Timeline } from '@/components/timeline';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my professional background, experience, and education.',
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <SectionHeading
        title="About Me"
        description={about.introduction}
        className="mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Work Experience</h3>
          <Timeline items={experiences} />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="p-4 border rounded-lg bg-card shadow-sm">
                <h4 className="font-semibold text-lg">{edu.institution}</h4>
                <p className="text-primary">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
