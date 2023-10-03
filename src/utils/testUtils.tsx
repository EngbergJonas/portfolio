import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routesConfig } from './routesConfig';

// Custom render function for tests to be able to render the configured routes
export const renderWithRouter = (route = '/') => {
  window.history.pushState({}, 'Test page', route);
  return {
    user: userEvent.setup(),
    ...render(<RouterProvider router={createBrowserRouter(routesConfig)} />),
  };
};
