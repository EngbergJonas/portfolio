import { navigationLinks } from '../../utils/common';
import NavigationItem from './NavigationItem';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import { useLocation } from 'react-router-dom';
import Settings from './Settings';
import useWindowDimensions from '../../hooks/useWindowDimensions';

// Breakpoint for adding some margin between the hr and the other nav items when they collide
const MARGIN_BREAKPOINT = 720;

const MobileNavigation = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();
  const { height } = useWindowDimensions();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () =>
    setIsMenuOpen((current) => {
      document.body.style.overflow = !current ? 'hidden' : 'visible';
      return !current;
    });

  // Close menu if path changes
  useEffect(() => {
    if (pathname && isMenuOpen) {
      toggleMenu();
    }
  }, [pathname]);

  // Close menu if 'escape' key is pressed and focus the menu button
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        toggleMenu();
        menuButtonRef?.current?.focus();
      }
    };

    window.addEventListener('keydown', closeOnEsc);

    return () => window.removeEventListener('keydown', closeOnEsc);
  }, [isMenuOpen]);

  return (
    <>
      {/* toggle menu button */}
      <div data-testid="mobile-navigation-button-container" className="z-50 flex sm:hidden">
        <MenuButton
          ref={menuButtonRef}
          label="open navigation"
          onClick={toggleMenu}
          defaultOpen={isMenuOpen}
        />
      </div>
      {/* menu */}
      {isMenuOpen && (
        <div
          data-testid="mobile-navigation"
          className="fixed right-0 top-0 h-[100dvh] w-full overflow-scroll bg-navy p-10 pt-14"
        >
          <div className="flex min-h-full w-full flex-col justify-evenly">
            <ul className="flex h-full flex-col gap-8">
              {navigationLinks.map(({ label, to }) => (
                <NavigationItem key={label} label={t(`navigation.${label}`)} to={to} />
              ))}
            </ul>
            <hr className={`border-navy-xl ${height < MARGIN_BREAKPOINT ? 'my-8' : ''}`} />
            <Settings />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
