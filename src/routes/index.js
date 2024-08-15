import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import ManageCoursesRoutes from './ManageCoursesRoutes';
import ManagePricingRoutes from './ManagePricingRoutes';
import ManageAdminRoutes from './ManageAdminsRoutes';
import ManageRefundsRoutes from './ManageRefundsRoutes';
import ManagePayments from './ManagePayments';
import ManageNotifications from './ManageNotifications';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    MainRoutes, 
    AuthenticationRoutes,
    ManageCoursesRoutes,
    ManagePricingRoutes,
    ManageAdminRoutes,
    ManageRefundsRoutes,
    ManagePayments,
    ManageNotifications
  ]);
}
