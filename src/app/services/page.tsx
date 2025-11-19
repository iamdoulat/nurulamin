import type { Metadata } from 'next';
import { services } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';

export const metadata: Metadata = {
  title: 'Services',
  description: 'An overview of the services I offer, from web development to UI/UX design.',
};

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24">
      <SectionHeading
        title="What I Do"
        description="I offer a range of services to help you build and grow your digital presence. My focus is on delivering high-quality, user-centric products."
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}
