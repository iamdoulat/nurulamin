'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SocialIcons } from '@/components/social-icons';
import { user, siteConfig } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'profile-photo');

export default function Home() {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="container relative mx-auto flex flex-col-reverse items-center justify-center gap-12 px-4 py-12 md:flex-row md:min-h-[calc(100vh-4rem)] md:py-24">
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
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
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            variants={FADE_IN_ANIMATION_VARIANTS}
          >
            {user.name}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-lg text-muted-foreground"
            variants={FADE_IN_ANIMATION_VARIANTS}
          >
            I&apos;m a <span className="font-semibold text-primary">{user.role}</span>. {user.summary}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
            variants={FADE_IN_ANIMATION_VARIANTS}
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.links.cv} target="_blank" rel="noopener noreferrer">
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          <motion.div
            className="mt-8 flex justify-center md:justify-start"
            variants={FADE_IN_ANIMATION_VARIANTS}
          >
            <SocialIcons />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            <div className="absolute inset-0 -m-4 rounded-full bg-primary/20 blur-2xl"></div>
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={user.name}
                width={400}
                height={400}
                priority
                className="relative rounded-full object-cover shadow-lg"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
