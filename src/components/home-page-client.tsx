'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Download, Mail, MapPin, Phone, Send } from 'lucide-react';
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

  const candidateImage = PlaceHolderImages.find((img) => img.id === 'candidate-photo');
  const visionPoints = [
    'উন্নত যোগাযোগ', 'দূর্নীতিমুক্ত প্রশাসন', 'ব্যাপক কর্মসংস্থান তৈরী', 'প্রযুক্তিগত উৎকর্ষ সাধন', 'এবং মানসম্মত শিক্ষাব্যবস্থা নিশ্চিতকরণ'
  ];

  return (
    <>
      <section id="home" className="container py-12 sm:py-20 bg-[hsl(140_70%_10%)] text-white font-headline">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="border border-primary/50 rounded-full px-8 py-3 text-center text-2xl text-primary shadow-[0_0_20px] shadow-primary/50">
              আমাদের ভিশন!
            </motion.div>
            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-5xl md:text-6xl font-bold text-center"
            >
              সমৃদ্ধ ফটিকছড়ি বিনির্মানে
            </motion.h1>
            <motion.ul variants={FADE_UP_ANIMATION_VARIANTS} className="grid grid-cols-2 gap-x-4 gap-y-2 text-lg">
              {visionPoints.map((point, index) => (
                <li key={index} className={`flex items-center gap-2 ${index === visionPoints.length -1 ? 'col-span-2' : ''}`}>
                  <Check className="text-primary h-5 w-5" />
                  <span>{point}</span>
                </li>
              ))}
            </motion.ul>
            <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl font-bold text-center text-primary">
              দূর্নীতিমুক্ত প্রশাসন
            </motion.h2>
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex items-center justify-center gap-4"
            >
              <Button variant="destructive" size="lg" className="bg-accent text-accent-foreground font-bold text-lg rounded-md border-2 border-accent hover:bg-accent/90">
                Join With Us
              </Button>
              <Button variant="outline" size="lg" className="font-bold text-lg rounded-md border-2 border-white text-white bg-transparent hover:bg-white hover:text-black">
                Donate Now
              </Button>
            </motion.div>
          </div>
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative flex justify-center">
            <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900/50 p-4 rounded-2xl shadow-2xl shadow-primary/20">
              <div className="relative text-center p-4">
                <div className="absolute inset-0 bg-[url('https://www.svgrepo.com/show/448259/balance.svg')] bg-no-repeat bg-center opacity-10 bg-contain" style={{ backgroundSize: '50%'}}></div>
                <h3 className="text-3xl font-bold">সমৃদ্ধ ফটিকছড়ি</h3>
                <p className="text-2xl mb-4">আমাদের অঙ্গীকার</p>
                
                {candidateImage && (
                  <Image
                    src={candidateImage.imageUrl}
                    alt="অধ্যক্ষ মুহাম্মদ নুরুল আমিন"
                    width={450}
                    height={450}
                    className="rounded-lg mx-auto shadow-lg relative z-10"
                    priority
                    data-ai-hint={candidateImage.imageHint}
                  />
                )}
                
                <div className="mt-4 relative z-10">
                  <h2 className="text-5xl font-bold">অধ্যক্ষ মুহাম্মদ নুরুল আমিন</h2>
                  <div className="inline-block bg-primary/80 text-primary-foreground px-6 py-2 rounded-lg mt-2 text-3xl font-semibold shadow-lg">
                    সংসদ সদস্য पदप्रার্থী
                  </div>
                  <p className="text-2xl mt-2">ফটিকছড়ি-২</p>
                </div>
              </div>
            </div>
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
