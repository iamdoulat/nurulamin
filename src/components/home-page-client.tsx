'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

import type { BlogPost, Education, Experience, Project, Service, SkillCategory, Testimonial } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { about, siteConfig, user } from '@/lib/data';
import { Button } from './ui/button';
import { SectionHeading } from './section-heading';
import { ProjectCard } from './project-card';
import { TestimonialCard } from './testimonial-card';
import { ContactForm } from './contact-form';
import { Timeline } from './timeline';
import { SkillsGrid } from './skills-grid';
import { ServiceCard } from './service-card';
import { SocialIcons } from './social-icons';
import { BlogCard } from './blog-card';

type HomePageClientProps = {
  posts: BlogPost[];
  projects: Project[];
  about: typeof about;
  experiences: Experience[];
  education: Education[];
  skillCategories: SkillCategory[];
  services: Service[];
  testimonials: Testimonial[];
};

export function HomePageClient({
  posts,
  projects,
  about,
  experiences,
  education,
  skillCategories,
  services,
  testimonials,
}: HomePageClientProps) {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-photo');

  return (
    <>
      <section id="home" className="container py-24 sm:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center"
        >
          <div className="md:col-span-3 space-y-6">
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-primary font-medium">
              Hey, I'm {user.name}
            </motion.div>
            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-4xl sm:text-5xl font-bold"
            >
              {user.role}
            </motion.h1>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-lg text-muted-foreground"
            >
              {user.summary}
            </motion.p>
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex items-center gap-4"
            >
              <Button asChild>
                <Link href="#contact">
                  Get in Touch <Send className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href={siteConfig.links.cv} target="_blank" rel="noopener noreferrer">
                  Download CV <Download className="ml-2" />
                </a>
              </Button>
            </motion.div>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <SocialIcons />
            </motion.div>
          </div>
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="md:col-span-2">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full mx-auto shadow-lg"
                priority
                data-ai-hint={profileImage.imageHint}
              />
            )}
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="container py-12 md:py-24">
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
      </section>

      <section id="skills" className="container py-12 md:py-24">
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
      </section>

      <section id="projects" className="container py-12 md:py-24">
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
      </section>

      <section id="services" className="container py-12 md:py-24">
        <SectionHeading
          title="What I Do"
          description="I offer a range of services to help you build and grow your digital presence. My focus is on delivering high-quality, user-centric products."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section id="testimonials" className="container py-12 md:py-24">
        <SectionHeading
          title="What My Clients Say"
          description="I take pride in delivering high-quality work and building lasting relationships. Here's what some of my clients have to say about their experience."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section id="blog" className="container py-12 md:py-24">
        <SectionHeading
          title="From the Blog"
          description="I occasionally write about web development, new technologies, and my personal experiences in the tech industry."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section id="contact" className="container py-12 md:py-24">
        <SectionHeading
          title="Contact Me"
          description="Have a project in mind or just want to say hello? Feel free to reach out."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">Drop me a line anytime.</p>
                <a href="mailto:contact@example.com" className="text-primary hover:underline">
                  contact@example.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-muted-foreground">Available during business hours.</p>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
                <p className="text-primary">Open to remote work</p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
