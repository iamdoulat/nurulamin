
'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import type { BlogPost, Education, Experience, Project, Service, SkillCategory, Testimonial } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { about } from '@/lib/data';
import { Button } from './ui/button';
import { SectionHeading } from './section-heading';
import { ContactForm } from './contact-form';
import { TypingAnimation } from './animations/typing-animation';

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

export function HomePageClient({}: HomePageClientProps) {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  const candidateImage = PlaceHolderImages.find((img) => img.id === 'candidate-photo');
  
  const visionPoints = [
    'উন্নত যোগাযোগ', 'দূর্নীতিমুক্ত প্রশাসন', 'ব্যাপক কর্মসংস্থান তৈরী', 'প্রযুক্তিগত উৎকর্ষ সাধন', 'এবং মানসম্মত শিক্ষাব্যবস্থা নিশ্চিতকরণ'
  ];

  const animatedPhrases = [
    'উন্নত যোগাযোগ',
    'দূর্নীতিমুক্ত প্রশাসন',
    'ব্যাপক কর্মসংস্থান তৈরী',
    'প্রযুক্তিগত উৎকর্ষ সাধন',
    'মানসম্মত শিক্ষাব্যবস্থা নিশ্চিতকরণ',
  ];

  return (
    <>
      <section id="home" className="bg-green-950 text-white font-headline">
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
          className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-[15px] pb-12 sm:pb-20"
        >
          <div className="space-y-8 lg:order-1 order-2">
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="border border-primary/50 rounded-full px-8 py-3 text-center text-5xl text-primary shadow-[0_0_20px] shadow-primary/50">
              আমাদের ভিশন!
            </motion.div>
            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-5xl pt-5 md:text-6xl font-bold text-center"
            >
              সমৃদ্ধ ফটিকছড়ি বিনির্মানে
            </motion.h1>
            
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <TypingAnimation phrases={animatedPhrases} />
            </motion.div>
            
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xl text-center">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{point}{index < visionPoints.length - 1 ? ',' : ''}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex items-center justify-center gap-4"
            >
              <Button asChild variant="destructive" size="lg" className="bg-accent text-accent-foreground font-bold text-lg rounded-md border-2 border-accent hover:bg-accent/90">
                <Link href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Contact us
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="font-bold text-lg rounded-md border-2 border-white text-white bg-transparent hover:bg-white hover:text-black">
                Donate Now
              </Button>
            </motion.div>
          </div>
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative flex justify-center lg:order-2 order-1">
            <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900/50 p-1 rounded-2xl shadow-2xl shadow-primary/20">
              <div className="relative text-center p-4">
                <div className="absolute inset-0 bg-[url('https://www.svgrepo.com/show/448259/balance.svg')] bg-no-repeat bg-center opacity-10 bg-contain" style={{ backgroundSize: '50%'}}></div>
                <h3 className="text-5xl pt-3 font-bold animate-text-gradient">সমৃদ্ধ ফটিকছড়ি</h3>
                <p className="text-2xl mb-4">আমাদের অঙ্গীকার</p>
                
                {candidateImage && (
                  <Image
                    src={candidateImage.imageUrl}
                    alt="অধ্যক্ষ মুহাম্মদ নুরুল আমিন"
                    width={450}
                    height={488}
                    className="rounded-lg mx-auto shadow-lg relative z-10"
                    priority
                    data-ai-hint={candidateImage.imageHint}
                  />
                )}
                
                <div className="mt-4 relative z-10">
                  <h2 className="text-5xl pt-2 font-bold">অধ্যক্ষ মুহাম্মদ নুরুল আমিন</h2>
                  <div className="inline-block bg-primary/80 text-primary-foreground px-6 py-2 rounded-lg mt-2 text-3xl font-semibold shadow-lg">
                    সংসদ সদস্য পদপ্রার্থী
                  </div>
                  <p className="text-2xl mt-2">চট্টগ্রাম-২ (ফটিকছড়ি)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-12 md:py-16 font-headline">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="bg-gradient-to-r from-green-700 via-green-800 to-red-800 text-white rounded-xl shadow-2xl p-8 border-4 border-white"
          >
            <h3 className="text-4xl text-center font-bold mb-8">জনপদের সেবায়, জনতার ভালোবাসায়</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-6xl font-bold text-yellow-300">4 টি</p>
                <p className="text-2xl mt-2">নির্বাচনের মধ্যে</p>
              </div>
              <div>
                <p className="text-6xl font-bold text-yellow-300">3 টি</p>
                <p className="text-2xl mt-2">নির্বাচনে বিজয়</p>
              </div>
              <div>
                <p className="text-6xl font-bold text-yellow-300">162,000+</p>
                <p className="text-2xl mt-2">জনতার রায়</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-center mt-12 relative"
          >
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzepzzvh8/image/upload/v1763665380/Nurulamin/vote-bg_jze1jf.png')] bg-no-repeat bg-center opacity-10" />

            <p className="text-3xl text-gray-700 dark:text-gray-300">আসন্ন জাতীয় সংসদ নির্বাচনে চট্টগ্রাম-১৬, বাঁশখালী থেকে, ন্যায় ও ইনসাফের প্রতীক</p>
            <h2 className="text-8xl font-bold text-red-600 my-4 drop-shadow-lg">দাঁড়িপাল্লা, ইনশাআল্লাহ</h2>
          </motion.div>
        </div>
      </section>

      <main>
        <section id="contact" className="container py-12 md:py-24">
          <SectionHeading
            title="Contact Me"
            description="Have a project in mind or just want to say hello? Feel free to reach out."
            className="mb-12"
          />
          <div className="max-w-xl mx-auto">
              <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
