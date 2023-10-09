import { useTranslation } from 'react-i18next';
import jonas from '../../assets/jonas.png';
import signature from '../../assets/signature.svg';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <header data-testid="hero" className="app-margin h-[100dvh] relative pt-10 sm:pt-20">
      <div data-testid="hero-info" className="z-10 relative">
        <h1 className="header-xxl animate-appear-fast font-medium sm:mb-2">{t('hero.title')}</h1>
        <h2 className="header-base animate-appear-medium font-medium mb-2">{t('hero.subtitle')}</h2>
        <p className="text-base animate-appear-slow sm:text-xl w-full my-6 sm:my-10 md:w-[30rem] lg:w-[34rem] xl:w-[50rem]">
          {t('hero.textContent')}
        </p>
        <img
          className="h-[4.5rem] animate-appear-slow sm:h-24 md:h-28 lg:h-32"
          src={signature}
          alt="signature"
        />
      </div>
      <img
        data-testid="hero-image"
        className="scale-x-[-1] animate-appear-fast absolute right-0 h-[50%] sm:h-[60%] md:h-[70%] lg:h-[90%] bottom-0"
        src={jonas}
        alt="jonas"
      />
    </header>
  );
};

export default Hero;
