import { forwardRef } from 'react';

import { useTranslation } from '../../app/i18n/client';
import PortfolioTable from '../portfolioTable';
import Section from '../sectionContainer';

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
      <PortfolioTable />
    </Section>
  );
});

export default Portfolio;
