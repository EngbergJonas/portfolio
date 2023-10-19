import { render } from '@testing-library/react';
import RadioButton from '../RadioButton';

const ui = (
  <RadioButton name="name" defaultChecked="t2" label="Option" value="t1" onChange={() => null} />
);

describe('RadioButton', () => {
  it('renders the RadioButton elements', () => {
    const { getByTestId } = render(ui);

    const label = getByTestId('radio-button-label-t1');

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Option');

    const input = getByTestId('radio-button-input-t1') as HTMLInputElement;

    expect(input.type).toBe('radio');
    expect(input.value).toBe('t1');
    expect(input.name).toBe('name');
    expect(input.checked).toBeFalsy();

    expect(getByTestId('radio-button-span-t1')).toBeInTheDocument();
  });

  it('renders the actual input only for screen readers', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('radio-button-input-t1').classList.contains('sr-only')).toBeTruthy();
  });

  it('renders the radio button with a bullet if type is not given', () => {
    const { getByTestId } = render(ui);

    expect(
      getByTestId('radio-button-span-t1').classList.contains('radio-button-bullet'),
    ).toBeTruthy();
  });

  it("renders the radio button with a checkmark if type === 'checkmark'", () => {
    const { getByTestId } = render(
      <RadioButton
        name="name"
        defaultChecked="t2"
        label="Option"
        value="t1"
        type="checkmark"
        onChange={() => null}
      />,
    );

    expect(
      getByTestId('radio-button-span-t1').classList.contains('radio-button-checkmark'),
    ).toBeTruthy();
  });

  it('is checked if defaultChecked prop is the buttons value', async () => {
    const { getByTestId } = render(
      <RadioButton
        name="name"
        defaultChecked="t1"
        label="Option"
        value="t1"
        onChange={() => null}
      />,
    );

    const input = getByTestId('radio-button-input-t1') as HTMLInputElement;

    expect(input.checked).toBeTruthy();
  });
});
