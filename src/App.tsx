import Hero from './components/Hero/Hero';
import MobileBanner from './components/MobileBanner/MobileBanner';
import Navigation from './components/Navigation/Navigation';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const App = () => {
  return (
    <div data-testid="app-view">
      <Navigation />
      <Hero />
      <MobileBanner />
    </div>
  );
};

export default App;
