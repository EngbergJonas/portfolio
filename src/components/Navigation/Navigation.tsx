import { useMemo } from 'react';
import useScrollValues from '../../hooks/useScrollValues';
import MobileMenu from './MobileMenu.tsx/MobileMenu';

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
      return '';
    } else if (scrollDirection === 'down') {
      return 'animate-move-up -translate-y-[100px]';
    } else if (scrollDirection === 'up') {
      return 'animate-move-down';
    }
  }, [scrollDirection, scrollHeight]);

  return (
    <nav
      data-testid="navigation"
      className={`fixed left-0 right-0 top-0 z-50 flex w-full justify-end bg-navy px-6 py-2 ${navigationShadowClass} ${navigationVisibleClass} backdrop-blur-md`}
    >
      <MobileMenu />
    </nav>
  );
};

export default Navigation;
