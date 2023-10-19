import { FC, useEffect, useState } from 'react';

interface MenuButtonProps {
  onClick: () => void;
  label: string;
  size?: 'sm' | 'md';
  defaultOpen?: boolean;
  animate?: boolean;
}

const MenuButton: FC<MenuButtonProps> = ({ defaultOpen, onClick, label, size, animate }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Keep open up to date with the passed open props
  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  const handleClick = () => {
    onClick();
    if (animate !== false) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <button
      data-testid={`menu-button-${isOpen ? 'open' : 'closed'}`}
      aria-label={label}
      onClick={handleClick}
      className={`relative flex cursor-pointer items-center justify-end 
      transition-all duration-500 ${size === 'sm' ? 'h-6 w-6' : 'h-10 w-10'}`}
    >
      <div
        data-testid="burger"
        className={`h-[3px] w-[85%] rounded-md transition-all 
        duration-500 before:absolute before:right-0 before:mx-auto before:h-[3px] 
        before:w-full before:-translate-y-3 before:rounded-md before:bg-green 
        before:transition-all before:duration-500 before:content-[''] after:absolute 
        after:right-0 after:mx-auto after:h-[3px] after:translate-y-3 after:rounded-md 
        after:bg-green after:transition-all after:duration-500 after:content-[''] 
        ${isOpen ? 'menu-burger-open' : 'menu-burger-closed'}`}
      />
    </button>
  );
};

export default MenuButton;
