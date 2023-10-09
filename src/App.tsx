import LanguageToggler from './components/LanguageHandler/LanguageHandler';
import Hero from './components/Hero/Hero';
import IconLink from './components/IconLink/IconLink';
import { someLinks } from './utils/common';

const App = () => {
  return (
    <div data-testid="app-view">
      {/* HEADER */}
      <Hero />
      <LanguageToggler />
      <div className="bottom-0 left-0 right-0 fixed z-50 h-10 w-full bg-slate-500 flex items-center opacity-80 px-10 sm:hidden justify-evenly">
        {someLinks.map((l) => (
          <IconLink key={l.label} {...l} color={'text-gray-50'} />
        ))}
      </div>
    </div>
  );
};

export default App;
