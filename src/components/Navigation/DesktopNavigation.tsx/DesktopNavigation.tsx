import { useTranslation } from 'react-i18next';
import { navigationLinks } from '../../../utils/common';
import NavigationItem from '../NavigationItem';
import LanguageModal from './LanguageModal';
import { useState } from 'react';
import { FaLanguage } from 'react-icons/fa6';

const DesktopNavigation = () => {
  const { t } = useTranslation();

  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  const toggleLanguageModal = () => {
    setIsLanguageModalOpen((current) => {
      // disable scrolling when opening modal
      document.body.style.overflow = !current ? 'hidden' : 'visible';
      return !current;
    });
  };

  return (
    <div className="hidden h-[2.5rem] justify-center sm:flex">
      <ul className="flex h-full items-center gap-10 text-lg text-slate-l">
        {navigationLinks.map(({ label, to }) => (
          <NavigationItem key={label} label={t(`navigation.${label}`)} to={to} />
        ))}
      </ul>
      <button
        data-testid="language-selection-button"
        aria-label="open language selection menu"
        className="group ml-10 flex items-center justify-end"
        onClick={toggleLanguageModal}
      >
        <FaLanguage className="text-5xl hover:cursor-pointer hover:text-green group-focus:text-green" />
      </button>
      <LanguageModal isOpen={isLanguageModalOpen} toggleModal={toggleLanguageModal} />
    </div>
  );
};

export default DesktopNavigation;
