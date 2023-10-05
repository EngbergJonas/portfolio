import { useTranslation } from 'react-i18next';
import jonas from '../../assets/jonas.jpg';
import signature from '../../assets/signature.svg';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <header data-testid="hero" className="max-h-screen h-screen min-h-screen mx-20">
      <div className="flex h-full pt-20 justify-between">
        <div data-testid="hero-text">
          <h1 className="text-7xl font-medium w-full mb-2">{t('app.title')}</h1>
          <h2 className="text-2xl font-medium ">{t('app.subtitle')}</h2>
          <p className="text-xl my-[4rem] max-w-[54rem]">{t('app.textContent')}</p>
          <img src={signature} alt="signature" />
        </div>
        <img data-testid="hero-image" className="scale-x-[-1] w-auto" src={jonas} alt="jonas" />
      </div>
    </header>
  );
};

export default Hero;
