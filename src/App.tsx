import { useTranslation } from 'react-i18next';
import LanguageToggler from './components/LanguageHandler/LanguageHandler';
import { Link } from 'react-router-dom';

const App = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="app-view">
      <header className="my-6 flex flex-col w-full items-center">
        <h1 className="text-5xl font-bold">{t('app.title')}</h1>
      </header>
      <LanguageToggler />
      <Link to="info">Link to info page</Link>
    </div>
  );
};

export default App;
