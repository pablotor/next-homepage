import { FC } from 'react';

import type { WithLanguage } from '../../i18n';

import classNames from '../utils/classNames';

const getStyle = (isSelected: boolean) => (
  isSelected
    ? 'group-hover:text-gray-900 text-transparent gradient-a'
    : 'group-hover:text-transparent gradient-b'
);

type LanguageSwitcherProps = {
  className?: string;
} & WithLanguage;

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ lng, className }) => (
  <a
    href={lng === 'es' ? '/en' : '/es'}
    className={classNames(
      'title flex p-3 text-gray-900 group',
      className,
    )}
  >
    <span className={classNames('bg-clip-text transition-all', getStyle(lng === 'en'))}>
      EN
    </span>
    <span className="mx-1">/</span>
    <span className={classNames('bg-clip-text transition-all', getStyle(lng === 'es'))}>
      ES
    </span>
  </a>
);

export default LanguageSwitcher;
