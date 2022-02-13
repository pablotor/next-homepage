/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';

import classNames from '../utils/tailwindClassNamesHelper';
import styles from '../styles/tailwindStyles.json';

interface Tech {
  id: string;
  src: string;
  style?: string;
}

interface PortfolioItem {
  id: string;
  type: string;
  openSource: boolean;
  lastUpdated: string;
  techs: Tech[];
}

interface Props {
  portfolio: PortfolioItem[];
  namespace: string | string[];
}

const PortfolioTable = ({ portfolio, namespace }: Props) => {
  const { t } = useTranslation(namespace);
  return (
    <div className='p-6 mt-10 bg-gray-200 rounded-md'>
      <div className="overflow-hidden bg-white sm:rounded-md shadow">
        <ul role="list" className="divide-y divide-gray-200">
          {portfolio.map((item) => (
            <li key={item.id}>
              <div className="block hover:bg-blue-50 transition-all">
                <div className="flex items-center py-4 px-4 sm:px-6">
                  <div className="sm:flex flex-1 sm:justify-between sm:items-center min-w-0">
                    <div className="">
                      <div className="flex text-sm">
                        <p className={classNames('font-medium truncate', styles.text['highlight-a'])}>
                          {t(`ITEMS.${item.id.toLocaleUpperCase()}.TITLE`)}
                        </p>
                        <p className="flex-shrink-0 ml-1 font-normal text-gray-500">
                          {t(`TABLE.TYPE.${item.type.toLocaleUpperCase()}`)}
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <p className="text-sm text-gray-500">
                          {t(`ITEMS.${item.id.toLocaleUpperCase()}.DESCRIPTION.BRIEF`)}
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-5">
                      <div className="flex overflow-hidden -space-x-1">
                        {item.techs.map((tech) => (
                          <img
                            key={tech.id}
                            className={classNames(
                              'inline-block rounded-full w-6 h-6 ring-2 ring-white',
                              tech.style || '',
                            )}
                            src={tech.src}
                            alt={t(`TABLE.TECH.${tech.id.toLocaleUpperCase()}`)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioTable;
