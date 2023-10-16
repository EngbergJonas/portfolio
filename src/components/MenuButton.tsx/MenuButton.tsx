import { FC, useEffect, useState } from 'react';
import './styles.css';

interface MenuButtonProps {
  onClick: () => void;
  label: string;
  defaultOpen?: boolean;
}

const MenuButton: FC<MenuButtonProps> = ({ defaultOpen, onClick, label }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Keep open up to date with the passed open props
  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  const handleClick = () => {
    onClick();
    setIsOpen(!isOpen);
  };

  return (
    <button
      data-testid="menu-button"
      aria-label={label}
      className={isOpen ? 'menu-button-open' : 'menu-button'}
      onClick={handleClick}
    >
      <div data-testid="burger" className="menu-button-burger" />
    </button>
  );
};

export default MenuButton;
