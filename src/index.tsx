import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routesConfig } from './utils/routesConfig';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={createBrowserRouter(routesConfig)} />,
);
