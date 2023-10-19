import { someLinks } from '../../utils/common';
import IconLink from '../IconLink/IconLink';

/**
 * This banner only appears after the browser crosses the 640px treshold
 */
const MobileBanner = () => {
  return (
    <div
      data-testid="mobile-banner"
      className="fixed bottom-0 left-0 right-0 z-50 flex h-10 w-full 
        items-center justify-evenly bg-navy-d px-10 opacity-90 sm:hidden"
    >
      {someLinks.map((sl) => (
        <IconLink key={sl.label} {...sl} color={'slate-xl'} size={'xl'} />
      ))}
    </div>
  );
};

export default MobileBanner;
