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
import { useEffect } from 'react';
import { ActivateAdminAPI, ViewAdminAPI } from 'api';

let adminsData = []

const AllAdmins = () => {

  const [admins, setadmins] = useState([])

  
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '15px',
    width: '40px',
    borderRadius: '25px',
    padding: '0px',
    height: '35px'
  };


  const handledeactive = (id) =>{
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
        ActivateAdminAPI(id)
        // Swal.fire(
        //   'Deactivated!',
        //   'Admin has been Deactivated.',
        //   'success'
        // )
      }
    })
  }

  const handleActive = (id) =>{
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
        ActivateAdminAPI(id)
        // Swal.fire(
        //   'Activated!',
        //   'Admin has been Activated.',
        //   'success'
        // )
      }
    })
  }

  useEffect(() => {
    ViewAdminAPI(setadmins)

    adminsData = admins.map((admin,index) => {
      
      return {
        ...admin,
        index:index+1,
        status: admin.isActive == 1 ? <Chip label="Active" color="success" /> : <Chip label="Inactive" color="error" /> ,
        actions: admin.isActive == 1 ? <div className='d-flex'>
          <Button onClick={() => handledeactive(admin.id)} className='mx-1'  style={buttonStyle} variant="contained"><CloseIcon /></Button></div> : <div className='d-flex'>
          <Button onClick={() => handleActive(admin.id)} className='mx-1'  style={buttonStyle} color="success" variant="contained"><CheckIcon /></Button>
          </div>
      }

    })
    
  }, [adminsData])
  

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
        { title: '#ID', field: 'index' },
        { title: 'First Name', field: 'firstName' },
        { title: 'Last Name', field: 'lastName' },
        { title: 'Email', field: 'email' },
        { title: 'Status', field: 'status' },
        { title: 'Actions', field: 'actions' },
      ]}
      data={adminsData}        
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