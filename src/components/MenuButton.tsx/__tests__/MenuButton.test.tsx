import { act, render } from '@testing-library/react';
import { user } from '../../../utils/testUtils';
import MenuButton from '../MenuButton';

describe('MenuButton', () => {
  it('renders all the elements a', () => {
    const { getByTestId, getByLabelText } = render(
      <MenuButton onClick={() => null} label={'test-menu-button'} />,
    );

    expect(getByTestId('menu-button')).toBeInTheDocument();
    expect(getByTestId('burger')).toBeInTheDocument();
    expect(getByLabelText('test-menu-button')).toBeInTheDocument();
  });

  it('has the closed css class by default', () => {
    const { getByTestId } = render(<MenuButton onClick={() => null} label={'test-menu-button'} />);

    expect(getByTestId('menu-button').classList.contains('menu-button')).toBeTruthy();
    expect(getByTestId('menu-button').classList.contains('menu-button-open')).toBeFalsy();
  });

  it('toggles the open css class when clicked', async () => {
    const { getByTestId } = render(<MenuButton onClick={() => null} label={'test-menu-button'} />);

    await act(async () => await user.click(getByTestId('menu-button')));

    expect(getByTestId('menu-button').classList.contains('menu-button')).toBeFalsy();
    expect(getByTestId('menu-button').classList.contains('menu-button-open')).toBeTruthy();
  });
});
