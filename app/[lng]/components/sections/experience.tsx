import { FC } from 'react';

import { useTranslation } from '../../../i18n';
import { WithLanguage } from '../../../i18n/WithLanguage';

import Position from '../position';

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

const Experience: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await useTranslation(lng, ['common', 'experience']);
  return (
    <>
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
    </>
  );
};

export default Experience;
