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
import { GellAllDraftCourses } from 'api';
import MaterialTable from 'material-table';
import { FILE_PATH } from 'commonFunctions/FilePaths';
import 'video-react/dist/video-react.css'; // import css
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';
import { useEffect } from 'react';
import { ApproveDraftCourse } from 'api';
import { DisapproveDraftCourse } from 'api';


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
    actions: `00`
  },
];

let coursesData = []

const DraftCourses = () => {

  // Material 5 table
  const [show, setShow] = useState(false);
  const [showDisapprove, setshowDisapprove] = useState(false)
  

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDisapproveShow = () => setshowDisapprove(true)
  const handleDisapproveClose = () => setshowDisapprove(false)
  const [VIDEOURL, setVIDEOURL] = useState("")

  const [courses, setcourses] = useState([])

  const [comment, setcomment] = useState("")
  const [ID, setID] = useState("")


  const approveDraftCourse = (code) =>{

    console.log(code)

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

        ApproveDraftCourse(code)

        // Swal.fire(
        //   'Approved!',
        //   'Course has been Approved.',
        //   'success'
        // )
      }
    })

  }

  const disapproveDraftCourse = () => {

    if(comment == ""){
      ErrorAlert("Empty Field!","Please Give a Comment")
      return
    }

    

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
  
        DisapproveDraftCourse(ID,comment,setshowDisapprove,setcomment)
      }
    })
  }

  useEffect(() => {

    setTimeout(() => {
      
      GellAllDraftCourses(setcourses)
  
      coursesData = courses.map(course => {
        // Create a new object with modified property
        return { ...course, 
          courseCategory: course.courseCategory.name,
          instructor: `${course.instructorId.generalUserProfile.firstName} ${course.instructorId.generalUserProfile.lastName}`,
          actions: (
            <>
            <Button onClick={() => {
              setVIDEOURL(course.test_video)
              handleShow()
              }}  variant="warning"><PlayCircleIcon /></Button>
            <Button onClick={() => approveDraftCourse(course.code)}  variant="success"><CheckIcon /></Button>
            <Button onClick={() => {
              setID(course.code)
              handleDisapproveShow()}}  variant="danger"><CloseIcon /></Button>
            </>
          )
         };
    })
    }, 1000);


  // coursesData(modifiedArray)

  }, [coursesData])
  

  return (
    <>
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
    <Typography variant="h2" gutterBottom>
        Approve Draft Courses
      </Typography>

      <MaterialTable
      title=""
      columns={[
        { title: 'ID', field: 'code' },
        { title: 'Course Title', field: 'courseTitle' },
        { title: 'Course Category', field: 'courseCategory' },
        { title: 'Instrutor', field: 'instructor' },
        { title: 'Actions', field: 'actions' },
      ]}
      data={coursesData}        
      options={{
        exportButton: true
      }}
    />
  
    </CardContent>
  </Card>


  {/* Video */}
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Test Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>

    <Player>
      <source src={`${FILE_PATH}${VIDEOURL}`}/>
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
            <Form.Control onChange={(e) => setcomment(e.target.value)} as="textarea" rows={3} />
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