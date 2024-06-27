'use client';

import { forwardRef } from 'react';

import { useTranslation } from '../../../i18n/client';
import { WithLanguage } from '../../../i18n/WithLanguage';
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

const Education = forwardRef<HTMLElement, WithLanguage>(({ lng }, ref) => {
  const { t } = useTranslation(lng, ['common', 'education']);
  return (
    <Section id="education" ref={ref}>
      <h2 className="section-title gradient-a">
        {t('SECTIONS.EDUCATION')}
      </h2>
      {studies.map((study) => (
        <Position
          i18nKey={study}
          namespace="education"
          key={study}
          sections={sections}
          highlight="a"
          lng={lng}
        />
      ))}
    </Section>
  );
});

Education.displayName = 'Education';

export default Education;
