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
    <div className="overflow-hidden mt-10 rounded-md sm:p-6">
      <ul className="grid gap-4">
        {portfolio.map((item) => (
          <li
            key={item.id}
            className="block hover:bg-blue-50 border border-blue-200 shadow transition-all cursor-pointer sm:rounded-md"
          >
            <button
              type="button"
              className="w-full h-full"
              onClick={() => setModal(<PortfolioModal onClose={onClose} {...item} />)}
            >
              <div className="flex-1 p-4 min-w-0 sm:flex sm:justify-between sm:items-center sm:px-6">
                <div>
                  <div className="flex text-sm">
                    <p className={classNames('font-medium truncate', styles.text['highlight-a'])}>
                      {t(`ITEMS.${item.id.toLocaleUpperCase()}.TITLE`)}
                    </p>
                    <p className="shrink-0 ml-1 font-normal text-gray-500">
                      {t(`TABLE.TYPE.${item.type.toLocaleUpperCase()}`)}
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <p className="text-sm text-gray-500">
                      {t(`ITEMS.${item.id.toLocaleUpperCase()}.DESCRIPTION.BRIEF`)}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 mt-4 sm:mt-0 sm:ml-5">
                  <div className="flex overflow-hidden -space-x-1">
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
