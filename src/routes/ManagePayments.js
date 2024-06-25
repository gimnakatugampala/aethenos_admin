import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


// dashboard routing
const ManagePaymentProcesses = Loadable(lazy(() => import('views/payments/ManagePaymentProcesses')));
const ManageUKBank = Loadable(lazy(() => import('views/payments/ManageUKBank')));

const ManagePayments = {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/paypal-payoneer',
        element: <ManagePaymentProcesses />
      },{
        path: '/uk-bank',
        element: <ManageUKBank />
      }
    ]
  };
  
  export default ManagePayments;