import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const ManageReportLists = Loadable(lazy(() => import('views/manage-reports/ManageReportLists.js')));
const ManageCompletedRefundsList = Loadable(lazy(() => import('views/manage-refunds/CompletedRefundList.js')));





// ==============================|| MAIN ROUTING ||============================== //

const ManageReportsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/reports',
      element: <ManageReportLists />
    }   
  ]
};

export default ManageReportsRoutes;
