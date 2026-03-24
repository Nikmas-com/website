import Appear from '@/components/elements/Appear';
import AppearInstant from '@/components/elements/AppearInstant';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Footer from '@/components/modules/Footer';
import Header from '@/components/modules/header/Header';
import Ecosystem from '@/components/modules/main-page/Ecosystem';
import Intro from '@/components/modules/main-page/Intro';
import NickMaslov from '@/components/modules/main-page/NickMaslov';
import ThreeDots from '@/components/modules/main-page/ThreeDots';
import ProvidersDefault from '@/components/modules/providers/ProvidersDefault';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Nikmas',
  description:
    'Nikmas is a human growth ecosystem — where education, innovation, and capital come together.',
  openGraph: {
    title: 'Nikmas',
    description:
      'Nikmas is a human growth ecosystem — where education, innovation, and capital come together.',
    url: 'https://nikmas.com',
    siteName: 'Nikmas',
    images: [
      {
        url: 'https://nikmas.com/images/main-og-primary.jpg',
        width: 1200,
        height: 630,
        alt: 'Nikmas',
      },
      {
        url: 'https://nikmas.com/images/main-og-high-res.jpg',
        width: 1800,
        height: 945,
        alt: 'Nikmas',
      },
      {
        url: 'https://nikmas.com/images/main-og-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Nikmas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home(): ReactElement {
  return (
    <DefaultLayout>
      <ProvidersDefault>
        <div className='pt-[5.118rem]'>
          <Header />
          <main>
            <AppearInstant>
              <Intro />
            </AppearInstant>
            <Appear>
              <Ecosystem />
              <NickMaslov />
              <ThreeDots />
            </Appear>
          </main>
          <Footer />
        </div>
      </ProvidersDefault>
    </DefaultLayout>
  );
}
