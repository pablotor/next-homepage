import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'next-i18next';

import classNames from '../utils/tailwindClassNamesHelper';
import ChevronDownIcon from './icons/chevronDown';

import styles from '../styles/tailwindStyles.json';

interface Tab {
  id: string;
  i18nKey: string;
  onSelect: () => void;
}

interface Props {
  tabArray: Tab[];
  selected: number;
  namespace: string;
}

const Tabs = ({ tabArray, selected, namespace }: Props) => {
  const { t } = useTranslation(namespace);
  return (
    <div>
      <div className="inline-block relative text-left md:hidden">
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                className={classNames(
                  open
                    ? classNames('text-transparent bg-clip-text', styles.text['gradient-a'])
                    : 'text-gray-500 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-700',
                  'group inline-flex justify-center py-4 px-10 text-sm font-medium text-center border-b-2 transition-all',
                )}
              >
                {t(tabArray[selected]?.i18nKey || 'TABS.LABEL')}
                <ChevronDownIcon
                  className="shrink-0 -mr-1 ml-3 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  static
                  className="absolute left-0 p-4 mt-2 bg-white rounded-md focus:outline-none ring-1 ring-black/5 shadow-2xl origin-top-right"
                >
                  {tabArray.map((option, index) => (
                    <Menu.Item key={option.id}>
                      <button
                        type="button"
                        className={classNames(
                          selected === index
                            ? classNames('text-transparent bg-clip-text', styles.text['gradient-a'])
                            : 'text-gray-500 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-700',
                          'flex w-full relative items-start py-2 pr-4 pl-2 font-medium cursor-pointer',
                        )}
                        onClick={option.onSelect}
                      >
                        <div className="flex items-center h-5">
                          <input
                            id={option.id}
                            aria-describedby={t(`${option.i18nKey}.ARIA_DESCRIPTION`)}
                            name={option.id}
                            type="radio"
                            checked={selected === index}
                            className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={option.id}>
                            {t(option.i18nKey)}
                          </label>
                        </div>
                      </button>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
      <div className="hidden border-b border-gray-200 md:block">
        <nav className="flex -mb-px" aria-label="Tabs">
          {tabArray.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              className={classNames(
                selected === index
                  ? classNames('text-transparent bg-clip-text border-indigo-500', styles.text['gradient-a'])
                  : 'text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700 hover:border-purple-500',
                'w-1/4 py-4 px-8 xl:px-10 text-center border-b-2 font-medium text-sm cursor-pointer transition-all',
              )}
              onClick={tab.onSelect}
              aria-current={selected === index ? 'page' : undefined}
            >
              {(t(tab.i18nKey))}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
