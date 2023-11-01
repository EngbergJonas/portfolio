import { useMemo } from 'react';
import useScrollValues from '../../hooks/useScrollValues';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
  const { scrollHeight, scrollDirection } = useScrollValues();

  // Set navigation bar shadow if the window isn't scrolled to the top
  const navigationShadowClass = useMemo(
    () => (scrollHeight > 0 ? 'shadow-lg' : ''),
    [scrollHeight],
  );

  // Hide the navigation with an animation if the user is scrolling up,
  // show it with an animation if the user scrolls down
  const navigationVisibleClass = useMemo(() => {
    if (scrollHeight === 0) {
      return 'pt-6 sm:pt-12';
    } else if (scrollDirection === 'down') {
      return 'animate-move-up -translate-y-[100px]';
    } else if (scrollDirection === 'up') {
      return 'animate-move-down';
    }
  }, [scrollDirection, scrollHeight]);

  return (
    <>
      <nav
        data-testid="navigation"
        id="navigation"
        className={`fixed left-0 right-0 top-0 z-50 flex h-[70px] 
        w-full items-center justify-between bg-navy px-8 py-2 backdrop-blur-md md:px-16 
        xl:px-20  ${navigationShadowClass} ${navigationVisibleClass}`}
      >
        <Link
          to="/"
          data-testid="logo"
          aria-label="navigate home"
          className="group z-50 flex h-9 justify-center"
        >
          <Logo className="h-full w-full !fill-green hover:!fill-slate-xl group-focus:!fill-slate-xl" />
        </Link>
        <DesktopNavigation />
        <MobileNavigation />
      </nav>
    </>
  );
};

export default Navigation;
