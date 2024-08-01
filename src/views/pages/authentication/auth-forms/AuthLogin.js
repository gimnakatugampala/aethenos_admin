import { useState } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import MainLoader from 'commonFunctions/loaders/MainLoader/MainLoader';


// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import validateEmail from 'commonFunctions/emailValid';

import { AdminLogin } from 'api';

import Google from 'assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [checked, setChecked] = useState(true);

  const [loading, setloading] = useState(false)

  const [showPassword, setShowPassword] = useState(false);

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(email == ""){

      ErrorAlert("Empty Field!","Please Fill Email Address")

    }else if(!validateEmail(email)){

      ErrorAlert("Invalid Email!","Please Enter a valid Email")

    }else if(password == ""){
      ErrorAlert("Empty Field!","Please Enter  the Password")
    }else{

      // setloading(true)
      AdminLogin(email,password,setloading)

    }

  }


 
  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        {/* <Grid item xs={12}>
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              onClick={googleHandler}
              size="large"
              variant="outlined"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100]
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              Sign in with Google
            </Button>
          </AnimateButton>
        </Grid> */}
        {/* <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              OR
            </Button>

            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid> */}
        {loading && <MainLoader />}
        
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography className='text-center' variant="h2" gutterBottom>Admin Login</Typography>
            <Typography className='text-center' variant="subtitle1">Sign in with Email address</Typography>
          </Box>
        </Grid>
      </Grid>

      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setemail(e.target.value)} type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Label>Password</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={(e) => setpassword(e.target.value)}
          type={showPassword ? 'text': 'password'}
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text onClick={() => setShowPassword(!showPassword)} id="basic-addon2">
        {showPassword ? <VisibilityOff /> : <Visibility />}
        </InputGroup.Text>
      </InputGroup>

      <a className="text-danger text-decoration-none" href="/forgot-password">Forgot Password ?</a>

        <Box sx={{ mt: 2 }}>
              <AnimateButton >
                <Button disableElevation  fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Sign in
                </Button>
              </AnimateButton>
          </Box>

      </Form>

      
    
    </>
  );
};

export default FirebaseLogin;
