import React, { useState ,useMemo } from 'react'
import './DraftCourses.css'
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
import { MaterialReactTable } from 'material-react-table';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css



//nested data is ok, see accessorKeys in ColumnDef below
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
    actions: `33`
  },
];
{/* <Button onClick={handleShow} className='mx-1' variant="warning"><PlayCircleIcon /></Button>
<Button onClick={approveDraftCourse} className='mx-1' variant="success"><CheckIcon /></Button>
<Button onClick={handleDisapproveShow} className='mx-1' variant="danger"><CloseIcon /></Button> */}


const DraftCourses = () => {

  // Material 5 table

  const [show, setShow] = useState(false);
  const [showDisapprove, setshowDisapprove] = useState(false)
  

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
          <Button onClick={handleShow} className='mx-1' variant="warning"><PlayCircleIcon /></Button>
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
      confirmButtonText: 'Yes, reject it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Rejected!',
          'Course has been Rejected.',
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
        Approve Draft Courses
      </Typography>

      <MaterialReactTable columns={columns} data={data} />
  
    </CardContent>
  </Card>


  {/* Video */}
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Test Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
          
          </Modal.Body>
    </Modal>

      {/* Disaprove */}
  <Modal show={showDisapprove} onHide={handleDisapproveClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reject Course</Modal.Title>
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
          Reject
        </Button>
        <Button variant="secondary" onClick={handleDisapproveClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>

  </>
  )
}

export default DraftCourses