import { FC } from 'react';

import type { WithLanguage } from '../../../i18n';
import type { SectionData } from '../position';

import { useTranslation } from '../../../i18n';
import Position from '../position';

const studies = [
  'fiuba',
  'cbc',
  'enspa',
  'fuce',
];

const sections: SectionData[] = [
  {
    id: 'description',
    contentType: 'text',
    showTitle: false,
  },
];

const Education: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await useTranslation(lng, ['common', 'education']);
  return (
    <>
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
    </>
  );
};

export default Education;
