import { act, render } from '@testing-library/react';
import { user } from '../../../utils/testUtils';
import MenuButton from '../MenuButton';

const ui = <MenuButton onClick={() => null} label={'test-menu-button'} />;

describe('MenuButton', () => {
  it('renders all the elements a', () => {
    const { getByTestId, getByLabelText } = render(ui);

    expect(getByTestId('menu-button-closed')).toBeInTheDocument();
    expect(getByTestId('burger')).toBeInTheDocument();
    expect(getByLabelText('test-menu-button')).toBeInTheDocument();
  });

  it('is closed by default', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('menu-button-closed')).toBeInTheDocument();
  });

  it('is opened if the defaultOpen prop is given', () => {
    const { getByTestId } = render(
      <MenuButton onClick={() => null} label={'test-menu-button'} defaultOpen={true} />,
    );

    expect(getByTestId('menu-button-open')).toBeInTheDocument();
    expect(getByTestId('menu-button-open')).toHaveAttribute('aria-expanded', 'true');
  });

  it('is medium sized by default', () => {
    const { getByTestId } = render(ui);

    expect(getByTestId('menu-button-closed').classList.contains('h-8')).toBeTruthy();
  });

  it('changes the opened state when clicked', async () => {
    const { getByTestId } = render(ui);

    await act(async () => await user.click(getByTestId('menu-button-closed')));

    expect(getByTestId('menu-button-open')).toBeInTheDocument();
  });

  it("doesn't change the opened state if animate prop is false", async () => {
    const { getByTestId } = render(
      <MenuButton onClick={() => null} label={'test-menu-button'} animate={false} />,
    );

    await act(async () => await user.click(getByTestId('menu-button-closed')));

    expect(getByTestId('menu-button-closed')).toBeInTheDocument();
  });
});
