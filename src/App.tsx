import LanguageToggler from './components/LanguageHandler/LanguageHandler';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <div data-testid="app-view">
      {/* HEADER */}
      <Hero />
      <LanguageToggler />
    </div>
  );
};

export default App;
