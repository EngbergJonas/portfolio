import { useTranslation } from 'react-i18next';
import jonas from '../../assets/jonas.png';
import { ReactComponent as Outline } from '../../assets/jonas_outline.svg';
import { someLinks } from '../../utils/common';
import IconLink from '../IconLink/IconLink';
import { FaArrowRight } from 'react-icons/fa6';
import { ReactComponent as Signature } from '../../assets/signature.svg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header
      data-testid="hero"
      className="relative h-[100dvh] overflow-hidden px-8 pb-14 pt-24 sm:pt-32 md:px-16 xl:px-20"
    >
      <div
        data-testid="hero-info-section"
        className="item-start relative z-10 flex h-full flex-col sm:justify-between"
      >
        <div>
          {/* info section */}
          <h1 className="header-xxl animate-appear-fast font-medium sm:mb-2">{t('hero.title')}</h1>
          <h2 className="header-base mb-2 animate-appear-medium font-medium">
            {t('hero.subtitle')}
          </h2>
          <p
            className="my-6 w-full animate-appear-slow text-base sm:my-10 sm:text-xl 
              md:w-[30rem] lg:w-[34rem] xl:w-[50rem]"
          >
            {t('hero.textContent')}
          </p>

          {/* about me button */}
          <button
            data-testid="about-me-button"
            aria-label="about me"
            className="text-slate-xl group mb-6 flex animate-appear-slow items-center 
              justify-center gap-4 text-lg sm:mb-10 sm:text-xl"
          >
            <span className="animate-bottom-border group-hover:after:w-full group-focus:after:w-full">
              {t('hero.aboutMe')}
            </span>
            <FaArrowRight
              className="text-slate-xl text-xl group-hover:text-green 
                group-focus:text-green sm:text-2xl"
            />
          </button>

          {/* some icons */}
          <div
            data-testid="some-links-desktop-container"
            className="hidden animate-appear-slow gap-10 sm:flex"
          >
            {someLinks.map((sl) => (
              <IconLink key={sl.label} {...sl} hoverColor={'green'} />
            ))}
          </div>
        </div>

        {/* signature */}
        <div>
          <Signature className="h-[3rem] animate-appear-slow fill-green sm:h-20" />
        </div>
      </div>
      {/* hero image */}
      <img data-testid="hero-image" className="hero-image peer" src={jonas} alt="jonas" />
      {/* hero image outline */}
      <Outline
        data-testid="hero-image-outline"
        className="hero-image sm:peer-hover:!fill-slate-xl 
          sm:peer-hover:!stroke-slate-xl !z-0 translate-x-2 translate-y-1 
          !fill-green !stroke-green sm:translate-x-3 sm:peer-hover:translate-x-6"
      />
    </header>
  );
};

export default Hero;
