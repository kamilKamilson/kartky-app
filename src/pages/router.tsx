import { createBrowserRouter } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import authRouter from './Auth/routes';
import dashboardRouter from './Dashboard/routes';

const router = createBrowserRouter([
  ...authRouter,
  ...dashboardRouter,
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
