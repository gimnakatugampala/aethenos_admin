import React, { useState ,useMemo } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from 'react-bootstrap/Table';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { Player } from 'video-react';
import MaterialTable from 'material-table';
import Chip from '@mui/material/Chip';

import 'video-react/dist/video-react.css'; // import css
import './AllAdmins.css'

const AllAdmins = () => {

  const handledeactive = () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Deactivate it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deactivated!',
          'Admin has been Deactivated.',
          'success'
        )
      }
    })
  }

  const handleActive = () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Active it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Activated!',
          'Admin has been Activated.',
          'success'
        )
      }
    })
  }

  return (
    <div>  
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
    <Typography variant="h2" gutterBottom>
        All Admins
      </Typography>

      <MaterialTable
      title="Admins"
      columns={[
        { title: '#ID', field: 'id' },
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name' },
        { title: 'Email', field: 'email' },
        { title: 'Status', field: 'status' },
        { title: 'Actions', field: 'actions' },
      ]}
      data={[
        { id: '001', first_name: 'Baran', last_name: 'John', email: 'john@gmail.com', status: <Chip label="Active" color="success" />, actions:<div className='d-flex'><Button onClick={handledeactive} className='mx-1' variant="contained"><CloseIcon /></Button><Button onClick={handleActive} className='mx-1' color="success" variant="contained"><CheckIcon /></Button></div>},
        { id: '002', first_name: 'Baran', last_name: 'John', email: 'john@gmail.com',status: <Chip label="Inactive" color="error" /> , actions:<div className='d-flex'><Button onClick={handledeactive} className='mx-1' variant="contained"><CloseIcon /></Button><Button onClick={handleActive} className='mx-1' color="success" variant="contained"><CheckIcon /></Button></div>},
      ]}        
      options={{
        search: true
      }}
    />
  
    </CardContent>
  </Card>
  </div>
  )
}

export default AllAdmins