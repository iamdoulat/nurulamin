import Link from 'next/link';

import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function SocialIcons() {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <Button key={name} variant="ghost" size="icon" asChild>
          <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
            <Icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </Button>
      ))}
    </div>
  );
}
