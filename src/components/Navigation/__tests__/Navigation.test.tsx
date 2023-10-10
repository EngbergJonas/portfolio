import { render } from '@testing-library/react';
import Navigation from '../Navigation';

describe('Navigation', () => {
  it('renders the navbar', () => {
    const { getByTestId } = render(<Navigation />);

    expect(getByTestId('navigation')).toBeInTheDocument();
  });

  it('renders the mobile menu', () => {
    const { getByTestId } = render(<Navigation />);

    expect(getByTestId('mobile-menu')).toBeInTheDocument();
  });
});
