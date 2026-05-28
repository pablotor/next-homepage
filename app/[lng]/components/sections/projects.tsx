import { FC } from 'react';
import Link from 'next/link';

import type { WithLanguage } from '../../../i18n';

import { getServerSideTranslations } from '../../../i18n';
import Position, { PositionItem } from '../position';

const Projects: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await getServerSideTranslations(lng, ['common', 'projects']);
  const projectItems = t('ITEMS', {
    returnObjects: true,
    ns: 'projects',
  }) as PositionItem[];
  return (
    <>
      <h2 className="section-title gradient-b">{t('SECTIONS.PROJECTS')}</h2>
      <p className="subtitle">{t('COMMENT', { ns: 'projects' })}</p>
      {projectItems.map((item) => (
        <Position
          key={item.TITLE}
          position={item}
          includeSecondary
          highlight="a"
          interpolationComponents={{
            aa: (
              <Link
                href={`/${lng}/azzurro`}
                className="gradient-a hover:gradient-b bg-clip-text text-transparent"
              />
            ),
          }}
        />
      ))}
    </>
  );
};

export default Projects;
