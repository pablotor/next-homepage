/* eslint-disable tailwindcss/no-custom-classname */
import { Fragment } from 'react';
import { useTranslation } from 'next-i18next';
import { Popover, Transition } from '@headlessui/react';

import ChevronDownIcon from './icons/chevronDown';
import classNames from '../utils/tailwindClassNamesHelper';

import styles from '../styles/tailwindStyles.json';

const sections = [
  { i18nKey: 'profile', href: '#profile' },
  { i18nKey: 'experience', href: '#experience' },
  { i18nKey: 'projects', href: '#projects' },
  { i18nKey: 'skills', href: '#skills' },
  { i18nKey: 'portfolio', href: '#portfolio' },
  { i18nKey: 'education', href: '#education' },
  { i18nKey: 'about', href: '#about' },
];

const Navbar = ({ selectedSection }: { selectedSection: number }) => {
  const { t } = useTranslation('common');

  return (
    <nav className='lg:fixed'>
      <Popover id="navbar-mobile" className="lg:hidden relative z-10">
        {({ open }) => (
          <>
            <div className="relative z-20 bg-white shadow">
              <div className="flex py-2 px-4 sm:px-8 mx-auto">
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'py-3 group bg-white rounded-md w-full inline-flex items-center justify-between text-lg font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all',
                  )}
                >
                  <span className='w-1/3 text-left'>{t(sections[selectedSection].i18nKey)}</span>
                  <span className={classNames(
                    selectedSection === 0 ? '' : 'sm:block sm:w-1/3 sm:font-black sm:mx-auto',
                    'hidden transition-all',
                  )}>
                    <span className={classNames(styles.text['gradient-a'], 'bg-clip-text animate-vercel-text-a')}>
                      {t('FIRSTNAME')}
                    </span>
                    {' '}
                    <span className={classNames(styles.text['gradient-b'], 'bg-clip-text animate-vercel-text-b')}>
                      {t('LASTNAME')}
                    </span>
                  </span>
                  <div className='flex justify-end w-1/3'>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                      aria-hidden="true"
                    />
                  </div>
                </Popover.Button>
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
              <Popover.Panel className="absolute inset-x-0 z-20 shadow-lg transform">
                <div className="mx-auto">
                  <div
                    className="py-8 sm:py-12 px-4 sm:px-6 bg-white"
                    aria-labelledby="solutions-heading"
                  >
                    <ul role="list" className="mt-5 space-y-6">
                      {sections.map((item, index) => (
                        <li key={index} className="flow-root">
                          <a
                            href={item.href}
                            className={classNames(
                              'flex justify-center p-3 text-base font-medium rounded-md transition-all',
                              selectedSection === index
                                ? classNames(styles.text['gradient-a'], 'text-transparent bg-clip-text')
                                : 'text-gray-900 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700',
                            )}
                          >
                            <span className="mx-4">{t(item.i18nKey)}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <div id="navbar-desktop" className='hidden lg:flex flex-col justify-center px-8 mr-16 h-screen'>
        <ul role="list" className="mt-5 space-y-6">
          {sections.map((item, index) => (
            <li key={index} className="flow-root">
              <a
                href={item.href}
                className={classNames(
                  'flex items-center p-3 -m-3 text-base font-medium rounded-md transition-all',
                  selectedSection === index
                    ? classNames('text-transparent bg-clip-text', styles.text['gradient-a'])
                    : 'text-gray-900 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700',
                )}
              >
                <span className="ml-4">{t(item.i18nKey)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
