import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const ForgotPassword  = Loadable(lazy(() => import('views/pages/authentication/forgot-password/ForgotPassword')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    }
    // {
    //   path: '/pages/register/register3',
    //   element: <AuthRegister3 />
    // }
  ]
};

export default AuthenticationRoutes;
