import { act, render } from '@testing-library/react';
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

    expect(getByTestId('menu-button')).toBeInTheDocument();
  });

  it('renders the language select modal', async () => {
    // forced to render app cause the modal needs a background DOM (check src/__mocks__/react-modal.ts)
    const { getByTestId, queryByTestId, getByLabelText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    // Language modal doesn't exist
    expect(queryByTestId('language-selection-modal')).toBeNull();

    const languageSelectionButton = getByTestId('language-selection-button');

    // Open language modal
    await act(async () => await user.click(languageSelectionButton));

    expect(getByTestId('language-selection-modal')).toBeInTheDocument();

    // Close language modal
    await act(async () => await user.click(getByLabelText('close language selection')));

    expect(queryByTestId('language-selection-modal')).toBeNull();
  });
});
