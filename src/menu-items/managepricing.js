// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};



const managepricing = {
  id: 'managepricing',
  type: 'group',
  children: [
    {
      id: 'pricing',
      title: 'Manage Pricing',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'set-pricing',
          title: 'Set Pricing',
          type: 'item',
          url: '/set-pricing',
          // target: true
        },
        // {
        //   id: 'submit-course',
        //   title: 'Approve Submits',
        //   type: 'item',
        //   url: '/submit-courses',
        // //   target: true
        // }
      ]
    }
  ]
  
};


export default managepricing;