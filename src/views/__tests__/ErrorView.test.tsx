import { render } from '@testing-library/react';
import ErrorView from '../ErrorView';

describe('ErrorView', () => {
  it('renders ErrorView elements', () => {
    const { getByTestId, getByText } = render(<ErrorView />);
    expect(getByTestId('error-view')).toBeInTheDocument();
    expect(getByText('error.title')).toBeInTheDocument();
  });
});
