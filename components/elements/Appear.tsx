'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, ReactNode, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Appear({ children }: { children: ReactNode }): ReactElement {
  const contentBlockRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1280px)', () => {
      ScrollTrigger.create({
        trigger: contentBlockRef.current,
        start: 'top 750',
        onEnter: () => {
          gsap.set(contentBlockRef.current, {
            opacity: 1,
          });
        },
      });
    });

    mm.add('(max-width: 1279px)', () => {
      ScrollTrigger.create({
        trigger: contentBlockRef.current,
        start: 'top 390',
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
      className='opacity-0  [transition:opacity_1s_ease-out]'
      ref={contentBlockRef}
    >
      {children}
    </div>
  );
}

export default Appear;
