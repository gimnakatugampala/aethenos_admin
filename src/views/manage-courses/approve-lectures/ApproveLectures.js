import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from 'react-bootstrap/Button';
import Typography from '@mui/material/Typography';
import MaterialTable from 'material-table';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Table from 'react-bootstrap/Table';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import './ApproveLectures.css'

const ApproveLectures = () => {

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>  
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
    <Typography variant="h2" gutterBottom>
        Approve Lectures
      </Typography>

      <MaterialTable
      title="Approve Lectures List"
      columns={[
        { title: 'Course Title', field: 'course_title' },
        { title: 'Curriculum Title', field: 'curriculum_title' },
        { title: 'Instructor', field: 'instructor' },
        { title: 'Actions', field: 'actions' },
      ]}
      data={[
        { course_title: 'Photoshop', curriculum_title: 'Introduction', instructor: 'Gimna Katugampala',actions:<div className='d-flex'>
          <Button onClick={handleShow} className='mx-1' variant="primary"><VisibilityIcon /></Button>
          <Button className='mx-1' variant="success"><CheckIcon /></Button>
          <Button className='mx-1' variant="danger"><CloseIcon /></Button>
          </div> },
        { course_title: 'PHP Crash Course', curriculum_title: 'Introduction', instructor: 'John Doe',actions:<div className='d-flex'>
          <Button onClick={handleShow} className='mx-1' variant="primary"><VisibilityIcon /></Button>
          <Button className='mx-1' variant="success"><CheckIcon /></Button>
          <Button className='mx-1' variant="danger"><CloseIcon /></Button>
          </div>},
      ]}        
      options={{
        filtering: true
      }}
    />

      </CardContent>

      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Curriculum Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default ApproveLectures