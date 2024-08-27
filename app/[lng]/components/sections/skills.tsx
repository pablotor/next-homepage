'use client';

import { FC, useMemo, useState } from 'react';

import type { WithLanguage } from '../../../i18n';

import { useTranslation } from '../../../i18n/client';
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
    id: 'languages',
    high: ['javascript', 'typescript', 'html', 'css', 'tal', 'tacl'],
    medium: ['python', 'cplusplus', 'scripting'],
    low: ['ruby', 'cobol', 'r', 'java', 'assembly'],
  },
  {
    id: 'frameworks',
    high: [
      'nextjs',
      'nestjs',
      'react_native',
    ],
    low: ['rails', 'django'],
  },
  {
    id: 'databases',
    medium: [
      'postgresql',
      'leveldb',
      'dynamodb',
    ],
    low: [
      'enscribe',
    ],
  },
  {
    id: 'libaries',
    high: [
      'react',
      'nodejs',
      'tailwind',
      'express',
      'react_router',
      'redux',
      'saga',
      'swagger',
      'i18next',
    ],
    medium: [
      'puppeteer',
      'react_navigation',
      'amplify',
      'jest',
    ],
  },
  {
    id: 'infra',
    high: [
      'vercel',
    ],
    medium: [
      'aws',
      'heroku',
      'docker',
      'terraform',
      'travis',
      'linux',
    ],
  },
  {
    id: 'others',
    high: [
      'base24',
      'visa_vts',
      'mcar_bnet',
      'simpp',
    ],
    medium: [
      'cognito',
      'firebase',
      'mixpanel',
      'oauth',
      'ses',
      'stripe',
      'tss',
    ],
  },
];

const Skills: FC<WithLanguage> = (({ lng }) => {
  const [selected, setSelected] = useState(0);
  const { t } = useTranslation(lng, ['common', 'skills']);
  const enrichedSkills = useMemo(() => [{
    id: 'all',
    high: skills.flatMap(({ high }) => high).filter((skill) => skill),
    medium: skills.flatMap(({ medium }) => medium).filter((skill) => skill),
    low: skills.flatMap(({ low }) => low).filter((skill) => skill),
  }, ...skills].map(
    (skill, index) => ({
      i18nKey: `CATEGORIES.${skill.id.toLocaleUpperCase()}`,
      onSelect: () => setSelected(index),
      ...skill,
    }),
  ), []);

  return (
    <>
      <h2 className="section-title gradient-a">
        {t('SECTIONS.SKILLS')}
      </h2>
      <p className="subtitle">
        {t('COMMENT', { ns: 'skills' })}
      </p>
      <Tabs selected={selected} namespace="skills" tabArray={enrichedSkills} lng={lng} />
      <SkillTable skills={enrichedSkills} selected={selected} lng={lng} />
    </>
  );
});

export default Skills;
