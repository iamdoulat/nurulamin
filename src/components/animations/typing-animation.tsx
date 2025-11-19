'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export function TypingAnimation({
  phrases,
  className,
}: {
  phrases: string[];
  className?: string;
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = 120;
    const deletingSpeed = 80;
    const delayAfterTyping = 1500;

    const handleTyping = () => {
      if (isDeleting) {
        if (typedText.length > 0) {
          setTypedText(currentPhrase.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        if (typedText.length < currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayAfterTyping);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, phrases]);

  return (
    <h2 className={cn('text-4xl font-bold text-center text-primary h-24 md:h-auto', className)}>
      <span>{typedText}</span>
      <motion.span
        variants={cursorVariants}
        animate="blinking"
        className="inline-block ml-1 h-10 w-1.5 bg-primary"
      />
    </h2>
  );
}
