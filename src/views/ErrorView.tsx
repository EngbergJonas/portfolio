import { useTranslation } from 'react-i18next';

const ErrorView = () => {
  const { t } = useTranslation();
  return (
    <div data-testid="error-view">
      <h1>{t('error.title')}</h1>
    </div>
  );
};

export default ErrorView;
