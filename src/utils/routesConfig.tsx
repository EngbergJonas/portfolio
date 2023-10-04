import { Navigate, Outlet } from 'react-router-dom';
import App from '../App';
import { ErrorView, InfoView } from '../views';

// Define app routes here, used by index.tsx and testUtils.tsx
export const routesConfig = [
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorView />,
    // Redirect / to /portfolio, since gh-pages needs the url to be /portfolio
    children: [
      { index: true, element: <Navigate to="/portfolio" replace /> },
      {
        path: 'portfolio',
        element: (
          <>
            <App />
            <Outlet />
          </>
        ),
        children: [
          {
            path: 'info',
            element: <InfoView />,
          },
        ],
      },
    ],
  },
];
