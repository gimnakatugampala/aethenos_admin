// assets
import { IconKey , IconUserCheck } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconUserCheck
};



const managerefunds = {
  id: 'managerefunds',
  type: 'group',
  children: [
    {
      id: 'refunds',
      title: 'Manage Refunds',
      type: 'collapse',
      icon: icons.IconUserCheck,

      children: [
        {
          id: 'refunds',
          title: 'Refunds',
          type: 'item',
          url: '/refunds'
        }
       
      ]
    }
  ]
  
};


export default managerefunds;