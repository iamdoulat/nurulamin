import type { Metadata } from 'next';
import { testimonials } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';
import { TestimonialCard } from '@/components/testimonial-card';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'See what clients are saying about my work.',
};

export default function TestimonialsPage() {
  return (
    <div className="container py-12 md:py-24">
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
    </div>
  );
}
