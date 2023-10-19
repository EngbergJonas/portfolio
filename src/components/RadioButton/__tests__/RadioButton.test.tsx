import { render } from '@testing-library/react';
import RadioButton from '../RadioButton';
import { user } from '../../../utils/testUtils';

const ui = (
  <RadioButton name="name" targetValue="t2" label="Option" value="t1" onChange={() => 't2'} />
);

describe('RadioButton', () => {
  it('renders the RadioButton elements', () => {
    const { getByTestId } = render(ui);

    const label = getByTestId('radio-button-t1-label');

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Option');

    const input = getByTestId('radio-button-t1-input') as HTMLInputElement;

    expect(input.type).toBe('radio');
    expect(input.value).toBe('t1');
    expect(input.name).toBe('name');
    expect(input.checked).toBeFalsy();

    expect(getByTestId('radio-button-t1-span')).toBeInTheDocument();
  });

  it('renders the actual input only for screen readers', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('radio-button-t1-input').classList.contains('sr-only')).toBeTruthy();
  });

  it('renders the radio button with a bullet if type is not given', () => {
    const { getByTestId } = render(ui);

    expect(
      getByTestId('radio-button-t1-span').classList.contains('radio-button-bullet'),
    ).toBeTruthy();
  });

  it("renders the radio button with a checkmark if type === 'checkmark'", () => {
    const { getByTestId } = render(
      <RadioButton
        name="name"
        targetValue="t2"
        label="Option"
        value="t1"
        type="checkmark"
        onChange={() => 't2'}
      />,
    );

    expect(
      getByTestId('radio-button-t1-span').classList.contains('radio-button-checkmark'),
    ).toBeTruthy();
  });

  it('is checked if target value is the buttons value', async () => {
    const { getByTestId } = render(
      <RadioButton name="name" targetValue="t1" label="Option" value="t1" onChange={() => 't2'} />,
    );

    const input = getByTestId('radio-button-t1-input') as HTMLInputElement;

    expect(input.checked).toBeTruthy();
  });
});
