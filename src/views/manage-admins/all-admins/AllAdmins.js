import React, { useState ,useMemo } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from 'react-bootstrap/Button';
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

import 'video-react/dist/video-react.css'; // import css
import './AllAdmins.css'

const AllAdmins = () => {
  return (
    <div>  
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
    <Typography variant="h2" gutterBottom>
        All Admins
      </Typography>

      <MaterialTable
      title="Basic Search Preview"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
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