import LanguageToggler from './components/LanguageHandler/LanguageHandler';
import Hero from './components/Hero/Hero';

import MobileBanner from './components/MobileBanner/MobileBanner';

const App = () => {
  return (
    <div data-testid="app-view">
      <Hero />
      <LanguageToggler />
      <MobileBanner />
    </div>
  );
};

export default App;
