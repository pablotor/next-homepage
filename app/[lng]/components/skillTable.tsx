import { FC } from 'react';
import { WithLanguage } from '../../i18n/WithLanguage';
import { Expertise, SkillItem } from './skillItem';

type SkillTableProps = {
  skills: {
    id: string;
    high?: (string | undefined)[];
    medium?: (string | undefined)[];
    low?: (string | undefined)[];
  }[];
  selected: number;
} & WithLanguage;

const SkillTable: FC<SkillTableProps> = ({ skills, selected, lng }) => {
  const expertiseArray: Expertise[] = ['high', 'medium', 'low'];
  return (
    <div className="mt-8">
      {expertiseArray.map((expertise) => (
        <SkillItem
          key={expertise}
          expertise={expertise}
          skillArray={skills[selected][expertise]}
          lng={lng}
        />
      ))}
    </div>
  );
};

export default SkillTable;
