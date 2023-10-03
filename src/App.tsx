import { useTranslation } from 'react-i18next';
import LanguageToggler from './components/LanguageHandler/LanguageHandler';

const App = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="app-view">
      <header>
        <h1>{t('app.title')}</h1>
      </header>
      <LanguageToggler />
    </div>
  );
};

export default App;
