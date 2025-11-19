import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { format } from 'date-fns';

import { getPostData, getSortedPostsData } from '@/lib/blog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { user } from '@/lib/data';
import { BlogPost } from '@/components/blog-post';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostData(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogArticlePage({ params }: Props) {
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === post.image);

  return (
    <article className="container max-w-4xl py-12 md:py-24">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Image
              src={PlaceHolderImages.find((img) => img.id === 'profile-photo')?.imageUrl || ''}
              alt={user.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>{user.name}</span>
          </div>
          <span>•</span>
          <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
      </header>

      {image && (
        <Image
          src={image.imageUrl}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-lg object-cover w-full shadow-lg mb-8"
          data-ai-hint={image.imageHint}
        />
      )}
      
      <BlogPost content={post.content} />
    </article>
  );
}
