'use client';

import {
  FC, Fragment, useEffect, useState,
} from 'react';
import {
  Popover, PopoverButton, PopoverPanel, Transition,
} from '@headlessui/react';

import { useTranslation } from '../../i18n/client';
import { WithLanguage } from '../../i18n/WithLanguage';
import classNames from '../utils/classNames';
import { sectionsData } from './sections/sectionsData';
import ChevronDownIcon from './icons/chevronDown';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, sectionInViewWatchers);

  return (
    <nav className="lg:fixed">
      <Popover id="navbar-mobile" className="relative z-10 lg:hidden">
        {({ open }) => (
          <>
            <div className="relative z-20 bg-white shadow">
              <div className="mx-auto flex px-4 py-2 sm:px-8">
                <PopoverButton
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'py-3 group bg-white rounded-md w-full inline-flex items-center justify-between text-lg font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all',
                  )}
                  aria-label={t(open ? 'NAVBAR.MENU.CLOSE' : 'NAVBAR.MENU.OPEN')}
                >
                  <span className="w-1/4">{t(sectionsData[inViewSectionIndex]?.id)}</span>
                  <span
                    className={classNames(
                      inViewSectionIndex === 0 ? 'opacity-0' : 'opacity-100',
                      'transition-all ease-in-out delay-150 duration-300 sm:block font-bold mx-auto',
                    )}
                  >
                    <span className="animate-switch-gradient bg-gradient-to-r bg-clip-text">
                      {t('FIRSTNAME')}
                      {' '}
                      {t('LASTNAME')}
                    </span>
                  </span>
                  <div className="flex w-1/4 justify-end">
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                      aria-hidden="true"
                    />
                  </div>
                </PopoverButton>
              </div>
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
                    className="bg-white px-4 py-8 sm:px-6 sm:py-12"
                    aria-labelledby="solutions-heading"
                  >
                    <ul className="mt-5 space-y-6">
                      {sectionsData.map((item, index) => (
                        <PopoverButton as="li" key={item.id} className="flow-root">
                          <a
                            href={item.href}
                            className={classNames(
                              'flex justify-center p-3 title font-medium transition-all',
                              inViewSectionIndex === index
                                ? 'gradient-a text-transparent bg-clip-text'
                                : 'text-gray-900 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700',
                            )}
                          >
                            <span className="mx-4">{t(item.id)}</span>
                          </a>
                        </PopoverButton>
                      ))}
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
                  'flex items-center p-3 -m-3 title font-mediumtransition-all',
                  inViewSectionIndex === index
                    ? 'text-transparent bg-clip-text gradient-a'
                    : 'text-gray-900 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700',
                )}
              >
                <span className="ml-4">{t(item.id)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
