import { useTranslation } from 'react-i18next';
import { navigationLinks } from '../../utils/common';
import NavigationItem from './NavigationItem';
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
    <div data-testid="desktop-navigation" className="hidden h-10 justify-center sm:flex">
      {/* nav items */}
      <ul
        data-testid="desktop-navigation-links"
        className="flex h-full items-center gap-10 text-slate-xl"
      >
        {navigationLinks.map(({ label, to }) => (
          <NavigationItem key={label} label={t(`navigation.${label}`)} to={to} />
        ))}
      </ul>
      {/* settings modal open button */}
      <button
        data-testid="settings-button"
        aria-label="open settings menu"
        aria-expanded={isSettingsModalOpen}
        className="group ml-10 flex items-center justify-end"
        onClick={toggleSettingsModal}
      >
        <FaCog
          className="text-[2.25rem] text-green hover:cursor-pointer 
          hover:text-slate-xl group-focus:text-slate-xl"
        />
      </button>
      {/* settings modal */}
      <SettingsModal isOpen={isSettingsModalOpen} toggleModal={toggleSettingsModal} />
    </div>
  );
};

export default DesktopNavigation;
