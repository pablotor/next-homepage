import { FC } from 'react';
import { Trans } from 'react-i18next/TransWithoutContext';

import type { WithLanguage } from '../../../i18n';

import { useTranslation } from '../../../i18n';
import LinkedIn from '../icons/linkedIn';
import Github from '../icons/github';
import EmailLink from '../emailLink';

const socialMedia = [
  {
    Icon: LinkedIn,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pablotor',
  }, {
    Icon: Github,
    label: 'Github',
    link: 'https://github.com/pablotor',
  },
];

const Hero: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await useTranslation(lng, ['hero', 'common']);
  return (
    <>
      <div className="mb-8 sm:mb-6">
        <h1 className="mb-2 text-[3.5rem] font-black leading-[1.2] sm:mb-0 sm:text-8xl sm:leading-snug">
          <span className="gradient-a animate-vercel-text-a bg-clip-text">
            {t('FIRSTNAME', { ns: 'common' })}
          </span>
          <br />
          <span className="gradient-b animate-vercel-text-b bg-clip-text">
            {t('LASTNAME', { ns: 'common' })}
          </span>
        </h1>
        <EmailLink email={t('EMAIL', { ns: 'common' })} className="text-2xl" />
      </div>
      <div className="title space-y-2">
        <Trans
          t={t}
          i18nKey="PROFILE"
          components={{ h: <span className="highlight-a" /> }}
        />
      </div>
      <div className="mt-6 flex">
        {socialMedia.map(({ Icon, label, link }) => (
          <a
            key={label}
            href={link}
            className="mr-6"
            aria-label={label}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="gradient-b group relative rounded-full p-3"
            >
              <Icon className="relative z-10 size-6 text-white" />
              <div className="absolute inset-0 z-0 rounded-full bg-gray-600 p-3 transition-colors group-hover:bg-transparent" />
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Hero;
