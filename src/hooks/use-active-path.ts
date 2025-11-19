'use client'

import { usePathname } from 'next/navigation';

export function useActivePath() {
  const pathname = usePathname();

  const checkActivePath = (path: string) => {
    if (path === '/' && pathname !== '/') {
      return false;
    }
    return pathname === path || (path !== '/' && pathname.startsWith(path));
  };

  return checkActivePath;
}
