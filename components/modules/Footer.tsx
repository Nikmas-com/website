import classNames from 'classnames';
import { ReactElement } from 'react';
import ExternalLink from '../elements/ExternalLink';
import MainContainer from '../elements/MainContainer';

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps): ReactElement {
  const footerClasses = classNames(
    `mt-44  border-t  border-gray-light  pb-20
     pt-12  sm:pb-[4.5rem]  lg:mt-48  dark:border-gray-dark`,
    className,
  );

  return (
    <footer className={footerClasses}>
      <MainContainer
        className='flex  flex-col-reverse  items-center  sm:flex-row
                   sm:items-start  sm:justify-between'
      >
        <div className='flex  flex-col  items-center  sm:items-start'>
          <p className='mb-5  text-lg  dark:text-white'>
            © Nikmas, {new Date().getFullYear()}
          </p>
        </div>
        {/* <ul className='mb-12  flex  gap-5  sm:mb-0  sm:grid  sm:grid-cols-2  md:grid-flow-col'>
          <li>
            <ExternalLink href='https://t.me/nikmas_tech'>
              <Image
                src={telegramLogo}
                alt='Telegram logo'
                width={50}
                height={50}
                className='transition-all  hover:scale-[1.2]'
                quality={100}
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href='https://www.instagram.com/nikmas_tech'>
              <Image
                src={instagramLogo}
                alt='Instagram logo'
                width={50}
                height={50}
                className='transition-all  hover:scale-[1.2]'
                quality={100}
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href='https://www.facebook.com/nikmas.tech'>
              <Image
                src={facebookLogo}
                alt='Facebook logo'
                width={50}
                height={50}
                className='transition-all  hover:scale-[1.2]'
                quality={100}
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href='https://www.linkedin.com/company/nikmas-tech'>
              <Image
                src={linkedinLogo}
                alt='LinkedIn logo'
                width={50}
                height={50}
                className='transition-all  hover:scale-[1.2]'
                quality={100}
              />
            </ExternalLink>
          </li>
        </ul> */}
        <div className='mb-3  flex  flex-col  sm:mb-0'>
          <p className='text-lg  font-semibold  dark:text-white'>
            <ExternalLink href='mailto:team@nikmas.com'>
              team@nikmas.com
            </ExternalLink>
          </p>
        </div>
      </MainContainer>
    </footer>
  );
}

export default Footer;
