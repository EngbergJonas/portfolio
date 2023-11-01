import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { ReactComponent as Outline } from '../../assets/jonas_outline.svg';
import { someLinks } from '../../utils/common';
import IconLink from '../IconLink/IconLink';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header
      data-testid="hero"
      className="h-device max-h-device flex flex-col items-end 
        justify-between overflow-hidden px-8 md:px-16 lg:flex-row xl:px-20"
    >
      <div
        data-testid="hero-info-section"
        className="item-end flex h-auto w-full flex-col pt-32 lg:h-full lg:justify-center lg:pt-0"
      >
        {/* title */}
        <h1 className="title-xl">{t('hero.title')}</h1>
        {/* subtitle */}
        <h2 className="title-lg">{t('hero.subtitle')}</h2>
        {/* info */}
        <p className="mb-6 w-full max-w-[50rem] animate-appear-slow text-base sm:text-lg">
          <Trans i18nKey="hero.textContent" />
        </p>
        {/* about me button */}
        <div>
          <button
            data-testid="about-me-button"
            aria-label="about me"
            className="group mb-8 flex animate-appear-slow items-center gap-4 
              text-lg text-slate-xl sm:text-xl"
          >
            <span
              className="animate-bottom-border group-hover:after:w-full 
                group-focus:after:w-full"
            >
              {t('hero.aboutMe')}
            </span>
            <FaArrowRight
              className="text-xl text-slate-xl group-hover:text-green 
                group-focus:text-green sm:text-2xl"
            />
          </button>
        </div>

        {/* some icons */}
        <div
          data-testid="some-links-container"
          className="hidden animate-appear-slow gap-10 sm:flex"
        >
          {someLinks.map((sl) => (
            <IconLink key={sl.label} {...sl} hoverColor={'green'} />
          ))}
        </div>
      </div>

      <div
        data-testid="hero-outline-container"
        className="flex h-full w-auto items-end justify-end lg:h-[80%]"
      >
        {/* TODO: signature */}
        {/* <Signature className="mb-8 h-12 animate-appear-slow fill-green md:h-16 lg:h-20" /> */}
        <Outline
          data-testid="outline"
          className="peer z-10 h-full translate-y-1 scale-x-[-1] 
          animate-appear-slow !fill-navy-l !stroke-green"
        />
      </div>
    </header>
  );
};

export default Hero;
