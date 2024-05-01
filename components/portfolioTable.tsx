/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';

import { PortfolioItem } from '../types/portfolio';

import { useModal } from '../hooks/useModal';
import classNames from '../utils/tailwindClassNamesHelper';
import styles from '../styles/tailwindStyles.json';
import PortfolioModal from './portfolioModal';

interface Props {
  portfolio: PortfolioItem[];
  namespace: string | string[];
}

const PortfolioTable = ({ portfolio, namespace }: Props) => {
  const { t } = useTranslation(namespace);
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
              onClick={() => setModal(<PortfolioModal onClose={onClose} {...item} />)}
            >
              <div className="min-w-0 flex-1 p-4 sm:flex sm:items-center sm:justify-between sm:px-6">
                <div>
                  <div className="flex text-sm">
                    <p className={classNames('font-medium truncate', styles.text['highlight-a'])}>
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
