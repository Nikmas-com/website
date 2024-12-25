import Appear from '@/components/elements/Appear';
import BasicTextNode from '@/components/elements/BasicTextNode';
import ExternalLink from '@/components/elements/ExternalLink';
import H2 from '@/components/elements/H2';
import H3 from '@/components/elements/H3';
import MainContainer from '@/components/elements/MainContainer';
import NikmasStudioDark from '@/public/images/nikmas-studio-dark.png';
import NikmasStudioLight from '@/public/images/nikmas-studio-light.png';
import Image from 'next/image';
import { ReactElement } from 'react';

function Ecosystem(): ReactElement {
  return (
    <section className='mt-[5.5rem]  lg:mt-32'>
      <Appear>
        <MainContainer>
          <H2 className='text-center'>
            The&nbsp;first&nbsp;company in&nbsp;our&nbsp;ecosystem
          </H2>
          <div className='mt-12  flex  flex-col  items-center'>
            <div className='w-[85%]  max-w-80'>
              <ExternalLink href='https://nikmas.studio'>
                <Image
                  className='w-full
                         will-change-transform
                         [filter:drop-shadow(0_0_80px_rgba(0,0,0,0.07))]  dark:hidden'
                  src={NikmasStudioLight}
                  alt='Nikmas Studio'
                  quality={100}
                  sizes='320px'
                  priority
                />
                <Image
                  className='hidden  w-full
                         will-change-transform
                         [filter:drop-shadow(0_0_80px_rgba(255,255,255,0.18))]  
                         xl:[filter:drop-shadow(0_0_120px_rgba(255,255,255,0.14))]  
                         dark:inline-block'
                  src={NikmasStudioDark}
                  alt='Nikmas Studio'
                  quality={100}
                  sizes='320px'
                  priority
                />
              </ExternalLink>
            </div>
            <div className='mt-8'>
              <H3 className='mb-3'>Nikmas Studio</H3>
              <BasicTextNode className='text-[1.3rem]  !leading-[1.3]'>
                Next-gen&nbsp;publishing&nbsp;studio
                <br /> that&nbsp;specializes&nbsp;in&nbsp;creating
                <br /> interactive&nbsp;e-books:
              </BasicTextNode>
              <BasicTextNode className='mt-3  text-[1.3rem]  !leading-[1.3]'>
                <ExternalLink defaultTextLink href='https://nikmas.studio'>
                  https://nikmas.studio
                </ExternalLink>
              </BasicTextNode>
            </div>
            <BasicTextNode
              className='mb-14  mt-9  text-center
                         text-[11rem]  leading-none'
            >
              ...
            </BasicTextNode>
          </div>
        </MainContainer>
      </Appear>
    </section>
  );
}

export default Ecosystem;
