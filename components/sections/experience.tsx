import { LegacyRef } from 'react';
import { useTranslation } from 'next-i18next';

import classNames from '../../utils/tailwindClassNamesHelper';
import Position from '../position';

import Section from './genericSection';

import styles from '../../styles/tailwindStyles.json';

const jobs = [
  'wibson',
  'first_data',
  'conexia',
];

const sections = [
  {
    id: 'responsibilities',
    contentType: 'single',
    showTitle: true,
  },
  {
    id: 'projects',
    contentType: 'multiple',
    showTitle: true,
  },
];

const Experience = ({ innerRef }: { innerRef?: LegacyRef<HTMLDivElement>; }) => {
  const { t } = useTranslation('common');
  return (
    <Section id="experience" innerRef={innerRef}>
      <h2 className={classNames(styles.text['section-title'], styles.text['gradient-a'])}>
        {t('SECTIONS.EXPERIENCE')}
      </h2>
      {jobs.map((job) => (
        <Position i18nKey={job} namespace='experience' key={job} sections={sections}/>
      ))}
    </Section>
  );
};

export default Experience;
