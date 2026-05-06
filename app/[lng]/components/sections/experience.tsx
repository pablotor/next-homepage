import { FC } from 'react';
import Link from 'next/link';

import type { WithLanguage } from '../../../i18n';

import { getServerSideTranslations } from '../../../i18n';
import Position, { PositionItem } from '../position';

const Experience: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await getServerSideTranslations(lng, ['experience', 'common']);
  const experienceItems = t('ITEMS', {
    returnObjects: true,
    ns: 'experience',
  }) as PositionItem[];
  const experienceSections = t('SECTIONS', {
    returnObjects: true,
    ns: 'experience',
  }) as { KEY: keyof PositionItem; LABEL: string }[];
  return (
    <>
      <h2 className="section-title gradient-a">
        {t('SECTIONS.EXPERIENCE', { ns: 'common' })}
      </h2>
      <p className="subtitle">{t('COMMENT', { ns: 'experience' })}</p>
      <div>
        {experienceItems.map((item) => (
          <Position
            key={item.TITLE}
            position={item}
            sections={experienceSections}
            includeSecondary
            interpolationComponents={{
              ai: (
                <Link
                  href="https://illow.io"
                  className="gradient-b bg-clip-text transition-colors hover:text-transparent"
                />
              ),
              ad: (
                <Link
                  href="https://www.digital-shores.com"
                  className="gradient-b  bg-clip-text transition-all hover:text-transparent"
                />
              ),
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
