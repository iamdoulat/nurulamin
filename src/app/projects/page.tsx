import type { Metadata } from 'next';
import { getProjects } from '@/lib/projects';
import { SectionHeading } from '@/components/section-heading';
import { ProjectCard } from '@/components/project-card';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of projects I have worked on.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="container py-12 md:py-24">
      <SectionHeading
        title="My Projects"
        description="Here are some of the projects I'm proud to have worked on. Each one presented unique challenges and learning opportunities."
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
