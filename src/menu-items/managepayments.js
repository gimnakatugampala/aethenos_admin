// assets
import { IconKey , IconBrandCashapp , IconBrandStripe } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconBrandCashapp,
  IconBrandStripe
};



const managepayments = {
  id: 'managepayments',
  type: 'group',
  children: [
    {
      id: 'payments',
      title: 'Manage Payouts',
      type: 'collapse',
      icon: icons.IconBrandStripe,

      children: [
        {
          id: 'payments',
          title: 'Paypal/Payoneer',
          type: 'item',
          url: '/paypal-payoneer',
          // target: true
        },
        {
          id: 'uk-bank',
          title: 'UK Bank',
          type: 'item',
          url: '/uk-bank',
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


export default managepayments;