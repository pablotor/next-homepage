/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { useTranslation } from 'next-i18next';
import { Popover, Transition } from '@headlessui/react';

import classNames from '../utils/tailwindClassNamesHelper';
import ChevronDownIcon from './icons/chevronDown';

const sections = [
  { i18nKey: 'profile', href: '#' },
  { i18nKey: 'experience', href: '#' },
  { i18nKey: 'projects', href: '#' },
  { i18nKey: 'development', href: '#' },
  { i18nKey: 'portfolio', href: '#' },
  { i18nKey: 'education', href: '#' },
  { i18nKey: 'about', href: '#' },
];

const Navbar = () => {
  const { t } = useTranslation('common');
  return (
    <nav>
      <Popover id="navbar-mobile" className="lg:hidden relative z-0">
        {({ open }) => (
          <>
            <div className="relative z-10 bg-white shadow">
              <div className="flex py-6 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                  )}
                >
                  <span>Solutions</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500',
                    )}
                    aria-hidden="true"
                  />
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
              <Popover.Panel className="absolute inset-x-0 z-10 shadow-lg transform">
                <div className="flex absolute inset-0" aria-hidden="true">
                  <div className="w-1/2 bg-white" />
                  <div className="w-1/2 bg-gray-50" />
                </div>
                <div className="grid relative grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl">
                  <div
                    className="grid sm:grid-cols-2 sm:gap-x-8 gap-y-10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 xl:pr-12 bg-white"
                    aria-labelledby="solutions-heading"
                  >
                    <ul role="list" className="mt-5 space-y-6">
                      {sections.map((item, index) => (
                        <li key={index} className="flow-root">
                          <a
                            href={item.href}
                            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                          >
                            <span className="ml-4">{t(item.i18nKey)}</span>
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
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md duration-150 ease-in-out"
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
