import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const ManagePricing = Loadable(lazy(() => import('views/manage-pricing/ManagePricing')));
const ManageVAT = Loadable(lazy(() => import('views/manage-pricing/ManageVAT')));





// ==============================|| MAIN ROUTING ||============================== //

const ManagePricingRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/set-pricing',
      element: <ManagePricing />
    },{
      path: '/vat-prices',
      element: <ManageVAT />
    }
  ]
};

export default ManagePricingRoutes;
