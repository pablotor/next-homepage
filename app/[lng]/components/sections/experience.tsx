import { FC } from 'react';

import type { WithLanguage } from '../../../i18n';

import { useTranslation } from '../../../i18n';
import Position, { SectionData } from '../position';

const jobs = [
  'wye',
  'wibson',
  'first_data',
  'conexia',
];

const sections: SectionData[] = [
  {
    id: 'responsibilities',
    contentType: 'list',
    showTitle: true,
  },
  {
    id: 'projects',
    contentType: 'list',
    showTitle: true,
  },
];

const Experience: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await useTranslation(lng, ['experience', 'common']);
  return (
    <>
      <h2 className="section-title gradient-a">
        {t('SECTIONS.EXPERIENCE', { ns: 'common' })}
      </h2>
      <p className="subtitle">
        {t('COMMENT')}
      </p>
      <div>
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
      </div>
    </>
  );
};

export default Experience;
