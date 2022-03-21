import { LegacyRef } from 'react';
import { useTranslation } from 'next-i18next';

import classNames from '../../utils/tailwindClassNamesHelper';
import Position from '../position';
import Section from './sectionContainer';

import styles from '../../styles/tailwindStyles.json';

const studies = [
  'fiuba',
  'cbc',
  'enspa',
  'fuce',
];

const sections = [
  {
    id: 'description',
    contentType: 'single',
    showTitle: false,
  },
];

const Education = ({ innerRef }: { innerRef: LegacyRef<HTMLElement>; }) => {
  const { t } = useTranslation(['common', 'education']);
  return (
    <Section id="education" innerRef={innerRef}>
      <h2 className={classNames(styles.text['section-title'], styles.text['gradient-a'])}>
        {t('SECTIONS.EDUCATION')}
      </h2>
      {studies.map((study) => (
        <Position i18nKey={study} namespace="education" key={study} sections={sections} highlight="a" />
      ))}
    </Section>
  );
};

export default Education;
