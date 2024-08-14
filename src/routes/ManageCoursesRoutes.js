import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// Approve draft courses
const DraftCourses = Loadable(lazy(() => import('views/manage-courses/approve-draft-courses/DraftCourses')));

// Approve Submitted Courses
const SubmittedCourses = Loadable(lazy(() => import('views/manage-courses/approve-submitted-courses/SubmittedCourses')));

// Approve Submitted Courses
const ApproveLectures = Loadable(lazy(() => import('views/manage-courses/approve-lectures/ApproveLectures')));

// All  Courses
const AllCourses = Loadable(lazy(() => import('views/manage-courses/all-courses/AllCourses')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));




// ==============================|| MAIN ROUTING ||============================== //

const ManageCoursesRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/draft-courses',
      element: <DraftCourses />
    },
    {
      path: '/submit-courses',
      element: <SubmittedCourses />
    },
    {
        path: '/approve-lectures',
        element: <ApproveLectures />
      },
      {
          path: '/courses',
          element: <AllCourses />
        }
  ]
};

export default ManageCoursesRoutes;
