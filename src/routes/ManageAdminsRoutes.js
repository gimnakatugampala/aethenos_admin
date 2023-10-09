import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


// All Admins
const AllAdmins = Loadable(lazy(() => import('views/manage-admins/all-admins/AllAdmins')));

// Add Admin
const AddAdmin = Loadable(lazy(() => import('views/manage-admins/add-admin/AddAdmin')));






// ==============================|| MAIN ROUTING ||============================== //

const ManageAdminRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/all-admins',
      element: <AllAdmins />
    },
    {
      path: '/add-admin',
      element: <AddAdmin />
    }
  ]
};

export default ManageAdminRoutes;
