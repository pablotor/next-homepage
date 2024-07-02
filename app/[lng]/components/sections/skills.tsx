'use client';

import { FC, useState } from 'react';

import { useTranslation } from '../../../i18n/client';
import { WithLanguage } from '../../../i18n/WithLanguage';
import SkillTable from '../skillTable';
import Tabs from '../tabs';

interface SkillSet {
  id: string;
  high?: string[];
  medium?: string[];
  low?: string[];
}

const skills: SkillSet[] = [
  {
    id: 'communication',
    high: ['spanish', 'english'],
    low: ['italian'],
  },
  {
    id: 'languages',
    high: ['javascript', 'typescript', 'html', 'css', 'tal', 'tacl'],
    medium: ['python', 'cobol', 'cplusplus', 'scripting'],
    low: ['ruby', 'r', 'java'],
  },
  {
    id: 'techs',
    high: [
      'linux',
      'react',
      'react_native',
      'nodejs',
      'leveldb',
      'dynamodb',
      'base24',
      'visa_vts',
      'mcar_bnet',
      'simpp',
    ],
    medium: [
      'django',
      'docker',
      'aws',
      'ses',
      'cognito',
      'oauth',
      'stripe',
      'travis',
      'firebase',
      'mixpanel',
      'enscribe',
      'tss',
    ],
  },
  {
    id: 'libaries',
    high: [
      'tailwind',
      'nextjs',
      'i18next',
      'express',
      'react_router',
      'redux',
      'saga',
      'swagger',
    ],
    medium: [
      'puppeteer',
      'react_navigation',
      'amplify',
      'jest',
    ],
  },
  {
    id: 'methodologies',
    high: ['scrum', 'watefall'],
    low: ['tdd'],
  },
];

const Skills: FC<WithLanguage> = (({ lng }) => {
  const [selected, setSelected] = useState(0);
  const { t } = useTranslation(lng, ['common', 'skills']);
  const enrichedSkills = [{
    id: 'all',
    high: skills.flatMap(({ high }) => high).filter((skill) => skill),
    medium: skills.flatMap(({ medium }) => medium).filter((skill) => skill),
    low: skills.flatMap(({ low }) => low).filter((skill) => skill),
  }, ...skills].map(
    (skill, index) => ({
      i18nKey: `CATEGORY.${skill.id.toLocaleUpperCase()}`,
      onSelect: () => setSelected(index),
      ...skill,
    }),
  );

  return (
    <>
      <h2 className="section-title gradient-a">
        {t('SECTIONS.SKILLS')}
      </h2>
      <p className="subtitle">
        {t('COMMENT', { ns: 'skills' })}
      </p>
      <div className="mt-8 flex items-baseline justify-between">
        <div className="flex items-center">
          <Tabs selected={selected} namespace="skills" tabArray={enrichedSkills} lng={lng} />
        </div>
      </div>
      <SkillTable skills={enrichedSkills} selected={selected} lng={lng} />
    </>
  );
});

export default Skills;
