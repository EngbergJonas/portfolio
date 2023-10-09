import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routesConfig } from './utils/routesConfig';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={createBrowserRouter(routesConfig, { basename: '/portfolio' })} />,
);
