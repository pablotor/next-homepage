'use client';

import {
  FC, Fragment, useEffect, useState,
} from 'react';
import {
  Popover, PopoverButton, PopoverPanel, Transition,
} from '@headlessui/react';

import type { WithLanguage } from '../../i18n';

import { useTranslation } from '../../i18n/client';
import classNames from '../utils/classNames';
import { sectionsData } from './sections/sectionsData';
import ChevronDownIcon from './icons/chevronDown';
import LanguageSwitcher from './languageSwitcher';

type NavbarProps = {
  sectionInViewWatchers: boolean[];
} & WithLanguage;

const Navbar: FC<NavbarProps> = ({ sectionInViewWatchers, lng }) => {
  const { t } = useTranslation(lng, 'common');

  const [inViewSectionIndex, setInViewSectionIndex] = useState(0);

  useEffect(() => {
    const updatedIndex = sectionInViewWatchers.indexOf(true);
    if (updatedIndex !== -1) {
      setInViewSectionIndex(updatedIndex);
    }
  }, [sectionInViewWatchers]);

  return (
    <nav className="lg:fixed">
      <Popover id="navbar-mobile" className="relative z-10 lg:hidden">
        {({ open }) => (
          <>
            <div className="relative z-20 mx-auto flex bg-white px-4 py-2 text-lg font-medium shadow sm:px-8">
              <PopoverButton
                className={classNames(
                  open ? 'text-gray-900' : 'text-gray-500',
                  'py-3 group bg-white rounded-md w-full inline-flex items-center hover:text-transparent bg-clip-text gradient-b focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all',
                )}
                aria-label={t(open ? 'NAVBAR.MENU.CLOSE' : 'NAVBAR.MENU.OPEN')}
              >
                <span className="w-1/5 text-nowrap text-left">
                  {t(`SECTIONS.${sectionsData[inViewSectionIndex]?.id.toLocaleUpperCase()}`).toLocaleLowerCase()}
                </span>
                <div
                  className={classNames(
                    inViewSectionIndex === 0 ? 'opacity-0' : 'opacity-100',
                    'ease-in-out delay-150 duration-300 sm:block font-bold mx-auto',
                  )}
                >
                  <span className="animate-switch-gradient bg-gradient-to-r bg-clip-text">
                    {t('FIRSTNAME')}
                    {' '}
                    {t('LASTNAME')}
                  </span>
                </div>
                <div className="flex w-1/5 justify-end">
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-900 rotate-180' : 'text-gray-500',
                      'ml-2 h-5 w-5',
                    )}
                    aria-hidden="true"
                  />
                </div>
              </PopoverButton>
            </div>

            <Transition
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <PopoverPanel className="absolute inset-x-0 z-20 shadow-lg">
                <div className="mx-auto">
                  <div
                    className="h-navbar-menu bg-white px-4 py-8 sm:px-6 sm:py-12"
                    aria-labelledby="solutions-heading"
                  >
                    <ul className="mt-5 flex h-full flex-col justify-between">
                      {sectionsData.map((item, index) => (
                        <PopoverButton as="li" key={item.id} className="flow-root">
                          <a
                            href={item.href}
                            className={classNames(
                              'flex justify-center p-3 title font-medium transition-all',
                              inViewSectionIndex === index
                                ? 'gradient-a text-transparent bg-clip-text'
                                : 'text-gray-900 hover:text-transparent bg-clip-text gradient-b',
                            )}
                          >
                            {t(`SECTIONS.${item.id.toLocaleUpperCase()}`).toLocaleLowerCase()}
                          </a>
                        </PopoverButton>
                      ))}
                      <PopoverButton as="li" className="flow-root">
                        <LanguageSwitcher lng={lng} className="justify-center font-medium" />
                      </PopoverButton>
                    </ul>
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
      <div id="navbar-desktop" className="mr-16 hidden h-screen flex-col justify-center px-8 lg:flex">
        <ul className="mt-5 space-y-6">
          {sectionsData.map((item, index) => (
            <li key={item.id} className="flow-root">
              <a
                href={item.href}
                className={classNames(
                  'flex items-center p-3 -m-3 ml-4 title transition-all',
                  inViewSectionIndex === index
                    ? 'text-transparent bg-clip-text gradient-a'
                    : 'text-gray-900 hover:text-transparent bg-clip-text gradient-b',
                )}
              >
                {t(`SECTIONS.${item.id.toLocaleUpperCase()}`).toLocaleLowerCase()}
              </a>
            </li>
          ))}
          <li className="flow-root">
            <LanguageSwitcher lng={lng} className="-m-3 ml-4" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
