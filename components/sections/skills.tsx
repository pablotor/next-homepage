import { LegacyRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

import classNames from '../../utils/tailwindClassNamesHelper';
import Tabs from '../tabs';
import SkillTable from '../skillTable';
import Section from './sectionContainer';

import styles from '../../styles/tailwindStyles.json';

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

const Skills = ({ innerRef }: { innerRef: LegacyRef<HTMLElement>; }) => {
  const [selected, setSelected] = useState(0);
  const { t } = useTranslation(['common', 'skills']);
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
    <Section id="skills" innerRef={innerRef}>
      <h2 className={classNames(styles.text['section-title'], styles.text['gradient-a'])}>
        {t('SECTIONS.SKILLS')}
      </h2>
      <p className={styles.text.secondary}>
        {t('COMMENT', { ns: 'skills' })}
      </p>
      <div className="flex justify-between items-baseline mt-8">
        <div className="flex items-center">
          <Tabs selected={selected} namespace="skills" tabArray={enrichedSkills} />
        </div>
      </div>
      <SkillTable skills={enrichedSkills} selected={selected} />
    </Section>
  );
};

export default Skills;
