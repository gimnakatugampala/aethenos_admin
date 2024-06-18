import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const ManageRefundsList = Loadable(lazy(() => import('views/manage-refunds/RefundsList.js')));
const ManageCompletedRefundsList = Loadable(lazy(() => import('views/manage-refunds/CompletedRefundList.js')));





// ==============================|| MAIN ROUTING ||============================== //

const ManageRefundsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/refunds',
      element: <ManageRefundsList />
    },
    {
      path: '/transferred-refunds',
      element: <ManageCompletedRefundsList />
    }
  ]
};

export default ManageRefundsRoutes;
