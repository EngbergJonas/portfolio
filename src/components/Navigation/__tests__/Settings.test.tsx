import { act, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { languages } from '../../../utils/common';
import { user } from '../../../utils/testUtils';
import Settings from '../Settings';

const ui = (
  <BrowserRouter>
    <Settings />
  </BrowserRouter>
);

describe('Settings', () => {
  it('renders the Settings elements', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('settings')).toBeInTheDocument();
    expect(getByTestId('theme-switch-settings')).toBeInTheDocument();
    expect(getByTestId('language-settings')).toBeInTheDocument();
  });

  it('renders all language selections and english as checked', () => {
    const { getByTestId } = render(ui);
    languages.forEach((l) => {
      if (l === 'en') {
        expect((getByTestId(`radio-button-input-${l}`) as HTMLInputElement).checked).toBeTruthy();
      } else {
        expect((getByTestId(`radio-button-input-${l}`) as HTMLInputElement).checked).toBeFalsy();
      }
    });
  });

  it('can change the language', async () => {
    const { getByTestId, rerender } = render(ui);

    // Change language to Finnish
    await act(async () => await user.click(getByTestId('radio-button-label-fi')));

    // Re-render the component since the mocked i18n.language doesn't trigger the useEffect inside LanguageHandler
    rerender(ui);
    expect((getByTestId('radio-button-input-fi') as HTMLInputElement).checked).toBeTruthy();

    // Change language to Swedish
    await act(async () => await user.click(getByTestId('radio-button-label-sv')));

    // Re-render the component since the mocked i18n.language doesn't trigger the useEffect inside LanguageHandler
    rerender(ui);
    expect((getByTestId('radio-button-input-sv') as HTMLInputElement).checked).toBeTruthy();
  });
});
