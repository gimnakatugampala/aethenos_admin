import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
      {/* <Logo /> */}
      <img width="150" src="https://images.squarespace-cdn.com/content/v1/61eeb563378df06b48f2c6ce/952c34f0-6274-4755-8fed-f0c5f6e8422c/AETHENOS+%287%29.jpg?format=1500w" />
    </ButtonBase>
  );
};

export default LogoSection;
