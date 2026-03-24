import ExternalLink from '@/components/elements/ExternalLink';
import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { ReactElement } from 'react';

function Ecosystem(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-36'>
      <MainContainer>
        <div className='rounded-[30px]  border  border-gray-light  lg:grid lg:grid-cols-2  dark:border-gray-dark'>
          <div
            className='flex  justify-center  border-b   
                       border-gray-light  lg:border-b  lg:border-r  dark:border-gray-dark'
          >
            <div
              className='flex  w-72  translate-x-3  flex-col  pb-[6.5rem] 
                         pt-[4.5rem]  3sm:translate-x-0  sm:w-[19.5rem]  md:w-[21.5rem]'
            >
              <ExternalLink
                className='mb-10  self-center'
                href='https://nikmas.studio'
              >
                <svg
                  height='120'
                  viewBox='0 0 11 53'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    className='fill-black  dark:fill-white'
                    width='11'
                    height='53'
                    rx='2'
                  />
                </svg>
              </ExternalLink>
              <div>
                <H2 className='mb-3'>
                  <ExternalLink href='https://nikmas.studio'>
                    Nikmas Studio
                  </ExternalLink>
                </H2>
                <TextNode>
                  Next-gen&nbsp;publishing&nbsp;studio
                  <br /> that&nbsp;specializes&nbsp;in&nbsp;creating
                  <br /> interactive&nbsp;edu books:
                </TextNode>
                <TextNode className='mt-3'>
                  <ExternalLink defaultTextLink href='https://nikmas.studio'>
                    https://nikmas.studio
                  </ExternalLink>
                </TextNode>
              </div>
            </div>
          </div>
          <div
            className='flex  justify-center  border-b   
                       border-gray-light  lg:border-b   dark:border-gray-dark'
          >
            <div
              className='flex  w-72  translate-x-3  flex-col  items-center  pb-[6.5rem] 
                         pt-[4.5rem]  3sm:translate-x-0  sm:w-[19.5rem]  md:w-[21.5rem]'
            >
              <svg
                className='mb-10'
                height='120'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='fill-gray-light-darker  dark:fill-gray-dark-lighter'
                  d='M18,8V6A6,6,0,0,0,6,6V8a3.009,3.009,0,0,0-3,3v7a6,6,0,0,0,6,6h6a6,6,0,0,0,6-6V11A3.009,3.009,0,0,0,18,8ZM8,6a4,4,0,0,1,8,0V8H8Zm5,12a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Z'
                />
              </svg>
              <div>
                <H2 className='mb-3  text-gray-light-darker  dark:text-gray-dark-lighter'>
                  Secret
                  <br />
                  Project
                  <br />
                  #2
                </H2>
              </div>
            </div>
          </div>
          <div
            className='flex  justify-center  
                       border-b  border-gray-light  lg:border-r  dark:border-gray-dark'
          >
            <div
              className='flex  w-72  translate-x-3  flex-col  items-center  
                         pb-[6.5rem]  pt-[4.5rem]  3sm:translate-x-0  sm:w-[19.5rem]
                         md:w-[21.5rem]'
            >
              <svg
                className='mb-10'
                height='120'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='fill-gray-light-darker  dark:fill-gray-dark-lighter'
                  d='M18,8V6A6,6,0,0,0,6,6V8a3.009,3.009,0,0,0-3,3v7a6,6,0,0,0,6,6h6a6,6,0,0,0,6-6V11A3.009,3.009,0,0,0,18,8ZM8,6a4,4,0,0,1,8,0V8H8Zm5,12a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Z'
                />
              </svg>
              <div>
                <H2 className='mb-3  text-gray-light-darker  dark:text-gray-dark-lighter'>
                  Secret
                  <br />
                  Project
                  <br />
                  #3
                </H2>
              </div>
            </div>
          </div>
          <div
            className='flex  justify-center  border-b   
                       border-gray-light  lg:border-b   dark:border-gray-dark'
          >
            <div
              className='flex  w-72  translate-x-3  flex-col  items-center  pb-[6.5rem] 
                         pt-[4.5rem]  3sm:translate-x-0  sm:w-[19.5rem]  md:w-[21.5rem]'
            >
              <svg
                className='mb-10'
                height='120'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='fill-gray-light-darker  dark:fill-gray-dark-lighter'
                  d='M18,8V6A6,6,0,0,0,6,6V8a3.009,3.009,0,0,0-3,3v7a6,6,0,0,0,6,6h6a6,6,0,0,0,6-6V11A3.009,3.009,0,0,0,18,8ZM8,6a4,4,0,0,1,8,0V8H8Zm5,12a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Z'
                />
              </svg>
              <div>
                <H2 className='mb-3  text-gray-light-darker  dark:text-gray-dark-lighter'>
                  Secret
                  <br />
                  Project
                  <br />
                  #4
                </H2>
              </div>
            </div>
          </div>
          <div className='flex  justify-center  border-b  border-gray-light  lg:border-b-0  lg:border-r  dark:border-gray-dark'>
            <div
              className='flex  w-72  translate-x-3  flex-col  items-center  pb-[6.5rem]
                         pt-[4.5rem]  3sm:translate-x-0  sm:w-[19.5rem]  md:w-[21.5rem]'
            >
              <svg
                className='mb-10'
                height='120'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='fill-gray-light-darker  dark:fill-gray-dark-lighter'
                  d='M18,8V6A6,6,0,0,0,6,6V8a3.009,3.009,0,0,0-3,3v7a6,6,0,0,0,6,6h6a6,6,0,0,0,6-6V11A3.009,3.009,0,0,0,18,8ZM8,6a4,4,0,0,1,8,0V8H8Zm5,12a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Z'
                />
              </svg>
              <div>
                <H2 className='mb-3  text-gray-light-darker  dark:text-gray-dark-lighter'>
                  Secret
                  <br />
                  Project
                  <br />
                  #5
                </H2>
              </div>
            </div>
          </div>
          <div className='flex  justify-center'>
            <div
              className='flex  w-72  translate-x-3  flex-col  items-center  pb-[6.5rem]
                         pt-[4.5rem]  3sm:translate-x-0  sm:w-[19.5rem]  md:w-[21.5rem]'
            >
              <svg
                className='mb-10'
                height='120'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='fill-gray-light-darker  dark:fill-gray-dark-lighter'
                  d='M18,8V6A6,6,0,0,0,6,6V8a3.009,3.009,0,0,0-3,3v7a6,6,0,0,0,6,6h6a6,6,0,0,0,6-6V11A3.009,3.009,0,0,0,18,8ZM8,6a4,4,0,0,1,8,0V8H8Zm5,12a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Z'
                />
              </svg>
              <div>
                <H2 className='mb-3  text-gray-light-darker  dark:text-gray-dark-lighter'>
                  Secret
                  <br />
                  Project
                  <br />
                  #6
                </H2>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default Ecosystem;
