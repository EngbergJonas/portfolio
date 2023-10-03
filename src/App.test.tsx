import { renderWithRouter } from './utils/testUtils';

describe('App', () => {
  it('renders the front page title', () => {
    const { getByTestId } = renderWithRouter();
    const appView = getByTestId('app-view');
    expect(appView).toBeInTheDocument();
  });

  describe('routes', () => {
    it('does not render the InfoView if the route is not /info', () => {
      const { queryByTestId } = renderWithRouter();
      const infoView = queryByTestId('info-view');
      expect(infoView).not.toBeInTheDocument();
    });

    it('renders the InfoView if the route is /info', () => {
      const { getByTestId } = renderWithRouter('info');
      const infoView = getByTestId('info-view');
      expect(infoView).toBeInTheDocument();
    });

    it('moves the user to the ErrorView if an unknown route is given', () => {
      const { getByTestId } = renderWithRouter('does-not-match');
      const errorView = getByTestId('error-view');
      expect(errorView).toBeInTheDocument();
    });
  });
});
