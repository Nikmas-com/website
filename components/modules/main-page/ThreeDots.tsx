import MainContainer from '@/components/elements/MainContainer';
import { ReactElement } from 'react';

function ThreeDots(): ReactElement {
  return (
    <section>
      <MainContainer>
        <p
          className='mb-52  mt-24  text-center  text-[11rem]
                     leading-none  text-gray-light-darker  md:mb-72  
                   dark:text-gray-dark-lighter'
        >
          ...
        </p>
      </MainContainer>
    </section>
  );
}

export default ThreeDots;
