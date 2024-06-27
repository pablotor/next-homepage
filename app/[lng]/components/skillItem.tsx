import { FC } from 'react';

import { useTranslation } from '../../i18n/client';
import { WithLanguage } from '../../i18n/WithLanguage';
import classNames from '../utils/classNames';

export type Expertise = 'high' | 'medium' | 'low';

type SkillItemProps = {
  expertise: Expertise;
  skillArray?: (string | undefined)[];
} & WithLanguage;

export const SkillItem: FC<SkillItemProps> = ({ expertise, skillArray, lng }) => {
  const { t } = useTranslation(lng, 'skills');
  return (
    <div
      className={classNames(
        !skillArray || skillArray.length === 0 ? 'hidden' : '',
        'mb-8',
      )}
    >
      <div>
        <h5 className="title text-gray-700">
          {t(`SKILLTABLE.${expertise.toLocaleUpperCase()}.TITLE`)}
        </h5>
        <p className="subtitle">
          {t(`SKILLTABLE.${expertise.toLocaleUpperCase()}.SUBTITLE`)}
        </p>
      </div>
      <div>
        <p className="leading-8 tracking-widest">
          {skillArray?.flatMap(
            (id, index) => ([
              <span
                key={id}
                className="gradient-a cursor-default whitespace-nowrap bg-clip-text leading-8 tracking-normal transition-all ease-in-out hover:text-xl hover:leading-4 hover:text-transparent"
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
