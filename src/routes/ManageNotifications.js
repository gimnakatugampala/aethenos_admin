import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


// All Admins
const AllAdmins = Loadable(lazy(() => import('views/manage-admins/all-admins/AllAdmins')));

// Add Admin
const AddAdmin = Loadable(lazy(() => import('views/manage-admins/add-admin/AddAdmin')));


const ViewNotifications = Loadable(lazy(() => import('views/notifications/notificationView')));



// ==============================|| MAIN ROUTING ||============================== //

const ManageAdminRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [ 
    {
      path: '/notifications',
      element: <ViewNotifications />
    }
  ]
};

export default ManageAdminRoutes;
