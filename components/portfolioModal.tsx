/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';

import { PortfolioItem } from '../types/portfolio';
import classNames from '../utils/tailwindClassNamesHelper';

import styles from '../styles/tailwindStyles.json';

interface Props extends PortfolioItem {
  onClose: () => void;
}

const PortfolioModal = ({
  id, techs, codeAvailable, deployed, onClose,
}: Props) => {
  const { t } = useTranslation(['portfolio', 'common']);
  const i18nKey = id.toLocaleUpperCase();
  const buttonStyle = classNames(styles.text['button-primary'], 'py-2 w-28 sm:w-36 rounded-md');
  const altButtonStyle = classNames(styles.text['button-secondary'], 'py-2 w-28 sm:w-36 rounded-md');
  return (
    <div className='p-4'>
      <h4
        className={classNames(
          styles.text['section-title'],
          styles.text['gradient-a'],
          'mx-auto text-center',
        )}
      >
        {t(`ITEMS.${i18nKey}.TITLE`)}
      </h4>
      <p className='text-justify whitespace-pre-line'>{t(`ITEMS.${i18nKey}.DESCRIPTION.FULL`)}</p>
      {techs.length !== 0 && (
        <div>
          <h6 className='mt-8 font-medium text-gray-500 uppercase'>
            {t('MODAL.TECHS')}
          </h6>
          <ul className='mt-2'>
            {techs.map((tech) => (
              <li key={tech.id} className='flex items-baseline mt-1 ml-2'>
                <img
                  className='mr-2 w-5 h-5 rounded-sm'
                  src={tech.src}
                  alt={
                    t(
                      'TABLE.TECH.ICON_LABEL',
                      { techname: t(`TABLE.TECH.${tech.id.toLocaleUpperCase()}`) },
                    )}
                />
                <span className='text-gray-700'>
                  {t(`TABLE.TECH.${tech.id.toLocaleUpperCase()}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className='flex justify-between mt-10 sm:justify-evenly'>
        <button onClick={onClose} className={altButtonStyle}>
          {t('MODAL.BUTTONS.CLOSE')}
        </button>
        {codeAvailable && (
          <a
            href={`mailto:${t('EMAIL', { ns: 'common' })}`}
            className={buttonStyle}
            target='_blank'
            rel='noreferrer'
          >
            {t('MODAL.BUTTONS.REQUEST_ACCESS')}
          </a>
        )}
        {deployed && (
          <a
            href={t(`ITEMS.${i18nKey}.URL`)}
            className={buttonStyle}
            target='_blank'
            rel='noreferrer'
          >
            {t('MODAL.BUTTONS.GOTO')}
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioModal;
