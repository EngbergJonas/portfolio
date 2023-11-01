import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';

const ui = (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);
describe('Navigation', () => {
  it('renders the navbar', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('navigation')).toBeInTheDocument();
  });

  it('renders the mobile navigation', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('menu-button-closed')).toBeInTheDocument();
  });

  it('renders the desktop navigation', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('desktop-navigation')).toBeInTheDocument();
  });

  it('renders the logo', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('logo')).toBeInTheDocument();
  });
});
