import { forwardRef } from 'react';
import { Trans } from 'react-i18next';

import { useTranslation } from '../../../i18n/client';
import { WithLanguage } from '../../../i18n/WithLanguage';
import LinkedIn from '../icons/linkedIn';
import Github from '../icons/github';
import SectionContainer from '../sectionContainer';

const socialMedia = [
  {
    icon: LinkedIn,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pablotor',
  }, {
    icon: Github,
    label: 'Github',
    link: 'https://github.com/pablotor',
  },
];

const Hero = forwardRef<HTMLElement, WithLanguage>(({ lng }, ref) => {
  const { t } = useTranslation(lng, ['common', 'hero']);
  return (
    <SectionContainer id="profile" ref={ref}>
      <div>
        <h1 className="mb-2 text-[3.5rem] font-black leading-[1.1] sm:text-8xl sm:leading-snug">
          <span className="gradient-a animate-vercel-text-a bg-clip-text">
            {t('FIRSTNAME')}
          </span>
          <br />
          <span className="gradient-b animate-vercel-text-b bg-clip-text">
            {t('LASTNAME')}
          </span>
        </h1>
        <a href={`mailto:${t('EMAIL')}`}>
          <h3 className="mb-6 text-2xl text-gray-600">
            {t('EMAIL')}
          </h3>
        </a>
      </div>
      <div>
        <Trans
          t={t}
          i18nKey="PROFILE"
          ns="hero"
          components={{
            primary: <p className="title" />,
            highlightA: <span className="highlight-a" />,
            // highlightB: <span className={classNames(styles.text['highlight-b'])}/>,
          }}
        />
      </div>
      <div className="mt-6 flex">
        {socialMedia.map((element) => (
          <a
            key={element.label}
            href={element.link}
            className="mr-6 "
            aria-label={element.label}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="rounded-full bg-gray-600 from-purple-500 to-pink-700 p-3 transition-all hover:bg-gradient-to-r"
            >
              <element.icon className="size-6 text-white" />
            </div>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
});

Hero.displayName = 'Hero';

export default Hero;