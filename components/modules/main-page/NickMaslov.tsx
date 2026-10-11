import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import NickMaslovAva from '@/public/images/NickMaslov.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';

function NickMaslov(): ReactElement {
  return (
    <section className='mt-[5.5rem]  lg:mt-36'>
      <MainContainer className='flex  flex-col  items-center'>
        <div className='flex  max-w-[27rem]  flex-col  items-center'>
          <Image
            width={270}
            className='rounded-full'
            src={NickMaslovAva}
            alt='Nick Maslov'
          />
          <H2 className='mt-6'>Nick Maslov</H2>
          <TextNode className='mt-[0.2rem]  text-center  italic'>
            Founder&nbsp;&&nbsp;CEO at&nbsp;Nikmas
          </TextNode>
          <TextNode
            className='relative  ml-[30px]  mt-5  
                       before:absolute  before:left-[-2.1rem]  
                       before:top-[0.8rem]  before:text-[3rem]
                       before:font-bold  before:content-["“"]  sm:translate-x-2'
          >
            We&apos;re building the&nbsp;ecosystem where&nbsp;everyone can find
            an&nbsp;opportunity to&nbsp;grow — either&nbsp;professionally
            or&nbsp;internally. Join&nbsp;us and&nbsp;become
            who&nbsp;you&nbsp;are!
          </TextNode>
        </div>
      </MainContainer>
    </section>
  );
}

export default NickMaslov;
