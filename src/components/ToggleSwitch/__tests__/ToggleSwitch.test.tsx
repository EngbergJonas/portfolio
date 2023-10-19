import { act, render } from '@testing-library/react';
import ToggleSwitch from '../ToggleSwitch';
import { user } from '../../../utils/testUtils';

const ui = <ToggleSwitch onChange={() => null} label={'Test switch'} />;

describe('ToggleSwitch', () => {
  it('renders all the elements a', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('toggle-switch-label')).toHaveTextContent('Test switch');
    expect(getByTestId('toggle-switch-input')).toBeInTheDocument();
    expect(getByTestId('toggle-switch')).toBeInTheDocument();
  });

  it('is not checked by default', () => {
    const { getByTestId } = render(ui);

    expect((getByTestId('toggle-switch-input') as HTMLInputElement).checked).toBeFalsy();
  });

  it('has the input field only for screen readers', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('toggle-switch-input').classList.contains('sr-only')).toBeTruthy();
  });

  it('can be switched', async () => {
    const { getByTestId } = render(ui);

    await act(async () => user.click(getByTestId('toggle-switch-label')));

    expect((getByTestId('toggle-switch-input') as HTMLInputElement).checked).toBeTruthy();
  });
});
