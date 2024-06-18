// assets
import { IconKey , IconBooks } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconBooks
};



const managecourses = {
  id: 'managecourses',
  type: 'group',
  children: [
    {
      id: 'course',
      title: 'Manage Courses',
      type: 'collapse',
      icon: icons.IconBooks,

      children: [
        {
          id: 'draft-course',
          title: 'Test Video',
          type: 'item',
          url: '/draft-courses',
          // target: true
        },
        {
          id: 'submit-course',
          title: 'Approve Submissions',
          type: 'item',
          url: '/submit-courses',
        //   target: true
        },
        // {
        //   id: 'approve-lectures',
        //   title: 'Approve Lectures',
        //   type: 'item',
        //   url: '/approve-lectures',
        // //   target: true
        // },
      ]
    }
  ]
};


export default managecourses;