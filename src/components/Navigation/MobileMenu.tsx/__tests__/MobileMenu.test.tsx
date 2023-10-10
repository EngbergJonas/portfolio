import { act, render } from '@testing-library/react';
import { user } from '../../../../utils/testUtils';
import MobileMenu from '../MobileMenu';

describe('MobileMenu', () => {
  it('renders all the elements a', () => {
    const { getByTestId } = render(<MobileMenu />);

    expect(getByTestId('mobile-menu')).toBeInTheDocument();
    expect(getByTestId('burger')).toBeInTheDocument();
  });

  it('has the closed css class by default', () => {
    const { getByTestId } = render(<MobileMenu />);

    expect(getByTestId('mobile-menu').classList.contains('menu-button')).toBeTruthy();
    expect(getByTestId('mobile-menu').classList.contains('menu-button-open')).toBeFalsy();
  });

  it('toggles the open css class when clicked', async () => {
    const { getByTestId } = render(<MobileMenu />);

    await act(async () => await user.click(getByTestId('mobile-menu')));

    expect(getByTestId('mobile-menu').classList.contains('menu-button')).toBeFalsy();
    expect(getByTestId('mobile-menu').classList.contains('menu-button-open')).toBeTruthy();
  });
});
