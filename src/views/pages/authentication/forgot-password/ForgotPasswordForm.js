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
// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import validateEmail from 'commonFunctions/emailValid';


// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';
import ButtonSpinner from 'commonFunctions/loaders/Spinner/ButtonSpinner';
import { ChangeToNewPassword, SendEmailVerficationCode, VerifyCode } from 'api';
import VerificationInput from 'react-verification-input';
import { Input } from 'antd';
import { FormCheck } from 'react-bootstrap';
import ReactCodeInput from "react-code-input"


const inputStyle = {
  fontFamily: 'Arial, sans-serif',
  borderRadius: '8px',
  border: '2px solid #d9d9d9',
  width: '50px',
  height: '50px',
  fontSize: '20px',
  textAlign: 'center',
  margin: '0 5px',
  outline: 'none',
  transition: 'border-color 0.3s, box-shadow 0.3s',
};

const inputFocusStyle = {
  borderColor: '#40a9ff',
  boxShadow: '0 0 5px rgba(64, 169, 255, 0.5)',
};

const ForgotPasswordForm = () => {

    
    const [email, setemail] = useState("")

    const [btnLoading, setbtnLoading] = useState(false)
    const [showVerificationInputs, setshowVerificationInputs] = useState(false)

    const [codeSuccess, setcodeSuccess] = useState(false)

    const [VerficationCode, setVerficationCode] = useState("")

    const [password, setpassword] = useState("")
    const [conPassword, setconPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);


      const onFinish = (e) => {
        console.log(email)

        e.preventDefault()

        setbtnLoading(true)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            // console.log("Invalid email:", email);
            setbtnLoading(false)
            ErrorAlert("Error","Please enter a valid email")
            return
        }

        SendEmailVerficationCode(email,setbtnLoading,setshowVerificationInputs)


    }

    const handleSubmit = (e) =>{
        e.preventDefault()

      console.log(VerficationCode)

      if(VerficationCode.length < 5){
        ErrorAlert("Error","Verification code is incomplete")
        return
      }

      VerifyCode(VerficationCode,email,setcodeSuccess,setbtnLoading)
    }


    const handleChangePassword = (e) =>{

        e.preventDefault()

      if(password == ""){
        ErrorAlert("Error","Please enter password")
        return
      }else if(conPassword == ""){
        ErrorAlert("Error","Please enter confirm password")
        return
      }else if(password != conPassword){
        ErrorAlert("Error","Password do not match")
        return
      }

      ChangeToNewPassword(VerficationCode,email,conPassword,setbtnLoading)

    }


  return (
    <div>
        <h2>Forgot Password</h2>

    {showVerificationInputs ? (
         codeSuccess ? (
          

            <>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type={showPassword ? "text" : "password"}  value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type={showPassword ? "text" : "password"}  value={conPassword} onChange={(e) => setconPassword(e.target.value)}  placeholder="Enter Confirm Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlCheckbox1">
            <FormCheck 
              type="checkbox" 
              label="Show Password" 
              checked={showPassword} 
              onChange={(e) => setShowPassword(e.target.checked)}
            />
          </Form.Group>
      
            
              {btnLoading ? (

                  <Button
                  disableElevation  fullWidth size="large"  variant="contained" color="secondary"
                  >
                  <ButtonSpinner />
                  </Button>

              ) : (
            <Button
           disableElevation onClick={handleChangePassword} fullWidth size="large" type="submit" variant="contained" color="secondary"
                >
                  Change Password
                </Button>
              )}
              
            </>
              
 
        
          ) : (
          <>
              <p className="m-0 p-0">Verification code sent successfully. Please check your email</p>

              <div className="d-flex justify-content-center my-4">
                  {/* <VerificationInput value={VerficationCode} onChange={(e) => setVerficationCode(e)} length={5} className="mx-auto text-center" /> */}
                  <ReactCodeInput  inputStyle={inputStyle}
        inputFocusStyle={inputFocusStyle} value={VerficationCode} onChange={(e) => setVerficationCode(e)}  className="mx-auto text-center" type='number' fields={5} />
              </div>
              {btnLoading ? (
                  <Button
                 disableElevation  fullWidth size="large" type="submit" variant="contained" color="secondary"
                  >
                  <ButtonSpinner />
                  </Button>
              ) : (
                <Button
                onClick={handleSubmit}
                    disableElevation  fullWidth size="large" type="submit" variant="contained" color="secondary"
                  >
                    Verify
                  </Button>
              )}
          </>
          )
    ) : (
        <>
        <p>Enter your Aethenos Account email address.</p>
        <Form
         onSubmit={onFinish}
         >
    
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="name@example.com" />
            </Form.Group>
    
         
    
            <Box sx={{ mt: 2 }}>
                {btnLoading ? (
                <Button disableElevation  fullWidth size="large"  variant="contained" color="secondary">
                    <ButtonSpinner />
                </Button>
                ) : (
                    <AnimateButton >
                    <Button disableElevation  fullWidth size="large" type="submit" variant="contained" color="secondary">
                        Next
                    </Button>
                    </AnimateButton>
                )}
                </Box>
    
            </Form>
        </>
    )}


            <div className='text-center my-3'>
            <a className="text-danger text-decoration-none" href="/login"><b>Return to Login</b></a>
            </div>
    </div>
  )
}

export default ForgotPasswordForm