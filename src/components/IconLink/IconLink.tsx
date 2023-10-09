import { FC, useMemo } from 'react';
import { IconLinkProps } from '../../interfaces/common';

/**
 * Pass colors from tailwind
 */
const IconLink: FC<IconLinkProps> = ({ Icon, label, href, color, hoverColor }) => {
  const colorClass = useMemo(() => (color ? `text-${color}` : ''), [color]);
  const hoverColorClass = useMemo(
    () => (hoverColor ? `hover:text-${hoverColor} group-focus:text-${hoverColor}` : ''),
    [hoverColor],
  );
  return (
    <a
      data-testid="icon-link"
      className="group"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <Icon data-testid={label} className={`text-2xl ${colorClass} ${hoverColorClass}`} />
    </a>
  );
};

export default IconLink;
