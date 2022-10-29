import { Auth } from './Auth';
import ForgotPassword from './ForgotPassword/ForgotPassword';
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
      },
      {
        path: '/auth/forgot-password',
        element: <ForgotPassword />
      },
      {
        path: '/auth/reset-password',
        element: <>reset password</>
      }
    ]
  }
];

export default router;
