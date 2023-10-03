import { Outlet } from 'react-router-dom';
import App from '../App';
import { ErrorView, InfoView } from '../views';

// Define app routes here, used by index.tsx and testUtils.tsx
export const routesConfig = [
  {
    path: '/',
    element: (
      <>
        <App />
        <Outlet />
      </>
    ),
    errorElement: <ErrorView />,
    children: [
      {
        path: '/info',
        element: <InfoView />,
      },
    ],
  },
];
