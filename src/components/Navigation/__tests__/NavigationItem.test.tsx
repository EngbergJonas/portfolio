import { render } from '@testing-library/react';
import NavigationItem from '../NavigationItem';
import { BrowserRouter } from 'react-router-dom';

const label = 'Test';
const to = 'test-route';

const ui = (
  <BrowserRouter>
    <NavigationItem to={to} label={label} />
  </BrowserRouter>
);

describe('NavigationItem', () => {
  it('renders the elements', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId(`navigation-item-${label}`)).toBeInTheDocument();
    expect(getByTestId(`navigation-link-${label}`)).toHaveTextContent(label);
    expect(getByTestId(`navigation-link-${label}`)).toHaveAttribute('href', `/${to}`);
  });
});
