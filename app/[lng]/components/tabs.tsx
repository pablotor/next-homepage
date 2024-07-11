import { FC } from 'react';
import {
  Menu, MenuButton, MenuItem, MenuItems, Transition,
} from '@headlessui/react';

import { useTranslation } from '../../i18n/client';
import { WithLanguage } from '../../i18n/WithLanguage';
import classNames from '../utils/classNames';
import ChevronDownIcon from './icons/chevronDown';

interface Tab {
  id: string;
  i18nKey: string;
  onSelect: () => void;
}

type TabsProps = {
  tabArray: Tab[];
  selected: number;
  namespace: string;
} & WithLanguage;

const Tabs: FC<TabsProps> = ({
  tabArray, selected, namespace, lng,
}) => {
  const { t } = useTranslation(lng, namespace);
  return (
    <div>
      <div className="relative inline-block text-left md:hidden">
        <Menu>
          {({ open }) => (
            <>
              <MenuButton
                className={classNames(
                  open
                    ? classNames('text-transparent bg-clip-text', 'gradient-a')
                    : 'text-gray-500 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-700',
                  'group inline-flex justify-center py-4 px-10 text-sm font-medium text-center border-b-2 transition-all',
                )}
              >
                {t(tabArray[selected]?.i18nKey || 'TABS.LABEL')}
                <ChevronDownIcon
                  className="-mr-1 ml-3 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </MenuButton>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <MenuItems
                  static
                  className="absolute left-0 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5 focus:outline-none"
                >
                  {tabArray.map((option, index) => (
                    <MenuItem key={option.id}>
                      <button
                        type="button"
                        className={classNames(
                          selected === index
                            ? classNames('text-transparent bg-clip-text', 'gradient-a')
                            : 'text-gray-500 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-700',
                          'flex w-full relative items-start py-2 pr-4 pl-2 font-medium cursor-pointer',
                        )}
                        onClick={option.onSelect}
                      >
                        <div className="flex h-5 items-center">
                          <input
                            id={option.id}
                            aria-describedby={t(`${option.i18nKey}.ARIA_DESCRIPTION`)}
                            name={option.id}
                            type="radio"
                            checked={selected === index}
                            className="size-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={option.id}>
                            {t(option.i18nKey)}
                          </label>
                        </div>
                      </button>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Transition>
            </>
          )}
        </Menu>
      </div>
      <div className="hidden border-b border-gray-200 md:block">
        <nav className="-mb-px flex" aria-label="Tab list">
          {tabArray.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              className={classNames(
                selected === index
                  ? classNames('text-transparent bg-clip-text border-indigo-500', 'gradient-a')
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
