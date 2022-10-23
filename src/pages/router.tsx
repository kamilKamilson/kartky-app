import { createBrowserRouter } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import authRouter from './Auth/routes';

const router = createBrowserRouter([
  ...authRouter,
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
