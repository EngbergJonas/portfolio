import LanguageToggler from './components/LanguageHandler/LanguageHandler';
import Hero from './components/Hero/Hero';
import MobileBanner from './components/MobileBanner/MobileBanner';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div data-testid="app-view" className="h-[200vh]">
      <Navigation />
      <Hero />
      <LanguageToggler />
      <MobileBanner />
    </div>
  );
};

export default App;
