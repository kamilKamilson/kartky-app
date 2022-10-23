import { Auth } from './Auth';
import Login from './Login/Login';

const router = [
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <>register</>
      }
    ]
  }
];

export default router;
