// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};



const managecourses = {
  id: 'managecourses',
  type: 'group',
  children: [
    {
      id: 'course',
      title: 'Manage Courses',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'draft-course',
          title: 'Approve Drafts',
          type: 'item',
          url: '/draft-courses',
          // target: true
        },
        {
          id: 'submit-course',
          title: 'Approve Submits',
          type: 'item',
          url: '/submit-courses',
        //   target: true
        }
      ]
    }
  ]
};


export default managecourses;