'use client';

import { motion } from 'framer-motion';
import type { Service } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, description } = service;

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
      <Card className="text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader>
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
            <Icon className="h-8 w-8" />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
