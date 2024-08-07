import Image from 'next/legacy/image';
import { FC } from 'react';
import { Trans } from 'react-i18next/TransWithoutContext';

import type { WithLanguage } from '../../../i18n';

import { useTranslation } from '../../../i18n';
import EmailLink from '../emailLink';

const About: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await useTranslation(lng, ['about', 'common']);
  return (
    <div className="relative">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <div className="relative h-36 w-full sm:h-72 lg:hidden">
            <Image
              className="object-cover object-top "
              src="/img/about-mobile.jpg"
              alt={t('IMAGE_ALT')}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="hidden w-full lg:absolute lg:block lg:h-full">
            <Image
              className="object-cover"
              src="/img/about-desktop.jpg"
              alt={t('IMAGE_ALT')}
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="relative pb-16 pt-12 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:grid-cols-2 lg:pl-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="title mx-auto max-w-prose lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="section-title gradient-b mb-8">
              {t('SECTIONS.ABOUT', { ns: 'common' })}
            </h2>
            <div className="title space-y-2">
              <Trans
                i18nKey="CONTENT"
                t={t}
                components={{ h: <span className="highlight-a" /> }}
              />
            </div>
            <div className="mt-8 w-full text-right">
              <EmailLink email={t('EMAIL', { ns: 'common' })} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
