// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};



const manageadmins = {
  id: 'manageadmins',
  type: 'group',
  children: [
    {
      id: 'pricing',
      title: 'Manage Admins',
      type: 'collapse',
      icon: icons.IconKey,

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