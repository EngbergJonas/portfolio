import { render } from '@testing-library/react';
import { FaInstagram } from 'react-icons/fa6';
import IconLink from '../IconLink';

describe('IconLink', () => {
  it('renders all the elements', async () => {
    const { getByTestId } = render(
      <IconLink
        Icon={FaInstagram}
        href="https://engbergjonas.github.io/portfolio/"
        label="test link"
        color="test-color"
      />,
    );
    const iconLink = getByTestId('icon-link') as HTMLAnchorElement;

    expect(iconLink).toBeInTheDocument();
    expect(iconLink.href).toBe('https://engbergjonas.github.io/portfolio/');
    expect(iconLink.target).toBe('_blank');
    expect(iconLink.rel).toBe('noreferrer');

    const iconLinkIcon = getByTestId('test link');

    expect(iconLinkIcon.classList.contains('text-test-color')).toBeTruthy();
    expect(iconLinkIcon.classList.contains('text-2xl')).toBeTruthy();
  });
});
