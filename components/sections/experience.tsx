'use client'

import { forwardRef } from 'react';

import { useTranslation } from '../../app/i18n/client';
import Position from '../position';

import SectionContainer from '../sectionContainer';

const jobs = [
  'wye',
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

const Experience = forwardRef<HTMLElement>(({} ,ref) => {
  const { t } = useTranslation('en', ['common', 'experience']);
  return (
    <SectionContainer id="experience" ref={ref}>
      <h2 className="section-title gradient-a">
        {t('SECTIONS.EXPERIENCE')}
      </h2>
      <p className="subtitle">
        {t('COMMENT', { ns: 'experience' })}
      </p>
      {jobs.map((job) => (
        <Position i18nKey={job} namespace="experience" key={job} sections={sections} includeSecondary />
      ))}
    </SectionContainer>
  );
});

export default Experience;
