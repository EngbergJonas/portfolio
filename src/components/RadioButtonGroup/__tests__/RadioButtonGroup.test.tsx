import { act, render } from '@testing-library/react';
import RadioButtonGroup from '../RadioButtonGroup';
import { user } from '../../../utils/testUtils';

const options = [
  {
    name: 'name',
    value: 'value1',
  },
  {
    name: 'name',
    value: 'value2',
  },
];

const ui = (
  <RadioButtonGroup
    options={options}
    defaultChecked={options[1].value}
    onChange={() => null}
    label="Test radio group"
  />
);

describe('RadioButtonGroup', () => {
  it('renders the radio buttons', () => {
    const { getByTestId } = render(ui);

    options.forEach((o) =>
      expect(getByTestId(`radio-button-label-${o.value}`)).toBeInTheDocument(),
    );
  });

  it('has the defaultChecked prop as the selected radio button and can change checked', async () => {
    const { getByTestId } = render(ui);

    const firstButton = getByTestId(`radio-button-input-${options[0].value}`) as HTMLInputElement;
    const secondButton = getByTestId(`radio-button-input-${options[1].value}`) as HTMLInputElement;

    expect(firstButton.checked).toBeFalsy();
    expect(secondButton.checked).toBeTruthy();

    await act(async () => await user.click(firstButton));

    expect(firstButton.checked).toBeTruthy();
    expect(secondButton.checked).toBeFalsy();
  });

  it('sets the first option as checked if no defaultChecked is given', async () => {
    const { getByTestId } = render(
      <RadioButtonGroup options={options} onChange={() => null} label="Test radio group" />,
    );

    const firstButton = getByTestId(`radio-button-input-${options[0].value}`) as HTMLInputElement;

    expect(firstButton.checked).toBeTruthy();
  });
});
