import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/blog';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on web development, technology, and more.',
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="container py-12 md:py-24">
      <SectionHeading
        title="My Blog"
        description="I write about web development, design, and the tech world. Here are my latest articles."
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const image = PlaceHolderImages.find((img) => img.id === post.image);
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
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
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
