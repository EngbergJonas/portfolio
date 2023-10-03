import { useTranslation } from 'react-i18next';

const InfoView = () => {
  const { t } = useTranslation();
  return (
    <div data-testid="info-view">
      <h1>{t('info.title')}</h1>
    </div>
  );
};

export default InfoView;
