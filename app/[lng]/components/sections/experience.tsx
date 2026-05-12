import { FC } from 'react';
import Link from 'next/link';

import type { WithLanguage } from '../../../i18n';

import { getServerSideTranslations } from '../../../i18n';
import Position, { PositionItem } from '../position';

const Experience: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await getServerSideTranslations(lng, ['experience', 'common']);
  const experienceItems = t('ITEMS', {
    returnObjects: true,
    ns: 'experience',
  }) as PositionItem[];
  const experienceSections = t('SECTIONS', {
    returnObjects: true,
    ns: 'experience',
  }) as { KEY: keyof PositionItem; LABEL: string }[];
  return (
    <>
      <h2 className="section-title gradient-a">
        {t('SECTIONS.EXPERIENCE', { ns: 'common' })}
      </h2>
      <p className="subtitle">{t('COMMENT', { ns: 'experience' })}</p>
      <div>
        {experienceItems.map((item) => (
          <Position
            key={item.TITLE}
            position={item}
            sections={experienceSections}
            includeSecondary
            interpolationComponents={{
              ptp: (
                <Link
                  href="https://ptp.pablotor.dev"
                  className="gradient-a hover:gradient-b bg-clip-text text-transparent transition-colors"
                />
              ),
              mhp: (
                <Link
                  href="https://myhomepathway.com"
                  className="gradient-a hover:gradient-b bg-clip-text text-transparent transition-colors"
                />
              ),
              illow: (
                <Link
                  href="https://illow.io"
                  className="gradient-a hover:gradient-b bg-clip-text text-transparent transition-colors"
                />
              ),
              delicate: (
                <Link
                  href="https://delicate-music.de"
                  className="gradient-a hover:gradient-b bg-clip-text text-transparent transition-colors"
                />
              ),
              flo: (
                <Link
                  href="https://florianfederl.de"
                  className="gradient-a hover:gradient-b bg-clip-text text-transparent transition-colors"
                />
              ),
              elektro: (
                <Link
                  href="https://schuller-elektro.com"
                  className="gradient-a hover:gradient-b bg-clip-text text-transparent transition-colors"
                />
              ),
              cs: (
                <Link
                  href="https://clearsessionhealth.com"
                  className="gradient-a hover:gradient-b bg-clip-text text-transparent transition-colors"
                />
              ),
              ad: (
                <Link
                  href="https://www.digital-shores.com"
                  className="gradient-b  bg-clip-text transition-all hover:text-transparent"
                />
              ),
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
