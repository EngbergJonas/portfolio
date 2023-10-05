import { useTranslation } from 'react-i18next';
import jonas from '../../assets/jonas.jpg';
import signature from '../../assets/signature.svg';
import './styles.css';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <header data-testid="hero" className="max-h-screen h-screen min-h-screen mx-10 md:mx-20">
      <div className="md:flex-row flex-col flex h-full pt-8 md:pt-20 justify-between">
        {/* title, subtitle, text-content and signature */}
        <div data-testid="hero-text">
          <h1 className="text-4xl md:text-7xl font-medium w-full mb-2">{t('app.title')}</h1>
          <h2 className="text-xl md:text-2xl font-medium">{t('app.subtitle')}</h2>
          <p className="md:text-xl my-4 md:my-[4rem] max-w-[54rem]">{t('app.textContent')}</p>
          <img
            data-testid="signature-image"
            className="h-[8rem] hidden md:block"
            src={signature}
            alt="signature"
          />
        </div>
        {/* hero image */}
        <img
          data-testid="hero-image"
          className="scale-x-[-1] w-auto fade-in"
          src={jonas}
          alt="jonas"
        />
      </div>
    </header>
  );
};

export default Hero;
