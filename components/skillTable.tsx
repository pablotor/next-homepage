import { useTranslation } from 'next-i18next';

import styles from '../styles/tailwindStyles.json';
import classNames from '../utils/tailwindClassNamesHelper';

type Expertise = 'high' | 'medium' | 'low';

interface SkillItemProps {
  expertise: Expertise;
  skillArray?: (string | undefined)[];
}

const SkillItem = ({ expertise, skillArray }: SkillItemProps) => {
  const { t } = useTranslation('skills');
  return (
    <div
      className={classNames(
        !skillArray || skillArray.length === 0 ? 'hidden' : '',
        'mb-8',
      )}
    >
      <div>
        <h5 className={classNames(styles.text.primary, 'text-gray-700')}>
          {t(`SKILLTABLE.${expertise.toLocaleUpperCase()}.TITLE`)}
        </h5>
        <p className={styles.text.secondary}>
          {t(`SKILLTABLE.${expertise.toLocaleUpperCase()}.SUBTITLE`)}
        </p>
      </div>
      <div>
        <p className="leading-8 tracking-widest">
          {skillArray?.flatMap(
            (id, index) => ([
              <span
                key={id}
                className={classNames(
                  'hover:text-xl tracking-normal leading-8 hover:leading-4 whitespace-nowrap hover:text-transparent bg-clip-text transition-all ease-in-out cursor-default',
                  styles.text['gradient-a'],
                )}
              >
                {t(`SKILLS.${id?.toLocaleUpperCase()}.LABEL`)}
              </span>,
              index === skillArray.length - 1 ? '.' : ',  ',
            ]),
          )}
        </p>
      </div>
    </div>
  );
};

interface Props {
  skills: {
    id: string;
    high?: (string | undefined)[];
    medium?: (string | undefined)[];
    low?: (string | undefined)[];
  }[];
  selected: number;
}

const SkillTable = ({ skills, selected }: Props) => {
  const { t } = useTranslation('skills');
  const expertiseArray: Expertise[] = ['high', 'medium', 'low'];
  return (
    <div className="mt-8">
      {expertiseArray.map((expertise) => (
        <SkillItem
          key={expertise}
          expertise={expertise}
          skillArray={skills[selected][expertise]}
        />
      ))}
    </div>
  );
};

export default SkillTable;
