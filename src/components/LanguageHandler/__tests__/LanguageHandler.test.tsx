import { act, render } from '@testing-library/react';
import LanguageHandler from '../LanguageHandler';
import { languages } from '../../../interfaces/languageInterfaces';
import { user } from '../../../utils/testUtils';

describe('LanguageHandler', () => {
  it('renders LanguageHandler and has English as default language', () => {
    const { getByTestId } = render(<LanguageHandler />);
    expect(getByTestId('language-handler')).toBeInTheDocument();
    expect(getByTestId(`language-button-en`).classList.contains('selected')).toBeTruthy();
  });

  it('renders all LanguageButtons', () => {
    const { getByTestId } = render(<LanguageHandler />);
    languages.forEach((l) => {
      expect(getByTestId(`language-button-${l}`)).toBeInTheDocument();
    });
  });

  it('can change the language to Swedish and Finnish', async () => {
    const { getByTestId, rerender } = render(<LanguageHandler />);

    // Change language to Finnish
    await act(async () => await user.click(getByTestId('language-button-fi')));
    // Re-render the component since the mocked i18n.language doesn't trigger the useEffect inside LanguageHandler
    rerender(<LanguageHandler />);
    expect(getByTestId('language-button-fi').classList.contains('selected')).toBeTruthy();

    // Change language to Swedish
    await act(async () => await user.click(getByTestId('language-button-sv')));
    // Re-render the component since the mocked i18n.language doesn't trigger the useEffect inside LanguageHandler
    rerender(<LanguageHandler />);
    expect(getByTestId('language-button-sv').classList.contains('selected')).toBeTruthy();
  });
});
