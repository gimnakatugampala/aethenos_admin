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

const AddAdmin = () => {
  return (
    <div>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography variant="h2" gutterBottom>
                Add Admin
            </Typography>

            <div className='row'>
                <div className='col-md-6'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    </Form>
                </div>

                <div className='col-md-6'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    </Form>
                </div>

                <div className='col-md-6'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    </Form>
                </div>

                <div className='col-md-6'>
                <Form.Label>Select Admin</Form.Label>
                <Form.Select aria-label="Default select example">
                        <option>-- Select Admin --</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Normal Admin</option>
                        </Form.Select>
                </div>

                <div className='col-md-6'>
                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                        <Form.Control
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
                        placeholder="Confirm Password"
                        aria-label="Confirm Password"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2"><VisibilityIcon /></InputGroup.Text>
                </InputGroup>
                </div>

                <div className='col-md-6'>
                <Button variant="contained">Save</Button>
                </div>

            </div>

        
        
            </CardContent>
        </Card>
    </div>
  )
}

export default AddAdmin