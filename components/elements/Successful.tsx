'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Successful(): ReactElement {
  const successfulRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1280px)', () => {
      ScrollTrigger.create({
        trigger: successfulRef.current,
        start: 'top 750',
        onEnter: () => {
          gsap.set(successfulRef.current, {
            color: '#29AD04',
          });
        },
      });
    });

    mm.add('(min-width: 768px) and (max-width: 1279px)', () => {
      ScrollTrigger.create({
        trigger: successfulRef.current,
        start: 'top 390',
        onEnter: () => {
          gsap.set(successfulRef.current, {
            color: '#29AD04',
          });
        },
      });
    });
  }, []);

  return (
    <span
      ref={successfulRef}
      className='text-green  [transition:color_0.4s_ease-out]  md:text-black  dark:md:text-white'
    >
      Successful
    </span>
  );
}

export default Successful;
