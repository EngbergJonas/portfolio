import { useTranslation } from 'react-i18next';
import LanguageToggler from './components/LanguageHandler/LanguageHandler';
// import { InfoView } from './views';
// import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="app-view">
      <header>
        <h1>{t('app.title')}</h1>
      </header>
      <LanguageToggler />
      <Link to="info">Link to info page</Link>
      {/* <Routes>
        <Route path="/info" element={<InfoView />} />
      </Routes> */}
    </div>
  );
};

export default App;
