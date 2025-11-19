import { getSortedPostsData } from '@/lib/blog-data';
import { getProjects } from '@/lib/projects';
import { HomePageClient } from '@/components/home-page-client';
import { about, education, experiences, services, skillCategories, testimonials } from '@/lib/data';

export default function Home() {
  const posts = getSortedPostsData();
  const projects = getProjects();
  
  return (
    <HomePageClient
      posts={posts}
      projects={projects}
      about={about}
      experiences={experiences}
      education={education}
      skillCategories={skillCategories}
      services={services}
      testimonials={testimonials}
    />
  );
}
