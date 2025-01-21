// assets
import { IconKey , IconUserCheck , IconCashOff } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconUserCheck,
  IconCashOff
};



const manageReports = {
  id: 'manageReports',
  type: 'group',
  children: [
    {
      id: 'refunds',
      title: 'Manage Reports',
      type: 'collapse',
      icon: icons.IconCashOff,

      children: [
        {
          id: 'reports',
          title: 'Instructor Revenue Report',
          type: 'item',
          url: '/reports'
        },     
       
      ]
    }
  ]
  
};


export default manageReports;