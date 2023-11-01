import { forwardRef, useEffect, useState } from 'react';

interface MenuButtonProps {
  onClick: () => void;
  label: string;
  defaultOpen?: boolean;
  animate?: boolean;
}

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>((props, ref) => {
  const { defaultOpen, onClick, label, animate } = props;

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
      ref={ref}
      data-testid={`menu-button-${isOpen ? 'open' : 'closed'}`}
      aria-label={label}
      onClick={handleClick}
      aria-expanded={isOpen}
      className={`relative flex h-8 w-8 cursor-pointer 
      items-center justify-end transition-all duration-500`}
    >
      <div
        data-testid="burger"
        className={`h-[3px] w-full rounded-md transition-all 
        duration-500 before:absolute before:right-0 before:mx-auto before:h-[3px] 
        before:w-[125%] before:-translate-y-[10px] before:rounded-md before:bg-green 
        before:transition-all before:duration-500 before:content-[''] after:absolute 
        after:right-0 after:mx-auto after:h-[3px] after:translate-y-[10px] after:rounded-md 
        after:bg-green after:transition-all after:duration-500 after:content-[''] 
        ${isOpen ? 'menu-burger-open' : 'menu-burger-closed'}`}
      />
    </button>
  );
});

MenuButton.displayName = 'MenuButton';

export default MenuButton;
