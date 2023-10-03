import { renderWithRouter } from '../utils/testUtils';

describe('App', () => {
  it('renders App', () => {
    const { getByTestId } = renderWithRouter();
    expect(getByTestId('app-view')).toBeInTheDocument();
  });

  it('renders LanguageHandler', () => {
    const { getByTestId } = renderWithRouter();
    expect(getByTestId('language-handler')).toBeInTheDocument();
  });

  describe('routes', () => {
    it('does not render InfoView if the route is not /info', () => {
      const { queryByTestId } = renderWithRouter();
      expect(queryByTestId('info-view')).not.toBeInTheDocument();
    });

    it('renders InfoView if the route is /info', () => {
      const { getByTestId } = renderWithRouter('info');
      expect(getByTestId('info-view')).toBeInTheDocument();
    });

    it('moves user to ErrorView if an unknown route is given', () => {
      const { getByTestId } = renderWithRouter('does-not-match');
      expect(getByTestId('error-view')).toBeInTheDocument();
    });
  });
});
