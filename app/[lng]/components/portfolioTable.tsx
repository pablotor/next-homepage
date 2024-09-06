'use client';

import { FC } from 'react';

import type { WithLanguage } from '../../i18n';

import { useTranslation } from '../../i18n/client';
import { useModal } from '../hooks/useModal';
import TechIcon from './icons/techIcon';
import Modal from './modal';
import PortfolioModal from './portfolioModal';

export type PortfolioItem = {
  id: string;
  type: string;
  codeAvailable?: boolean;
  deployAvailable?: boolean;
  techIds: string[];
};

const portfolio: PortfolioItem[] = [
  {
    id: 'pablobot',
    type: 'frontend',
    deployAvailable: true,
    techIds: ['chatGPT', 'tailwind', 'react', 'next', 'ts'],
  }, {
    id: 'homesite',
    type: 'frontend',
    codeAvailable: true,
    techIds: ['tailwind', 'react', 'next', 'ts'],
  }, {
    id: 'trellodiscography',
    type: 'backend',
    codeAvailable: true,
    techIds: ['node', 'ts'],
  }, {
    id: 'berlinerluft',
    type: 'backend',
    codeAvailable: true,
    techIds: ['puppeteer', 'node', 'ts'],
  },
];

const PortfolioTable: FC<WithLanguage> = ({ lng }) => {
  const { t } = useTranslation(lng, 'portfolio');
  const modal = useModal();
  return (
    <>
      <Modal isOpen={modal.isOpen} content={modal.content} onClose={modal.close} />
      <div className="mt-10 overflow-hidden rounded-md sm:p-6">
        <ul className="grid gap-4">
          {portfolio.map((item) => (
            <li
              key={`${item.id}ListItem`}
              className="block cursor-pointer border border-blue-200 shadow transition-all hover:bg-blue-50 sm:rounded-md"
            >
              <button
                type="button"
                className="size-full"
                onClick={() => modal.open(
                  <PortfolioModal closeModal={modal.close} item={item} lng={lng} />,
                )}
              >
                <div className="min-w-0 flex-1 p-4 sm:flex sm:items-center sm:justify-between sm:px-6">
                  <div>
                    <div className="flex text-sm">
                      <p className="highlight-a truncate font-medium">
                        {t(`ITEMS.${item.id.toLocaleUpperCase()}.TITLE`)}
                      </p>
                      <p className="ml-1 shrink-0 font-normal text-gray-500">
                        {t(`PROJECT_TYPE.${item.type.toLocaleUpperCase()}`)}
                      </p>
                    </div>
                    <div className="mt-2 flex">
                      <p className="text-left text-sm text-gray-500">
                        {t(`ITEMS.${item.id.toLocaleUpperCase()}.DESCRIPTION.BRIEF`)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 shrink-0 sm:ml-5 sm:mt-0">
                    <div className="flex -space-x-1 overflow-hidden">
                      {item.techIds.map((techId) => (
                        <TechIcon
                          techId={techId}
                          key={`${techId}Icon`}
                          className="inline-block size-6 rounded-full ring-2 ring-white"
                          altIntlFn={(label) => t(
                            'TECH_ICON_ALT',
                            { techname: label },
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PortfolioTable;
