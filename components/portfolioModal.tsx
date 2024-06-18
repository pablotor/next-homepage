/* eslint-disable @next/next/no-img-element */
import { DialogTitle } from '@headlessui/react';

import { useTranslation } from '../app/i18n/client';
import { PortfolioItem } from '../types/portfolio';
import { Button } from './Button';

interface Props extends PortfolioItem {
  onClose: () => void;
}

const PortfolioModal = ({
  id, techs, codeAvailable, deployed, onClose,
}: Props) => {
  const { t } = useTranslation('en', 'portfolio');
  const i18nKey = id.toLocaleUpperCase();
  return (
    <div className="p-4">
      <h4 className="section-title gradient-a mx-auto text-center">
        {t(`ITEMS.${i18nKey}.TITLE`)}
      </h4>
      <p className="whitespace-pre-line text-justify">{t(`ITEMS.${i18nKey}.DESCRIPTION.FULL`)}</p>
      {techs.length !== 0 && (
        <div>
          <DialogTitle className="mt-8 font-medium uppercase text-gray-500">
            {t('MODAL.TECHS')}
          </DialogTitle>
          <ul className="mt-2">
            {techs.map((tech) => (
              <li key={tech.id} className="ml-2 mt-1 flex items-baseline">
                <img
                  className="mr-2 size-5 rounded-sm"
                  src={tech.src}
                  alt={t(
                    'TABLE.TECH.ICON_LABEL',
                    { techname: t(`TABLE.TECH.${tech.id.toLocaleUpperCase()}`) },
                  )}
                />
                <span className="text-gray-700">
                  {t(`TABLE.TECH.${tech.id.toLocaleUpperCase()}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-10 flex justify-between sm:justify-evenly">
        <Button type="button" onClick={onClose} style="secondary">
          {t('MODAL.BUTTONS.CLOSE')}
        </Button>
        {codeAvailable && (
          <Button
            href={`mailto:${t('EMAIL', { ns: 'common' })}`}
            style="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('MODAL.BUTTONS.REQUEST_ACCESS')}
          </Button>
        )}
        {deployed && (
          <Button
            href={t(`ITEMS.${i18nKey}.URL`)}
            style="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('MODAL.BUTTONS.GOTO')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PortfolioModal;
