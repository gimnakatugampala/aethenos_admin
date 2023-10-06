import dashboard from './dashboard';
import pages from './pages';
import managecourses from './managecourses';
import managepricing from './managepricing'
import utilities from './utilities';
import other from './other';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    dashboard,
    managecourses,
    managepricing
  ]
};

export default menuItems;
// 
// items: [dashboard, pages, utilities, other]