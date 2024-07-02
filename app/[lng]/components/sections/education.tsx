import { FC } from 'react';

import { useTranslation } from '../../../i18n';
import { WithLanguage } from '../../../i18n/WithLanguage';
import Position from '../position';

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
