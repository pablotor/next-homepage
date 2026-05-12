import { FC } from 'react';

import type { WithLanguage } from '../../../i18n';
import type { PositionItem } from '../position';

import { getServerSideTranslations } from '../../../i18n';
import Position from '../position';

const Education: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await getServerSideTranslations(lng, ['common', 'education']);
  const educationItems = t('ITEMS', {
    returnObjects: true,
    ns: 'education',
  }) as PositionItem[];
  return (
    <>
      <h2 className="section-title gradient-a">{t('SECTIONS.EDUCATION')}</h2>
      {educationItems.map((item) => (
        <Position
          key={item.TITLE}
          position={item}
          includeSecondary
          highlight="a"
        />
      ))}
    </>
  );
};

export default Education;
