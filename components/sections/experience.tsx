import { useTranslation } from 'next-i18next';

// import classNames from '../../utils/tailwindClassNamesHelper';

import styles from '../../styles/tailwindStyles.json';

const Experience = () => {
  const { t } = useTranslation(['common', 'experience']);
  return (
    <div id="experience" className={styles.container.section}>
      Lalala
    </div>
  );
};

export default Experience;
