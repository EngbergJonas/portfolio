import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { IconLinkProps } from '../interfaces/common';

export const someLinks: Array<IconLinkProps> = [
  {
    Icon: FaInstagram,
    href: 'https://www.instagram.com/engberg_jonas/',
    label: 'instagram link',
  },
  {
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/engbergj/',
    label: 'linkedin link',
  },
  {
    Icon: FaGithub,
    href: 'https://github.com/EngbergJonas/',
    label: 'github link',
  },
];

export const languages = ['en', 'fi', 'sv'] as const;
