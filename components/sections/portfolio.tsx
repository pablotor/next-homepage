import { LegacyRef } from 'react';
import { useTranslation } from 'next-i18next';

import classNames from '../../utils/tailwindClassNamesHelper';
import PortfolioTable from '../portfolioTable';
import Section from './sectionContainer';

import styles from '../../styles/tailwindStyles.json';

const portfolio = [
  {
    id: 'homesite',
    type: 'frontend',
    lastUpdated: '2020-01-07',
    openSource: true,
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
    lastUpdated: '2020-01-07',
    openSource: false,
    techs: [],
  }, {
    id: 'linbot',
    type: 'backend',
    lastUpdated: '2020-01-07',
    openSource: true,
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
    lastUpdated: '2020-01-07',
    openSource: true,
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

const Portfolio = ({ innerRef }: { innerRef?: LegacyRef<HTMLDivElement>; }) => {
  const { t } = useTranslation(['common', 'portfolio']);
  return (
    <Section id="portfolio" innerRef={innerRef}>
      <h2 className={classNames(styles.text['section-title'], styles.text['gradient-b'])}>
        {t('SECTIONS.PORTFOLIO')}
      </h2>
      <p className={styles.text.secondary}>
        {t('COMMENT', { ns: 'portfolio' })}
      </p>
      <PortfolioTable portfolio={portfolio} namespace='portfolio' />
    </Section>
  );
};

export default Portfolio;
