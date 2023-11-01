import { BrowserRouter } from 'react-router-dom';
import MobileNavigation from '../MobileNavigation';
import { render } from '@testing-library/react';

const ui = (
  <BrowserRouter>
    <MobileNavigation />
  </BrowserRouter>
);
describe('DesktopNavigation', () => {
  it('renders the desktop navigation button', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('mobile-navigation-button-container')).toBeInTheDocument();
    expect(getByTestId('menu-button-closed')).toHaveAttribute('aria-label', 'open navigation');
  });
});
