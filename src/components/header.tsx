'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { navItems, siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + 100;

      let currentSection = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = section.id;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, title }: { href: string; title: string }) => {
    const isActive = activeSection === href.substring(1);
    return (
    <Link
      href={href}
      className={cn(
        'relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
        isActive && 'text-primary'
      )}
      onClick={(e) => {
        if (href.startsWith('#')) {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
          if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        } else {
           if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        }
      }}
    >
      {title}
      {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 top-full block h-[2px] w-full bg-primary"
        />
      )}
    </Link>
  )};

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="flex-1 flex items-center justify-start">
            <Link href="#home" className="mr-6 flex items-center space-x-2" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
            }}>
            <Image src="https://res.cloudinary.com/dzepzzvh8/image/upload/v1763565587/Nurulamin/logo_qbjmpf.png" alt={siteConfig.name} width={140} height={40} />
            </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="relative hidden items-center space-x-6 text-sm font-medium md:flex">
            <AnimatePresence>
              {navItems.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </AnimatePresence>
          </nav>
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="#home" className="mr-6 flex items-center space-x-2" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}>
                 <Image src="https://res.cloudinary.com/dzepzzvh8/image/upload/v1763565587/Nurulamin/logo_qbjmpf.png" alt={siteConfig.name} width={140} height={40} />
              </Link>
              <div className="mt-6 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
