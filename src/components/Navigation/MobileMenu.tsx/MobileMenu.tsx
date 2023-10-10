import { useState } from 'react';
import './styles.css';

/**
 * Only visible on mobile devices (before 640px)
 */
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      data-testid="mobile-menu"
      aria-label="open navigation"
      className={isOpen ? 'menu-button-open' : 'menu-button'}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div data-testid="burger" className="menu-button-burger" />
    </button>
  );
};

export default MobileMenu;
