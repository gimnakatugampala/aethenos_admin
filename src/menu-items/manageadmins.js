// assets
import { IconKey , IconUserCheck } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconUserCheck
};



const manageadmins = {
  id: 'manageadmins',
  type: 'group',
  children: [
    {
      id: 'pricing',
      title: 'Manage Admins',
      type: 'collapse',
      icon: icons.IconUserCheck,

      children: [
        {
          id: 'all-admins',
          title: 'Admins',
          type: 'item',
          url: '/all-admins'
        },
        {
          id: 'add-admin',
          title: 'Add Admin',
          type: 'item',
          url: '/add-admin'
        },
       
      ]
    }
  ]
  
};


export default manageadmins;