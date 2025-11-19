'use client';

import {
  ArrowUp,
  CreditCard,
  Facebook,
  GalleryVertical,
  Newspaper,
  ScrollText,
  ShoppingCart,
  Twitter,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';

export function Footer() {
  const candidateImage = PlaceHolderImages.find((img) => img.id === 'candidate-photo');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerNav = [
    { name: 'News', icon: Newspaper, href: '#' },
    { name: 'Menifesto', icon: ScrollText, href: '#' },
    { name: 'Donation', icon: CreditCard, href: '#' },
    { name: 'Buy and Support', icon: ShoppingCart, href: '#' },
    { name: 'Gallery', icon: GalleryVertical, href: '#' },
  ];

  return (
    <>
      <footer className="bg-green-950 text-white font-headline border-t border-yellow-700/50">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Column */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              {candidateImage && (
                <div className="bg-white p-1 rounded-lg shadow-lg flex-shrink-0">
                  <Image
                    src={candidateImage.imageUrl}
                    alt="অধ্যক্ষ মুহাম্মদ নুরুল আমিন"
                    width={120}
                    height={120}
                    className="rounded-md"
                  />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold">অধ্যক্ষ মুহাম্মদ নুরুল আমিন</h3>
                <p className="text-sm">সংসদ সদস্য পদপ্রার্থী, চট্টগ্রাম-২ (ফটিকছড়ি)</p>
                <div className="flex gap-2 mt-4 justify-center md:justify-start">
                  <Button size="icon" variant="ghost" className="bg-blue-600 hover:bg-blue-700">
                    <Facebook className="h-5 w-5 text-white" />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-sky-500 hover:bg-sky-600">
                    <Twitter className="h-5 w-5 text-white" />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-red-600 hover:bg-red-700">
                    <Youtube className="h-5 w-5 text-white" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Middle Column (Empty Spacer on Desktop) */}
            <div className="hidden md:block"></div>

            {/* Right Column */}
            <div className="md:col-span-1">
              <ul className="space-y-3">
                {footerNav.map((item) => (
                  <li key={item.name} className="border-b border-gray-500/50 pb-3">
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-black text-gray-400 py-4 relative">
        <div className="container text-center text-sm">
          <span>Copyright © {new Date().getFullYear()} Nurul Amin</span>
          <span className="mx-2">|</span>
          <span>
            Developed by <a href="#" className="text-blue-400 hover:underline">Educellit</a>
          </span>
        </div>
        <Button
          onClick={scrollToTop}
          className="absolute right-4 bottom-2 h-8 w-8 p-0 bg-blue-600 hover:bg-blue-700 rounded-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
}
