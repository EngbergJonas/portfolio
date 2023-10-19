import { FC, useMemo } from 'react';
import { IconLinkProps } from '../../interfaces/common';

/**
 * Pass colors and size from tailwind (size uses tailwind fontSize)
 */
const IconLink: FC<IconLinkProps> = ({ Icon, label, href, color, hoverColor, size }) => {
  const colorClass = useMemo(() => (color ? `text-${color}` : ''), [color]);

  const textClass = useMemo(() => (size ? `text-${size}` : 'text-2xl'), [size]);

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
      <Icon data-testid={label} className={`${textClass} ${colorClass} ${hoverColorClass}`} />
    </a>
  );
};

export default IconLink;
