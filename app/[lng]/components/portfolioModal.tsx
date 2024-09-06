'use client';

import { FC } from 'react';
import { DialogTitle } from '@headlessui/react';

import type { WithLanguage } from '../../i18n';
import type { PortfolioItem } from './portfolioTable';

import { useTranslation } from '../../i18n/client';
import TechIcon from './icons/techIcon';
import { Button } from './button';

type PortfolioModalProps = {
  item: PortfolioItem;
  closeModal: () => void;
} & WithLanguage;

const PortfolioModal: FC<PortfolioModalProps> = ({
  item: {
    id, techIds, codeAvailable, deployAvailable,
  },
  closeModal,
  lng,
}) => {
  const { t } = useTranslation(lng, 'portfolio');
  const i18nKey = id.toLocaleUpperCase();
  return (
    <div className="p-4">
      <h4 className="section-title gradient-a mx-auto text-center">
        {t(`ITEMS.${i18nKey}.TITLE`)}
      </h4>
      <p className="whitespace-pre-line text-justify">{t(`ITEMS.${i18nKey}.DESCRIPTION.FULL`)}</p>
      {techIds.length !== 0 && (
        <div>
          <DialogTitle className="mt-8 font-medium uppercase text-gray-500">
            {t('MODAL.TECHS')}
          </DialogTitle>
          <ul className="mt-2">
            {techIds.map((techId) => (
              <li key={`${techId}ModalIcon`} className="ml-2 mt-1 flex items-baseline">
                <TechIcon
                  techId={techId}
                  className="mr-2 size-5 rounded-sm"
                  altIntlFn={(label) => t(
                    'TECH_ICON_ALT',
                    { techname: label },
                  )}
                  withLabel
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-10 flex justify-between sm:justify-evenly">
        <Button type="button" onClick={closeModal} variant="secondary">
          {t('MODAL.BUTTONS.CLOSE')}
        </Button>
        {codeAvailable && (
          <Button
            href={t(`ITEMS.${i18nKey}.REPO_URL`)}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('MODAL.BUTTONS.OPEN_REPO')}
          </Button>
        )}
        {deployAvailable && (
          <Button
            href={t(`ITEMS.${i18nKey}.DEPLOY_URL`)}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('MODAL.BUTTONS.OPEN_DEPLOY')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PortfolioModal;
