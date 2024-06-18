import { forwardRef } from 'react';

import { useTranslation } from '../../app/i18n/client';
import { PortfolioItem } from '../../types/portfolio';
import PortfolioTable from '../portfolioTable';
import Section from '../sectionContainer';

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

const Portfolio = forwardRef<HTMLElement>(({} ,ref) => {
  const { t } = useTranslation('en', ['common', 'portfolio']);
  return (
    <Section id="portfolio" ref={ref}>
      <h2 className="section-title gradient-b">
        {t('SECTIONS.PORTFOLIO')}
      </h2>
      <p className="subtitle">
        {t('COMMENT', { ns: 'portfolio' })}
      </p>
      <PortfolioTable portfolio={portfolio} namespace="portfolio" />
    </Section>
  );
});

export default Portfolio;
