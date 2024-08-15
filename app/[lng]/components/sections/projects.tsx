import { FC } from 'react';
import Link from 'next/link';

import type { WithLanguage } from '../../../i18n';
import type { SectionData } from '../position';

import { useTranslation } from '../../../i18n';
import Position from '../position';

const projects = [
  'azurro',
  'digital_shores',
  'iib',
  'bichito',
  'abandon',
];

const sections: SectionData[] = [
  {
    id: 'description',
    contentType: 'text',
    showTitle: false,
  },
];

const Projects: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await useTranslation(lng, ['common', 'projects']);
  return (
    <>
      <h2 className="section-title gradient-b">
        {t('SECTIONS.PROJECTS')}
      </h2>
      <p className="subtitle">
        {t('COMMENT', { ns: 'projects' })}
      </p>
      {projects.map((project) => (
        <Position
          i18nKey={project}
          namespace="projects"
          key={project}
          sections={sections}
          highlight="a"
          includeSecondary
          lng={lng}
          interpolationComponents={{
            aa: <Link href={`/${lng}/azurro`} className="gradient-a hover:gradient-b bg-clip-text text-transparent" />,
            ad: <Link href="https://www.digital-shores.com" className="gradient-a  bg-clip-text transition-all hover:text-transparent" />,
          }}
        />
      ))}
    </>
  );
};

export default Projects;
