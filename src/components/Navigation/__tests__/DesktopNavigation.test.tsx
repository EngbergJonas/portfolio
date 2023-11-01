import { act, render, waitFor, within } from '@testing-library/react';
import { navigationLinks } from '../../../utils/common';
import { user } from '../../../utils/testUtils';
import DesktopNavigation from '../DesktopNavigation';
import { BrowserRouter } from 'react-router-dom';

describe('DesktopNavigation', () => {
  it('renders the desktop navigation', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <DesktopNavigation />
      </BrowserRouter>,
    );

    expect(getByTestId('desktop-navigation')).toBeInTheDocument();
  });

  it('renders the navigation items', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <DesktopNavigation />
      </BrowserRouter>,
    );

    const desktopNavigationItemsList = getByTestId('desktop-navigation-links');

    navigationLinks.forEach((nl) => {
      const navigationItem = within(desktopNavigationItemsList).getByTestId(
        `navigation-item-navigation.${nl.label}`,
      );

      const navigationLink = within(navigationItem).getByTestId(
        `navigation-link-navigation.${nl.label}`,
      ) as HTMLAnchorElement;

      expect(navigationLink).toHaveAttribute('href', `${nl.to}`);
    });
  });

  it('can use the settings modal', async () => {
    const { getByTestId, queryByTestId, getByLabelText } = render(
      <BrowserRouter>
        <DesktopNavigation />
      </BrowserRouter>,
    );

    // Language modal doesn't exist
    expect(queryByTestId('settings-modal')).toBeNull();

    const settingsModalButton = getByTestId('settings-button');

    // Open language modal
    await act(async () => await user.click(settingsModalButton));

    expect(getByTestId('settings-modal')).toBeInTheDocument();

    // Close language modal
    await act(async () => await user.click(getByLabelText('close settings')));

    // Wait for modal to close (has a 300ms timeout)
    await waitFor(() => expect(queryByTestId('settings-modal')).toBeNull());
  });
});
