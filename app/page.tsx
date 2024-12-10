import DefaultLayout from '@/components/layouts/DefaultLayout';
import Footer from '@/components/modules/Footer';
import Header from '@/components/modules/header/Header';
import Ecosystem from '@/components/modules/main-page/Ecosystem';
import Intro from '@/components/modules/main-page/Intro';
import ProvidersDefault from '@/components/modules/providers/ProvidersDefault';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Nikmas',
  description:
    'Nikmas is a Tech Cofounding Company. We partner with entrepreneurs, bringing our full expertise to transform ideas into highly profitable and useful tech businesses.',
  openGraph: {
    title: 'Nikmas',
    description:
      'Nikmas is a Tech Cofounding Company. We partner with entrepreneurs, bringing our full expertise to transform ideas into highly profitable and useful tech businesses.',
    url: 'https://nikmas.com',
    siteName: 'Nikmas',
    images: [
      {
        url: 'https://nikmas.com/images/og-primary.jpg',
        width: 1200,
        height: 630,
        alt: 'Nikmas',
      },
      {
        url: 'https://nikmas.studio/images/og-high-res.jpg',
        width: 1800,
        height: 945,
        alt: 'Nikmas',
      },
      {
        url: 'https://nikmas.studio/images/og-square.jpg',
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
            <Intro />
            <Ecosystem />
          </main>
          <Footer />
        </div>
      </ProvidersDefault>
    </DefaultLayout>
  );
}
