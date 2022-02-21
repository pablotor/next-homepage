import { useTranslation } from 'next-i18next';

interface Props {
  i18nKey: string,
  techs?: string[];
  codeAvailable?: boolean;
  deployed?: boolean;
  onClose: () => void;
}

const PortfolioModal = ({
  i18nKey, techs, codeAvailable, deployed, onClose,
}: Props) => {
  const { t } = useTranslation(['common', 'portfolio']);
  return (
    <div>
      <h4>{`ITEMS.${i18nKey}.TITLE`}</h4>
      <p>{`ITEMS.${i18nKey}.DESCRIPTION.FULL`}</p>
      {techs && (
        <ul>
          {techs.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
      )}
      <div>
        {codeAvailable && (
          <button>
            <a href={`mailto:${t('EMAIL')}`} >
              {t('MODAL.BUTTONS.REQUEST_ACCESS')}
            </a>
          </button>
        )}
        {deployed && (
          <button>
            <a href={t(`ITEMS.${i18nKey}.URL`)} >
              {t('MODAL.BUTTONS.GOTO')}
            </a>
          </button>
        )}
        <button onClick={onClose}>
          {t('MODAL.BUTTONS.CLOSE')}
        </button>
      </div>
    </div>
  );
};

export default PortfolioModal;
