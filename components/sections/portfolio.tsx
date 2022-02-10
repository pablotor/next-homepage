import { LegacyRef } from 'react';
import { useTranslation } from 'next-i18next';

import classNames from '../../utils/tailwindClassNamesHelper';
import Section from './sectionContainer';

import styles from '../../styles/tailwindStyles.json';

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
    </Section>
  );
};

export default Portfolio;
