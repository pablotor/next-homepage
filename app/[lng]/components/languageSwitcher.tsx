import { FC } from 'react';

import type { WithLanguage } from '../../i18n';

import classNames from '../utils/classNames';

type LanguageSwitcherProps = {
  className?: string;
} & WithLanguage;

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ lng, className }) => (
  <a
    href={lng === 'es' ? '/en' : '/es'}
    className={classNames(
      'title flex p-3 text-gray-900',
      lng === 'es'
        ? '[&_span:last-child]:hover:text-transparent [&_span:first-child]:text-transparent [&_span:first-child]:hover:text-gray-900'
        : '[&_span:first-child]:hover:text-transparent [&_span:last-child]:text-transparent [&_span:last-child]:hover:text-gray-900',
      className,
    )}
  >
    <span className={classNames('bg-clip-text transition-all', lng === 'es' ? 'gradient-a' : 'gradient-b')}>
      es
    </span>
    <span>{' / '}</span>
    <span className={classNames('bg-clip-text transition-all', lng === 'en' ? 'gradient-a' : 'gradient-b')}>
      en
    </span>
  </a>
);

export default LanguageSwitcher;
