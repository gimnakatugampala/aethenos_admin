import dashboard from './dashboard';
import pages from './pages';
import managecourses from './managecourses';
import managepricing from './managepricing';
import manageadmins from './manageadmins';
import managerefunds from './managerefunds'
import managepayments from './managepayments';
import utilities from './utilities';
import other from './other';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    dashboard,
    managecourses,
    managepricing,
    manageadmins,
    managerefunds,
    managepayments
  ]
};

export default menuItems;
// 
// items: [dashboard, pages, utilities, other]