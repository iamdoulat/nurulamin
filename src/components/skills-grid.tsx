'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { SkillCategory } from '@/lib/types';

interface SkillsGridProps {
  category: SkillCategory;
}

export function SkillsGrid({ category }: SkillsGridProps) {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_IN_ANIMATION_VARIANTS}
    >
      <Card>
        <CardHeader>
          <CardTitle>{category.title}</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium">{skill.name}</h4>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
