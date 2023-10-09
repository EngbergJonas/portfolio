import { IconType } from 'react-icons';
import { languages } from '../utils/common';

export type Language = (typeof languages)[number];

export interface IconLinkProps {
  Icon: IconType;
  label: string;
  href: string;
  color?: string;
  hoverColor?: string;
}
