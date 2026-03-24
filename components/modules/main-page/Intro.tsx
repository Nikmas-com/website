import MainContainer from '@/components/elements/MainContainer';
import { ReactElement } from 'react';

function Intro(): ReactElement {
  return (
    <section>
      <MainContainer>
        <h1>
          <span
            className='mb-2  block  translate-x-[-1.6vw]  
                       text-[27.45vw]  font-bold  leading-none
                       text-black  1.5sm:mb-0 
                       sm:text-[26.9vw]  lg:-mb-5  lg:translate-x-[-1.4vw]
                       lg:text-[25vw]  xl:translate-x-[-1.5vw]
                       2xl:translate-x-[-23px]  2xl:text-[375px]  dark:text-white'
          >
            Nikmas
          </span>
          <span
            className='text-[10vw]  font-semibold  leading-tight
                       1.5sm:text-[6vw]  lg:text-[5vw]  lg:leading-tight
                     2xl:text-[77px]  dark:text-white'
          >
            is{' '}
            <span className='!text-green'>a&nbsp;human growth ecosystem</span> —
            where&nbsp;education, innovation, and&nbsp;capital
            come&nbsp;together.
          </span>
        </h1>
      </MainContainer>
    </section>
  );
}

export default Intro;
