import { forwardRef } from 'react';

import { useTranslation } from '../../../i18n/client';
import { WithLanguage } from '../../../i18n/WithLanguage';
import PortfolioTable from '../portfolioTable';
import Section from '../sectionContainer';

const Portfolio = forwardRef<HTMLElement, WithLanguage>(({ lng }, ref) => {
  const { t } = useTranslation(lng, ['common', 'portfolio']);
  return (
    <Section id="portfolio" ref={ref}>
      <h2 className="section-title gradient-b">
        {t('SECTIONS.PORTFOLIO')}
      </h2>
      <p className="subtitle">
        {t('COMMENT', { ns: 'portfolio' })}
      </p>
      <PortfolioTable lng={lng} />
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;
