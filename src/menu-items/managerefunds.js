// assets
import { IconKey , IconUserCheck , IconCashOff } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconUserCheck,
  IconCashOff
};



const managerefunds = {
  id: 'managerefunds',
  type: 'group',
  children: [
    {
      id: 'refunds',
      title: 'Manage Refunds',
      type: 'collapse',
      icon: icons.IconCashOff,

      children: [
        {
          id: 'refunds',
          title: 'Pending refunds',
          type: 'item',
          url: '/refunds'
        },
        {
          id: 'refunds',
          title: 'Completed refunds',
          type: 'item',
          url: '/completed-refunds'
        }
       
      ]
    }
  ]
  
};


export default managerefunds;