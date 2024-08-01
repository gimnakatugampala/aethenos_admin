import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import logo from '../../../../assets/images/aethenos_logo.jpg'

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

import ForgotPasswordForm from './ForgotPasswordForm';



const ForgotPassword = () => {

    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper1>
    <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
          <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
            <AuthCardWrapper>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item sx={{ mb: 3 }}>
                  <Link to="#">
                    {/* <Logo /> */}
                    <img width={150} src={logo} alt='Aethenos Logo' />
                  </Link>
                </Grid>
               
                <Grid item xs={12}>
                  <ForgotPasswordForm />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
              
              </Grid>
            </AuthCardWrapper>
          </Grid>
        </Grid>
      </Grid>
      
    </Grid>
  </AuthWrapper1>
  )
}

export default ForgotPassword