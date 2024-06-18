'use client'

import { forwardRef } from 'react';

import { useTranslation } from '../../app/i18n/client';
import Position from '../position';
import Section from '../sectionContainer';

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

const Education = forwardRef<HTMLElement>(({} ,ref)  => {
  const { t } = useTranslation('en', ['common', 'education']);
  return (
    <Section id="education" ref={ref}>
      <h2 className="section-title gradient-a">
        {t('SECTIONS.EDUCATION')}
      </h2>
      {studies.map((study) => (
        <Position i18nKey={study} namespace="education" key={study} sections={sections} highlight="a" />
      ))}
    </Section>
  );
});

export default Education;
