import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import { getProjectBySlug, getProjects } from '@/lib/projects';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github } from 'lucide-react';
import { BlogPost } from '@/components/blog-post';
import { user } from '@/lib/data';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === `${project.slug}-hero`);
  const heroImage = image || PlaceHolderImages.find((img) => img.id === 'project-1-hero');

  return (
    <article className="container py-12 md:py-24">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{project.description}</p>
      </header>

      {heroImage && (
        <div className="mb-12">
          <Image
            src={heroImage.imageUrl}
            alt={project.title}
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full shadow-lg"
            data-ai-hint={heroImage.imageHint}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-3">
          <BlogPost content={project.content} />
        </div>
        <aside className="md:col-span-1 space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <div className="flex flex-col items-start gap-4">
               <Button variant="outline" asChild className="w-full">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </a>
              </Button>
              {project.liveUrl && (
                <Button asChild className="w-full">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Visit Live Site <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Author</h3>
            <div className="flex items-center gap-4">
              <Image
                src={PlaceHolderImages.find((img) => img.id === 'profile-photo')?.imageUrl || ''}
                alt={user.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.role}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
