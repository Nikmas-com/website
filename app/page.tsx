import DefaultLayout from '@/components/layouts/DefaultLayout';
import Footer from '@/components/modules/Footer';
import Header from '@/components/modules/header/Header';
import Ecosystem from '@/components/modules/main-page/Ecosystem';
import Intro from '@/components/modules/main-page/Intro';
import ProvidersDefault from '@/components/modules/providers/ProvidersDefault';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <DefaultLayout>
      <ProvidersDefault>
        <div className='pt-[5.118rem]'>
          <Header />
          <main>
            <Intro />
            <Ecosystem />
          </main>
          <Footer />
        </div>
      </ProvidersDefault>
    </DefaultLayout>
  );
}
