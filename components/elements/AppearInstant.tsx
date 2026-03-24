'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, ReactNode, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function AppearInstant({ children }: { children: ReactNode }): ReactElement {
  const contentBlockRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: contentBlockRef.current,
        start: 'top 100000',
        onEnter: () => {
          gsap.set(contentBlockRef.current, {
            opacity: 1,
          });
        },
      });
    });
  }, []);

  return (
    <div
      className='[transition:opacity_1s_ease-in-out]  md:opacity-0'
      ref={contentBlockRef}
    >
      {children}
    </div>
  );
}

export default AppearInstant;
