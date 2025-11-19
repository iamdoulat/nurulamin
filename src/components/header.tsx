'use client';

import Link from 'next/link';
import { Menu, Mountain } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { navItems, siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useActivePath } from '@/hooks/use-active-path';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const checkActivePath = useActivePath();

  const NavLink = ({ href, title }: { href: string; title: string }) => (
    <Link
      href={href}
      className={cn(
        'relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
        checkActivePath(href) && 'text-primary'
      )}
      onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
    >
      {title}
      {checkActivePath(href) && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 top-full block h-[2px] w-full bg-primary"
        />
      )}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>
        <nav className="relative hidden items-center space-x-6 text-sm font-medium md:flex">
          <AnimatePresence>
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </AnimatePresence>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-bold">{siteConfig.name}</span>
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
