import { render } from '@testing-library/react';
import MobileBanner from '../MobileBanner';
import { someLinks } from '../../../utils/common';

describe('MobileBanner', () => {
  it('renders all the elements', async () => {
    const { getByTestId } = render(<MobileBanner />);

    expect(getByTestId('mobile-banner')).toBeInTheDocument();

    someLinks.forEach((sl) => {
      const someLink = getByTestId(sl.label);
      expect(someLink).toBeInTheDocument();
      expect(someLink.classList.contains('text-slate-l')).toBeTruthy();
    });
  });
});
