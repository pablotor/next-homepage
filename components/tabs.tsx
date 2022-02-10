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
      <div className="inline-block md:hidden relative text-left">
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                className={classNames(
                  open
                    ? classNames('text-transparent bg-clip-text', styles.text['gradient-a'])
                    : 'text-gray-500 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-700',
                  'group inline-flex justify-center py-4 px-10 text-sm font-medium text-center border-b-2',
                )}>
                {t(tabArray[selected]?.i18nKey || 'TABS.LABEL')}
                <ChevronDownIcon
                  className="flex-shrink-0 -mr-1 ml-3 w-5 h-5 text-gray-400 group-hover:text-gray-500"
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
                  className="absolute left-0 p-4 mt-2 bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-2xl origin-top-right focus:outline-none"
                >
                  {tabArray.map((option, index) => (
                  <Menu.Item key={option.id} onClick={option.onSelect}>
                    <div className='flex relative items-start py-2 pr-4 pl-2 cursor-pointer'>
                      <div className="flex items-center h-5">
                        <input
                          id={option.id}
                          aria-describedby={t(`${option.i18nKey}.ARIA_DESCRIPTION`)}
                          name={option.id}
                          type="radio"
                          checked={selected === index}
                          onChange={() => option.onSelect}
                          className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor={option.id}
                          className={classNames(
                            selected === index
                              ? classNames('text-transparent bg-clip-text', styles.text['gradient-a'])
                              : 'text-gray-500 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-700',
                            'font-medium cursor-pointer',
                          )}>
                          {t(`${option.i18nKey}.LABEL`)}
                        </label>
                      </div>
                    </div>
                  </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
        {/* <label htmlFor={`${namespace}-tabs`} className="sr-only">
          {t('TABS.LABEL')}
        </label>
        <select
          id={`${namespace}-tabs`}
          name={`${namespace}-tabs`}
          className="block w-full rounded-md border-gray-300
            focus:border-indigo-500 focus:ring-indigo-500"
          onChange={
            (event) => tabArray.find((el) => el.id === event.target.value)?.onSelect()
          }
          value={`${t(tabArray[selected].id)}`}
        >
          {tabArray.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {t(tab.i18nKey)}
            </option>
          ))}
        </select> */}
      </div>
      <div className="hidden md:block border-b border-gray-200">
        <nav className="flex -mb-px" aria-label="Tabs">
          {tabArray.map((tab, index) => (
            <span
              key={tab.id}
              className={classNames(
                selected === index

                  ? classNames('text-transparent bg-clip-text border-indigo-500', styles.text['gradient-a'])
                  : 'text-gray-500 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-700 hover:border-purple-500',
                'w-1/4 py-4 px-8 xl:px-10 text-center border-b-2 font-medium text-sm cursor-pointer',
              )}
              onClick={tab.onSelect}
              aria-current={selected === index ? 'page' : undefined}
            >
              {t(tab.i18nKey)}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;