import BasicTextNode from '@/components/elements/BasicTextNode';
import MainContainer from '@/components/elements/MainContainer';
import nikmasDark from '@/public/images/nikmas-dark.png';
import nikmasLight from '@/public/images/nikmas-light.png';
import Image from 'next/image';
import { ReactElement } from 'react';

function Intro(): ReactElement {
  return (
    <section>
      <MainContainer>
        <div
          className='mt-1  flex  flex-col  sm:mt-2  md:flex-row  
                      md:justify-between'
        >
          <div>
            <h1
              className='text-[11.5vw]  font-bold  !leading-[1.1]
                       sm:text-5xl md:text-[8vw] 2lg:text-[6vw] 
                       xl:text-[clamp(1px,11vh,min(6vw,5.76rem))]
                       dark:text-white'
            >
              From Ideas
              <br /> to&nbsp;<span className='text-green'>Successful</span>
              <br className='' /> Tech Businesses
            </h1>
            <BasicTextNode
              className='mt-5  max-w-[28.125rem]  text-2xl  
                       leading-[1.3]  md:mt-[2.7vw]  md:max-w-[56vw]
                       md:text-[3vw]  2lg:mt-[2.5vw]  2lg:max-w-[52vw]
                       2lg:text-[2.7vw]  xl:text-[clamp(1px,5vh,min(2.7vw,2.592rem))]
                       2xl:mt-[2.4rem]
                       2xl:max-w-[50rem]'
            >
              <span className='sm:hidden'>
                Nikmas is a&nbsp;Tech Cofounding Company. We partner
                with&nbsp;entrepreneurs, bringing our full expertise
                to&nbsp;transform ideas into&nbsp;highly profitable
                and&nbsp;useful tech businesses.
              </span>
              <span className='hidden  sm:inline'>
                Nikmas&nbsp;is&nbsp;a&nbsp;Tech&nbsp;Cofounding&nbsp;Company.
                <br /> We&nbsp;partner&nbsp;with&nbsp;entrepreneurs, bringing
                <br />{' '}
                our&nbsp;full&nbsp;expertise&nbsp;to&nbsp;transform&nbsp;ideas&nbsp;
                <br />
                into&nbsp;highly&nbsp;profitable&nbsp;and&nbsp;useful
                <br />
                tech&nbsp;businesses.
              </span>
            </BasicTextNode>
          </div>
          <div
            className='mt-12  w-2/5  self-center  sm:w-32  md:mt-0  md:w-[17vw]  md:translate-y-[4px]
                     md:self-start  2lg:w-[14vw]  xl:w-[clamp(1px,25.8vh,min(14vw,13.44rem))]'
          >
            <Image
              className='w-full  dark:hidden'
              src={nikmasLight}
              alt='Nikmas'
              quality={100}
              priority
            />
            <Image
              className='hidden  w-full  dark:inline-block'
              src={nikmasDark}
              alt='Nikmas'
              quality={100}
              priority
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default Intro;
