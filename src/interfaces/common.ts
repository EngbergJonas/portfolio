import { IconType } from 'react-icons';
import { languages } from '../utils/common';

export type Language = (typeof languages)[number];

export interface IconLinkProps {
  Icon: IconType;
  label: string;
  href: string;
  color?: string;
  hoverColor?: string;
  size?: string;
}

export type ScrollDirection = 'up' | 'down';

export interface NavigationLink {
  to: string;
  label: string;
}

export interface Option {
  name: string;
  value: string;
}
