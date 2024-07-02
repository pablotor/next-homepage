import { FC } from 'react';

import { useTranslation } from '../../../i18n';
import { WithLanguage } from '../../../i18n/WithLanguage';
import PortfolioTable from '../portfolioTable';

const Portfolio: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await useTranslation(lng, ['common', 'portfolio']);
  return (
    <>
      <h2 className="section-title gradient-b">
        {t('SECTIONS.PORTFOLIO')}
      </h2>
      <p className="subtitle">
        {t('COMMENT', { ns: 'portfolio' })}
      </p>
      <PortfolioTable lng={lng} />
    </>
  );
};

export default Portfolio;
