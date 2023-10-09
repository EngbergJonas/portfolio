import { FC } from 'react';
import { IconLinkProps } from '../../interfaces/common';

const IconLink: FC<IconLinkProps> = ({ Icon, label, href, color }) => {
  return (
    <a data-testid="icon-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <Icon data-testid="icon-link-icon" className={`text-xl ${color ? color : ''}`} />
    </a>
  );
};

export default IconLink;
