'use client';

import { forwardRef } from 'react';

import { useTranslation } from '../../../i18n/client';
import { WithLanguage } from '../../../i18n/WithLanguage';

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

const Experience = forwardRef<HTMLElement, WithLanguage>(({ lng }, ref) => {
  const { t } = useTranslation(lng, ['common', 'experience']);
  return (
    <SectionContainer id="experience" ref={ref}>
      <h2 className="section-title gradient-a">
        {t('SECTIONS.EXPERIENCE')}
      </h2>
      <p className="subtitle">
        {t('COMMENT', { ns: 'experience' })}
      </p>
      {jobs.map((job) => (
        <Position
          i18nKey={job}
          namespace="experience"
          key={job}
          sections={sections}
          includeSecondary
          lng={lng}
        />
      ))}
    </SectionContainer>
  );
});

Experience.displayName = 'Experience';

export default Experience;
