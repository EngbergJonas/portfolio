import ReactDOM from 'react-dom/client';
import { /*BrowserRouter,*/ RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routesConfig } from './utils/routesConfig';
import './i18n';
import './index.css';
// import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={createBrowserRouter(routesConfig, { basename: '/portfolio' })} />,
);

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <BrowserRouter basename="portfolio">
//     <App />
//   </BrowserRouter>,
// );
