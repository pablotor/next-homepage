import type { NextPage } from 'next/types';

import { useTranslation, type WithLanguage } from '../../i18n';
import photos from './assets/photos';
import SectionContainer from '../components/sectionContainer';
import GenericPhotoGallery from './components/genericPhotoGallery';

const Azurro: NextPage<{ params: WithLanguage }> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, 'azurro');
  return (
    <SectionContainer id="azurro" verticalAllignment="start">
      <h2 className="section-title gradient-a">
        {t('TITLE')}
      </h2>
      <p className="subtitle mb-4">
        {t('COMMENT')}
      </p>
      <GenericPhotoGallery
        photos={photos}
        epilogue={(
          <div className="mt-16 flex justify-end">
            <div className="title max-w-lg text-right">
              <p className="italic">
                &quot;It&apos;s a dangerous business going out your door.
                <br />
                <br />
                You step onto the road, and if you don&apos;t keep your feet, there&apos;s no
                knowing where you&apos;ll be swept off to.&quot;
                <br />
                <br />
                JRR Tolkien
              </p>
            </div>
          </div>
        )}
      />
    </SectionContainer>
  );
};

export default Azurro;
