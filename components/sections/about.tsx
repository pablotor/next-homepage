'use client'

import Image from 'next/legacy/image';
import { forwardRef } from 'react';
import { Trans } from 'react-i18next';

import { useTranslation } from '../../app/i18n/client';
import { WithLanguage } from "../../app/i18n/WithLanguage";
import SectionContainer from '../sectionContainer';

const About = forwardRef<HTMLElement, WithLanguage>(({ lng } ,ref) => {
  const { t } = useTranslation(lng, ['common', 'about']);
  return (
    <SectionContainer id="about" ref={ref}>
      <div className="relative">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <div className="relative h-36 w-full sm:h-72 lg:hidden">
              <Image
                className="object-cover object-top "
                src="/img/about-mobile.jpg"
                alt={t('IMAGE_ALT', { ns: 'about' })}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="hidden w-full lg:absolute lg:block lg:h-full">
              <Image
                className="object-cover"
                src="/img/about-desktop.jpg"
                alt={t('IMAGE_ALT', { ns: 'about' })}
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="relative pb-16 pt-12 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:grid-cols-2 lg:pl-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose title lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h2 className="section-title gradient-b">
                {t('SECTIONS.ABOUT')}
              </h2>
              <div className="title mt-5 prose prose-indigo">
                <Trans
                  i18nKey="CONTENT"
                  ns="about"
                  t={t}
                  components={{
                    highlighted: <span className="highlight-a" />,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
});

export default About;
