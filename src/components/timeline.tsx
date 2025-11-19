'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import type { Experience } from '@/lib/types';

interface TimelineProps {
  items: Experience[];
}

export function Timeline({ items }: TimelineProps) {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative pl-12 mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="absolute left-4 top-1 h-8 w-8 -translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-primary" />
          </div>
          <div className="p-4 border rounded-lg bg-card shadow-sm">
            <p className="text-sm text-muted-foreground">{item.period}</p>
            <h3 className="text-lg font-bold mt-1">{item.role}</h3>
            <p className="text-primary font-semibold">{item.company}</p>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
