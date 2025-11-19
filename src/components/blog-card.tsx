'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import type { BlogPost } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === post.image);

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  const formattedDate = format(new Date(post.date), 'PPP');

  return (
    <motion.div
      variants={FADE_UP_ANIMATION_VARIANTS}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <Link href={`/blog/${post.slug}`} className="block">
          {image && (
            <Image
              src={image.imageUrl}
              alt={post.title}
              width={600}
              height={400}
              className="object-cover w-full h-48"
              data-ai-hint={image.imageHint}
            />
          )}
        </Link>
        <CardHeader>
          <CardTitle>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </CardTitle>
          <p className="text-sm text-muted-foreground">{formattedDate}</p>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
