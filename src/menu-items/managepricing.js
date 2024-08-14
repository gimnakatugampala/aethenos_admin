// assets
import { IconKey , IconBrandCashapp } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconBrandCashapp
};



const managepricing = {
  id: 'managepricing',
  type: 'group',
  children: [
    {
      id: 'pricing',
      title: 'Manage Pricing',
      type: 'collapse',
      icon: icons.IconBrandCashapp,

      children: [
        {
          id: 'set-pricing',
          title: 'Set Pricing',
          type: 'item',
          url: '/set-pricing',
          // target: true
        },
        {
          id: 'set-vat',
          title: 'Set VAT',
          type: 'item',
          url: '/vat-prices',
          // target: true
        },
        {
          id: 'revenue-prices',
          title: 'Revenue Prices',
          type: 'item',
          url: '/revenue-prices',
          // target: true
        }
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