import React, { useState ,useMemo } from 'react'
import './SubmittedCourses.css'
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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { MaterialReactTable } from 'material-react-table';

const data = [
    {
      id:"01",
      title: 'Photoshop C6',
      category: 'IT & Software',
      instructor: 'Gimna Katugampala',
      actions: `33`
    },
    {
      id:"01",
      title: 'Photoshop C6',
      category: 'IT & Software',
      instructor: 'Gimna Katugampala',
      actions: `00`
    },
  ];

const SubmittedCourses = () => {

    const [show, setShow] = useState(false);
    const [showDisapprove, setshowDisapprove] = useState(false)
    const [key, setKey] = useState('intended-learners');
    
    
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    const handleDisapproveShow = () => setshowDisapprove(true)
    const handleDisapproveClose = () => setshowDisapprove(false)
    
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id', //access nested data with dot notation
        header: 'ID',
        size: 100,
      },
      {
        accessorKey: 'title',
        header: 'Course Title',
        size: 200,
      },
      {
        accessorKey: 'category', //normal accessorKey
        header: 'Course Category',
        size: 250,
      },
      {
        accessorKey: 'instructor',
        header: 'Instrutor',
        size: 250,
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        size: 300,
        Cell: ({ cell }) => (
          <>
          <Button onClick={handleShow} className='mx-1' variant="primary"><RemoveRedEyeIcon /></Button>
          <Button onClick={approveDraftCourse} className='mx-1' variant="success"><CheckIcon /></Button>
          <Button onClick={handleDisapproveShow} className='mx-1' variant="danger"><CloseIcon /></Button>
          </>
        ),
      },
    ],
    [],
  );

  const approveDraftCourse = () =>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Approve it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Approved!',
          'Course has been Approved.',
          'success'
        )
      }
    })

  }

  const disapproveDraftCourse = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, disaprove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Disaproved!',
          'Course has been Disaproved.',
          'success'
        )
      }
    })
  }

  return (
    <>
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
    <Typography variant="h2" gutterBottom>
        Approve Submitted Courses
      </Typography>

      <MaterialReactTable columns={columns} data={data} />
  
    </CardContent>
  </Card>

    {/* View Course */}
    <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Course Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="intended-learners" title="Intended Learners">
        Tab content for Intended Learners
      </Tab>

      <Tab eventKey="curriculum" title="Curriculum">
        Tab content for Curriculum
      </Tab>

      <Tab eventKey="course-landing-page" title="Course Landing Page">
        Tab content for Course Landing Page
      </Tab>

      <Tab eventKey="pricing" title="Pricing">
        Tab content for Pricing
      </Tab>

      <Tab eventKey="course-messages" title="Course Messages">
        Tab content for Course Messages
      </Tab>

      <Tab eventKey="promotions" title="Promotions">
        Tab content for Promotions
      </Tab>
     
    </Tabs>
          
 </Modal.Body>

    </Modal>

{/* Disaprove */}
  <Modal show={showDisapprove} onHide={handleDisapproveClose}>
      <Modal.Header closeButton>
        <Modal.Title>Disaprove Course</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Admin Remark</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
       </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={disapproveDraftCourse}>
          Disaprove
        </Button>
        <Button variant="secondary" onClick={handleDisapproveClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default SubmittedCourses