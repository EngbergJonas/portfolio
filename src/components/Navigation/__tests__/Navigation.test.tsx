import { act, render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';
import { user } from '../../../utils/testUtils';
import Navigation from '../Navigation';

describe('Navigation', () => {
  it('renders the navbar', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );

    expect(getByTestId('navigation')).toBeInTheDocument();
  });

  it('renders the mobile menu', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );

    expect(getByTestId('menu-button-closed')).toBeInTheDocument();
  });

  it('renders the language select modal', async () => {
    // forced to render app cause the modal needs a background DOM (check src/__mocks__/react-modal.ts)
    const { getByTestId, queryByTestId, getByLabelText } = render(
      <BrowserRouter>
        <App />
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
