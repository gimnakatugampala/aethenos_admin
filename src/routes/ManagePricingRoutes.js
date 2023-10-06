import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const ManagePricing = Loadable(lazy(() => import('views/manage-pricing/ManagePricing')));





// ==============================|| MAIN ROUTING ||============================== //

const ManagePricingRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/set-pricing',
      element: <ManagePricing />
    }
  ]
};

export default ManagePricingRoutes;
