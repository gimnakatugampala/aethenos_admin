import React, { useState ,useMemo } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from 'react-bootstrap/Table';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import './AddAdmin.css'
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';
import validateEmail from 'commonFunctions/emailValid';
import { AddAdminAPI } from 'api';

const AddAdmin = () => {

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [conpassword, setconpassword] = useState("")
    const [user_type, setuser_type] = useState("")


    const handleSaveAdmin = (e) =>{
        e.preventDefault();

        console.log(firstname)
        console.log(lastname)
        console.log(email)
        console.log(password)
        console.log(user_type)

        if(firstname == "" || lastname == "" || email == "" || password == "" || conpassword == "" || user_type == ""){
            ErrorAlert("Empty Fields","Please Fill All Fields")
            return
        }else if(!validateEmail(email)){
            ErrorAlert("Invalid Email","Please Enter a Valid Email")
            return
        }else if (password != conpassword){
            ErrorAlert("Password Error","Passwords Do not Match")
            return
        }else{
            AddAdminAPI(firstname,lastname,email,conpassword,user_type)
        }
    }   

  return (
    <div>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography variant="h2" gutterBottom>
                Add Admin
            </Typography>

                <Form onSubmit={handleSaveAdmin}>
            <div className='row'>
                <div className='col-md-6'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control value={firstname} onChange={(e) => setfirstname(e.target.value)} type="text" placeholder="First Name" />
                    </Form.Group>
                    
                </div>

                <div className='col-md-6'>
                
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control value={lastname} onChange={(e) => setlastname(e.target.value)} type="text" placeholder="Last Name" />
                    </Form.Group>
                    
                </div>

                <div className='col-md-6'>
                
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email" />
                    </Form.Group>
                    
                </div>

                <div className='col-md-6'>
                <Form.Label>Select Admin</Form.Label>
                <Form.Select value={user_type} onChange={(e) => setuser_type(e.target.value)} aria-label="Default select example">
                <option>-- Select Admin --</option>
                <option value="3">Normal Admin</option>
                <option value="4">Super Admin</option>
                </Form.Select>
                </div>
              
                <div className='col-md-6'>
                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                        <Form.Control
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2"><VisibilityIcon /></InputGroup.Text>
                </InputGroup>
                </div>

                <div className='col-md-6'>
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup className="mb-3">
                        <Form.Control
                        value={conpassword}
                        onChange={(e) => setconpassword(e.target.value)}
                        placeholder="Confirm Password"
                        aria-label="Confirm Password"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2"><VisibilityIcon /></InputGroup.Text>
                </InputGroup>
                </div>

                <div className='col-md-6'>
                <Button type='submit' variant="contained">Save</Button>
                </div>

            </div>
                </Form>


        
        
            </CardContent>
        </Card>
    </div>
  )
}

export default AddAdmin