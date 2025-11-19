import type { Metadata } from 'next';
import { skillCategories } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';
import { SkillsGrid } from '@/components/skills-grid';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'A showcase of my technical skills and expertise.',
};

export default function SkillsPage() {
  return (
    <div className="container py-12 md:py-24">
      <SectionHeading
        title="My Skills"
        description="Here's a snapshot of the technologies and tools I work with. I'm always learning and adapting to new challenges."
        className="mb-12"
      />
      <div className="space-y-12">
        {skillCategories.map((category) => (
          <SkillsGrid key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
}
