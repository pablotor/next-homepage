/* eslint-disable @next/next/no-img-element */

import { useTranslation } from '../app/i18n/client';
import { useModal } from '../hooks/useModal';
import classNames from '../utils/classNames';

import PortfolioModal from './portfolioModal';

type Tech = {
  id: string;
  src: string;
  style?: string;
}

export type PortfolioItem = {
  id: string;
  type: string;
  codeAvailable: boolean;
  deployed: boolean;
  techs: Tech[];
}

const portfolio: PortfolioItem[] = [
  {
    id: 'homesite',
    type: 'frontend',
    codeAvailable: true,
    deployed: false,
    techs: [
      {
        id: 'tailwind',
        src: '/img/tailwind.svg',
        style: 'bg-[#1C5C78] p-1',
      }, {
        id: 'react',
        src: '/img/react.svg',
        style: 'bg-[#17333B] p-1',
      }, {
        id: 'next',
        src: '/img/next.svg',
      }, {
        id: 'ts',
        src: '/img/typescript.svg',
        style: 'bg-[#3178C6] pb-0.5',
      },
    ],
  }, {
    id: 'wibson',
    type: 'fullstack',
    codeAvailable: false,
    deployed: true,
    techs: [],
  }, {
    id: 'linbot',
    type: 'backend',
    codeAvailable: true,
    deployed: false,
    techs: [
      {
        id: 'puppeteer',
        src: '/img/puppeteer.svg',
        style: 'bg-[#17333B] p-1',
      }, {
        id: 'node',
        src: '/img/node.svg',
        style: 'bg-white',
      }, {
        id: 'ts',
        src: '/img/typescript.svg',
        style: 'bg-[#3178C6] pb-0.5',
      },
    ],
  }, {
    id: 'appointer',
    type: 'backend',
    codeAvailable: true,
    deployed: false,
    techs: [
      {
        id: 'node',
        src: '/img/node.svg',
        style: 'bg-white',
      }, {
        id: 'js',
        src: '/img/javascript.svg',
        style: 'bg-[#f7df1e] pb-0.5',
      },
    ],
  },
];

const PortfolioTable = () => {
  const { t } = useTranslation('en', 'portfolio');
  const { setModal, onClose } = useModal();
  return (
    <div className="mt-10 overflow-hidden rounded-md sm:p-6">
      <ul className="grid gap-4">
        {portfolio.map((item) => (
          <li
            key={item.id}
            className="block cursor-pointer border border-blue-200 shadow transition-all hover:bg-blue-50 sm:rounded-md"
          >
            <button
              type="button"
              className="size-full"
              onClick={() => setModal(<PortfolioModal onClose={onClose} item={item} />)}
            >
              <div className="min-w-0 flex-1 p-4 sm:flex sm:items-center sm:justify-between sm:px-6">
                <div>
                  <div className="flex text-sm">
                    <p className="font-medium truncate highlight-a">
                      {t(`ITEMS.${item.id.toLocaleUpperCase()}.TITLE`)}
                    </p>
                    <p className="ml-1 shrink-0 font-normal text-gray-500">
                      {t(`TABLE.TYPE.${item.type.toLocaleUpperCase()}`)}
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
                    {item.techs.map((tech) => (
                      <img
                        key={tech.id}
                        className={classNames(
                          'inline-block rounded-full w-6 h-6 ring-2 ring-white',
                          tech.style || '',
                        )}
                        src={tech.src}
                        alt={t(
                          'TABLE.TECH.ICON_LABEL',
                          { techname: t(`TABLE.TECH.${tech.id.toLocaleUpperCase()}`) },
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
  );
};

export default PortfolioTable;
