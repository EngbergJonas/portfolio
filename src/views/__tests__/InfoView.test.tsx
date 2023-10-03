import { render } from '@testing-library/react';
import InfoView from '../InfoView';

describe('InfoView', () => {
  it('renders InfoView elements', () => {
    const { getByTestId, getByText } = render(<InfoView />);
    expect(getByTestId('info-view')).toBeInTheDocument();
    expect(getByText('info.title')).toBeInTheDocument();
  });
});
