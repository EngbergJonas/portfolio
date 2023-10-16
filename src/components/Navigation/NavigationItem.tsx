import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavigationLink } from '../../interfaces/common';

export const NavigationItem: FC<NavigationLink> = ({ to, label }) => {
  return (
    <li className="flex justify-center">
      <Link className="animate-bottom-border z-10" to={to}>
        {label}
      </Link>
    </li>
  );
};

export default NavigationItem;
