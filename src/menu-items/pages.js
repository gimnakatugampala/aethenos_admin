// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Set Course Pricing',
      type: 'item',
      icon: icons.IconKey,
      url:'/pricing'
    }
  ]
};



export default pages;

// const pages = {
//   id: 'pages',
//   type: 'group',
//   children: [
//     {
//       id: 'authentication',
//       title: 'Set Pricing',
//       type: 'collapse',
//       icon: icons.IconKey,

//       children: [
//         {
//           id: 'pricing',
//           title: 'Set Course Pricing',
//           type: 'item',
//           url: '/pricing',
//           // target: true
//         },
//         // {
//         //   id: 'register3',
//         //   title: 'Register',
//         //   type: 'item',
//         //   url: '/pages/register/register3',
//         //   target: true
//         // }
//       ]
//     }
//   ]
// };