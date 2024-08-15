import Link from 'next/link';
import { FC } from 'react';

import type { WithLanguage } from '../../../i18n';

import { useTranslation } from '../../../i18n';
import ChevronDownIcon from '../../components/icons/chevronDown';

const GalleryNavbar: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <nav className="lg:fixed">
      <div id="navbar-mobile" className="relative z-10 lg:hidden">
        <div id="navbar-mobile" className="relative z-20 mx-auto flex bg-white px-4 py-2 text-lg font-medium shadow sm:px-8">
          <Link
            href={`/${lng}`}
            className="group inline-flex w-full items-center rounded-md bg-white py-3 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label={t('NAVBAR.BACK_TO_MAIN')}
          >
            <div className="w-1/5">
              <ChevronDownIcon
                className="ml-2 mt-0.5 size-5 rotate-90"
                aria-hidden="true"
              />
            </div>
            <div className="mx-auto font-bold sm:block">
              <span className="animate-switch-gradient bg-gradient-to-r bg-clip-text">
                {t('FIRSTNAME')}
                {' '}
                {t('LASTNAME')}
              </span>
            </div>
            <div className="w-1/5" />
          </Link>
        </div>
      </div>
      <div id="navbar-desktop" className="mr-16 hidden h-screen flex-col justify-center px-8 lg:flex">
        <div className="h-96">
          <div className="mx-auto text-2xl font-semibold sm:block">
            <span className="gradient-a animate-vercel-text-a bg-clip-text">
              {t('FIRSTNAME')}
            </span>
            <br />
            <span className="gradient-b animate-vercel-text-b bg-clip-text">
              {t('LASTNAME')}
            </span>
          </div>
          <Link
            href={`/${lng}`}
            className="gradient-b mt-8 flex items-center bg-clip-text py-3 transition-all hover:text-transparent"
            aria-label={t('NAVBAR.BACK_TO_MAIN')}
          >
            <ChevronDownIcon
              className="mt-0.5 rotate-90 text-gray-900"
              aria-hidden="true"
            />
            {t('NAVBAR.BACKTO_MAIN')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default GalleryNavbar;
