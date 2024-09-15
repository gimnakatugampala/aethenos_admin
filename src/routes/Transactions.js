import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));


// Pricing
const ManagePricing = Loadable(lazy(() => import('views/manage-pricing/ManagePricing')));

const TransactionsView = Loadable(lazy(() => import('views/transactions/Transactions')));

// Transactions


// ==============================|| MAIN ROUTING ||============================== //

const Transactions = {
  path: '/transactions',
  element: <MainLayout />,
  children: [
    {
      path: '/transactions',
      element: <TransactionsView />
    }
  ]
};

export default Transactions;
