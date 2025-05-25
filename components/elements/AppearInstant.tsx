'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, ReactNode, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function AppearInstant({ children }: { children: ReactNode }): ReactElement {
  const contentBlockRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: contentBlockRef.current,
      start: 'top 100000',
      onEnter: () => {
        gsap.set(contentBlockRef.current, {
          opacity: 1,
        });
      },
    });
  }, []);

  return (
    <div
      className='opacity-0  [transition:opacity_2s_ease-in-out]'
      ref={contentBlockRef}
    >
      {children}
    </div>
  );
}

export default AppearInstant;
