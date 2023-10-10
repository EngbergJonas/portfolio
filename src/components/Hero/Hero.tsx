import { useTranslation } from 'react-i18next';
import jonas from '../../assets/jonas.png';
import { ReactComponent as Outline } from '../../assets/jonas_outline.svg';
import { someLinks } from '../../utils/common';
import IconLink from '../IconLink/IconLink';
import { FaArrowRight } from 'react-icons/fa6';
import { ReactComponent as Signature } from '../../assets/signature.svg';
import './styles.css';

const Hero = () => {
  const { t } = useTranslation();
  const heroImageStyles =
    'absolute bottom-0 right-0 z-10 h-[50%] scale-x-[-1] animate-appear-fast sm:h-[60%] lg:h-[80%] duration-700';
  return (
    <header data-testid="hero" className="app-margin relative h-[100dvh] pb-14 pt-24 sm:py-24">
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
      <img data-testid="hero-image" className={`${heroImageStyles} peer`} src={jonas} alt="jonas" />
      {/* Hero Image Outline */}
      <Outline
        data-testid="hero-image-outline"
        className={`${heroImageStyles} !z-0 translate-x-2 translate-y-1 !fill-green !stroke-green sm:translate-x-3 sm:peer-hover:translate-x-6 sm:peer-hover:!fill-slate-l sm:peer-hover:!stroke-slate-l`}
      />
    </header>
  );
};

export default Hero;
