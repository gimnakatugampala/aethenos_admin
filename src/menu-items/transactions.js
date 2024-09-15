// assets
import { IconBrandMastercard } from '@tabler/icons';

// constant
const icons = { IconBrandMastercard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const transactions = {
  id: 'transactions',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Transactions',
      type: 'item',
      url: '/transactions',
      icon: icons.IconBrandMastercard,
      breadcrumbs: false
    }
  ]
};

export default transactions;
