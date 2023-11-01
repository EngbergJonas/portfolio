import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavigationLink } from '../../interfaces/common';

export const NavigationItem: FC<NavigationLink> = ({ to, label }) => {
  return (
    <li
      data-testid={`navigation-item-${label}`}
      className="flex justify-center text-2xl sm:gap-0 sm:text-lg"
    >
      <Link data-testid={`navigation-link-${label}`} className="animate-bottom-border z-10" to={to}>
        {label}
      </Link>
    </li>
  );
};

export default NavigationItem;
