import { useTranslation } from 'react-i18next';
import jonas from '../../assets/jonas.png';
import { someLinks } from '../../utils/common';
import IconLink from '../IconLink/IconLink';
import { FaArrowRight } from 'react-icons/fa6';
import { ReactComponent as Signature } from '../../assets/signature.svg';
import './styles.css';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <header data-testid="hero" className="app-margin relative h-[100dvh] py-10 pb-14 sm:py-20">
      <div
        data-testid="hero-info-section"
        className="item-start relative z-10 flex h-full flex-col sm:justify-between"
      >
        <div>
          {/* Info Section */}
          <h1 className="header-xxl animate-appear-fast font-medium sm:mb-2">{t('hero.title')}</h1>
          <h2 className="header-base mb-2 animate-appear-medium font-medium">
            {t('hero.subtitle')}
          </h2>
          <p className="my-6 w-full animate-appear-slow text-base sm:my-10 sm:text-xl md:w-[30rem] lg:w-[34rem] xl:w-[50rem]">
            {t('hero.textContent')}
          </p>

          {/* About Me Button */}
          <button
            data-testid="about-me-button"
            className="about-me-button group"
            aria-label="about me"
          >
            <span className="animate-bottom-border">{t('hero.aboutMe')}</span>
            <FaArrowRight className="text-xl text-slate-l group-hover:text-green group-focus:text-green sm:text-2xl" />
          </button>

          {/* Some Icons */}
          <div
            className="hidden animate-appear-slow gap-10 sm:flex"
            data-testid="some-links-desktop-container"
          >
            {someLinks.map((sl) => (
              <IconLink key={sl.label} {...sl} hoverColor={'green'} />
            ))}
          </div>
        </div>

        {/* Signature */}
        <div>
          <Signature className="h-[3rem] animate-appear-slow fill-green sm:h-20" />
        </div>
      </div>
      {/* Hero Image */}
      <img
        data-testid="hero-image"
        className="absolute bottom-0 right-0 h-[50%] scale-x-[-1] animate-appear-fast sm:h-[60%] lg:h-[80%]"
        src={jonas}
        alt="jonas"
      />
    </header>
  );
};

export default Hero;
