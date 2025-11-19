'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

import type { Testimonial } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, role, avatar, testimonial: content } = testimonial;
  const image = PlaceHolderImages.find((img) => img.id === avatar);

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <motion.div
      variants={FADE_UP_ANIMATION_VARIANTS}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col">
        <CardContent className="p-6 flex-grow flex flex-col">
          <Quote className="w-8 h-8 text-primary mb-4" />
          <p className="text-muted-foreground mb-6 flex-grow">"{content}"</p>
          <div className="flex items-center gap-4">
            {image && (
              <Image
                src={image.imageUrl}
                alt={name}
                width={56}
                height={56}
                className="rounded-full object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
