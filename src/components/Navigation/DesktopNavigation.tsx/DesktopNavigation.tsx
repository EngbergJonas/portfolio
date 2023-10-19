import { useTranslation } from 'react-i18next';
import { navigationLinks } from '../../../utils/common';
import NavigationItem from '../NavigationItem';
import SettingsModal from './SettingsModal';
import { useState } from 'react';
import { FaCog } from 'react-icons/fa';

const DesktopNavigation = () => {
  const { t } = useTranslation();

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen((current) => {
      // disable scrolling when opening modal
      document.body.style.overflow = !current ? 'hidden' : 'visible';
      return !current;
    });
  };

  return (
    <div className="hidden h-[2.5rem] justify-center sm:flex">
      {/* nav items */}
      <ul className="text-slate-xl flex h-full items-center gap-10 text-lg">
        {navigationLinks.map(({ label, to }) => (
          <NavigationItem key={label} label={t(`navigation.${label}`)} to={to} />
        ))}
      </ul>
      {/* settings modal open button */}
      <button
        data-testid="settings-button"
        aria-label="settings menu"
        className="group ml-10 flex items-center justify-end"
        onClick={toggleSettingsModal}
      >
        <FaCog className="text-4xl hover:cursor-pointer hover:text-green group-focus:text-green" />
      </button>
      {/* settings modal */}
      <SettingsModal isOpen={isSettingsModalOpen} toggleModal={toggleSettingsModal} />
    </div>
  );
};

export default DesktopNavigation;
