import React, { useState ,useMemo, useEffect } from 'react'
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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListGroup from 'react-bootstrap/ListGroup';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MaterialTable from 'material-table'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

import { MaterialReactTable } from 'material-react-table';
import { GetSubmitReview , ApproveSubmittedCourse , DispproveSubmittedCourse } from 'api';
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';


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

const SubmittedCourses = () => {

    const [show, setShow] = useState(false);
    const [showDisapprove, setshowDisapprove] = useState(false)
    const [key, setKey] = useState('intended-learners');

    const [courses, setcourses] = useState([])
    const [comment, setcomment] = useState("")
    const [CODE, setCODE] = useState("")
    
    const countries = [
      { country: "America", currency: "USD" },
      { country: "Australia", currency: "AUD" },
      { country: "Brazil", currency: "BRL" },
      { country: "Canada", currency: "CAD" },
      { country: "Chile", currency: "CLP" },
      { country: "Colombia", currency: "COP" },
      { country: "Egypt", currency: "EGP" },
      { country: "Great Britain", currency: "GBP" },
      { country: "India", currency: "INR" },
      { country: "Indonesia", currency: "IDR" },
      { country: "Israel", currency: "ILS" },
      { country: "Japan", currency: "JPY" },
      { country: "Malaysia", currency: "MYR" },
      { country: "Mexico", currency: "MXN" },
      { country: "Nigeria", currency: "NGN" },
      { country: "Norway", currency: "NOK" },
      { country: "Peru", currency: "PEN" },
      { country: "Philippines", currency: "PHP" },
      { country: "Poland", currency: "PLN" },
      { country: "Romania", currency: "RON" },
      { country: "Russia", currency: "RUB" },
      { country: "Singapore", currency: "SGD" },
      { country: "South Africa", currency: "ZAR" },
      { country: "South Korea", currency: "KRW" },
      { country: "Taiwan", currency: "TWD" },
      { country: "Thailand", currency: "THB" },
      { country: "Turkey", currency: "TRY" },
      { country: "Vietnam", currency: "VND" },
      { country: "European Union", currency: "EUR" },
      { country: "Other Countries", currency: "Unknown" },
    ];
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    const handleDisapproveShow = (code) => {
      setCODE(code)
      setshowDisapprove(true)
    }
    const handleDisapproveClose = () => setshowDisapprove(false)


  const approveDraftCourse = (code) =>{

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

        ApproveSubmittedCourse(code)

        // Swal.fire(
        //   'Approved!',
        //   'Course has been Approved.',
        //   'success'
        // )
      }
    })

  }

  const disapproveDraftCourse = () => {
    console.log()
    console.log(comment)

    if(comment == ""){
      ErrorAlert("Empty Field","Please Enter a Comment")
      return
    }

    if(CODE == ""){
      ErrorAlert("Invalid Course ID","Please Select Course Code")
      return
    }

    
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
   
        DispproveSubmittedCourse(CODE,comment,setshowDisapprove)
      }
    })
  }

  useEffect(() => {
    
    setTimeout(() => {
      
    GetSubmitReview(setcourses)

    coursesData = courses.map((course,index) => {
      // Create a new object with modified property
      return { ...course, 
        index: index + 1,
        courseCategory: course.courseCategory.name,
        instructor: `${course.instructorId.generalUserProfile.firstName} ${course.instructorId.generalUserProfile.lastName}`,
        actions: (
          <>
           <Button size='sm' onClick={handleShow} className='mx-1' variant="primary"><RemoveRedEyeIcon /></Button>
          <Button size='sm' onClick={() => approveDraftCourse(course.code)} className='mx-1' variant="success"><CheckIcon /></Button>
          <Button size='sm' onClick={() => handleDisapproveShow(course.code)} className='mx-1' variant="danger"><CloseIcon /></Button>
          </>
        )
       };
  })
  }, 1000)

  }, [coursesData])
  

  return (
    <>
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
    <Typography variant="h2" gutterBottom>
        Approve Submitted Courses
      </Typography>

  
      <MaterialTable
      title=""
      columns={[
        { title: 'ID', field: 'index' },
        { title: 'Course Title', field: 'courseTitle' },
        { title: 'Course Category', field: 'courseCategory'},
        { title: 'Instrutor', field: 'instructor'},
        { title: 'Actions', field: 'actions'},
      ]}
      data={coursesData}        
      options={{
        exportButton: true
      }}
    />
  
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
        <Typography variant="h4" gutterBottom>
        What will students learn in your course?
        </Typography>

        <ListGroup className='my-3'>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        <Typography variant="h4" gutterBottom>
        What are the requirements or prerequisites for taking your course?
        </Typography>

        <ListGroup className='my-3'>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        <Typography variant="h4" gutterBottom>
        Who is this course for?
        </Typography>

        <ListGroup className='my-3'>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>


      </Tab>

      <Tab eventKey="curriculum" title="Curriculum">

      <div className='p-3'>

      <Card className='p-3 m-2' variant="outlined">
      <Typography variant="h4" gutterBottom>
        Section 1 : Introduction
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lecture 1 : <b>Introduction</b></Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Typography>
          <Card>
          <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              35428820.mp4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                21:25
              </Typography>
            </CardContent>
          </Card>
          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Lecture 2 : <b>Deep Learning</b></Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Typography>
          <Card>
          <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              35428820.mp4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                21:25
              </Typography>
            </CardContent>
          </Card>
          </Typography>


        </AccordionDetails>
      </Accordion>


      </Card>

      <Card className='p-3 m-2' variant="outlined">
      <Typography variant="h4" gutterBottom>
        Section 1 : Introduction
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lecture 1 : <b>Introduction</b></Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Typography>
          <Card>
          <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              35428820.mp4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                21:25
              </Typography>
            </CardContent>
          </Card>
          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Lecture 2 : <b>Deep Learning</b></Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Typography>
          <Card>
          <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              35428820.mp4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                21:25
              </Typography>
            </CardContent>
          </Card>
          </Typography>


        </AccordionDetails>
      </Accordion>


      </Card>

      </div>
      </Tab>

      <Tab eventKey="course-landing-page" title="Course Landing Page">

        <div className='row m-2'>

          <div className='col-md-7'>

            <div className='my-2'>
            <Typography gutterBottom variant="h4" component="div">
                      Language
              </Typography>
              <Typography variant="body2" color="text.secondary">
                English (US)
              </Typography>
            </div>

            <div className='my-2'>
            <Typography gutterBottom variant="h4" component="div">
                      Level
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expert Level
              </Typography>
            </div>

            <div className='my-2'>
              <div className='row'>

                <div className='col-md-6'>
                    <Typography gutterBottom variant="h4" component="div">
                          Category
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    IT & Software
                  </Typography>
                </div>

                <div className='col-md-6'>
                <Typography gutterBottom variant="h4" component="div">
                          Sub Category
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Software Development
                  </Typography>
                </div>
              </div>
      
            </div>

            <div className='my-2'>
            <Typography gutterBottom variant="h4" component="div">
            What is primarily taught in your course?
              </Typography>

              <Typography variant="body2" color="text.secondary">

              <Stack direction="row" spacing={1}>
                <Chip label="Business Fundermentals" variant="outlined" />
                <Chip label="Photoshop" variant="outlined" />
                <Chip label="Graphic Design" variant="outlined" />
              </Stack>

              </Typography>
          </div>


            <div className='my-2'>
            <Typography gutterBottom variant="h4" component="div">
                    Description
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
          </div>
          </div>

            <div className='col-md-5'>
              <Card>

              <Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              </Player>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Introduction To Fiber Optic Cabling
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Computer Networks
                    </Typography>

          
                  </CardContent>
                </Card>
            </div>

        </div>

      </Tab>

      <Tab eventKey="pricing" title="Pricing">
        
      <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">Country</th>
                <th scope="col">Currency</th>
                <th scope="col">Price</th>
                <th scope="col">View Price Range</th>
                <th scope="col">Discount Type</th>
                <th scope="col">Discount Amount</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((countryData, index) => (
                <tr key={index}>
                  <td>{countryData.country}</td>
                  <td>{countryData.currency}</td>
                  <td>
                    3000.00
                  </td>
                  <td>$100-$200</td>
                  <td>
                    By Percentage
                  </td>
                  <td>
                    30.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        
      </Tab>

      <Tab eventKey="course-messages" title="Course Messages">

    <div className='m-3'>
      <Typography variant="h4" gutterBottom>
        Welcome Message
      </Typography>

      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

      </div>


      <div className='m-3'>
      <Typography variant="h4" gutterBottom>
      Congratulations Message
      </Typography>

      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

      </div>

      </Tab>

      <Tab eventKey="promotions" title="Promotions">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CODE1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <h5>Course Description</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</p>

            <div className='row'>
                <div className='col-md-4'>
                  <h6>Discount Type</h6>
                  <p>Percentage</p>
                </div>

                <div className='col-md-4'>
                  <h6>Coupon Amount ($.)</h6>
                  <p>35.00</p>
                </div>

                <div className='col-md-4'>
                  <h6>Expiry Date</h6>
                  <p>9th October 2023</p>
                </div>

            </div>


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>CODE2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        <h5>Course Description</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.</p>

        <div className='row'>
            <div className='col-md-4'>
              <h6>Discount Type</h6>
              <p>Percentage</p>
            </div>

            <div className='col-md-4'>
              <h6>Coupon Amount ($.)</h6>
              <p>35.00</p>
            </div>

            <div className='col-md-4'>
              <h6>Expiry Date</h6>
              <p>9th October 2023</p>
            </div>

        </div>


        </Typography>
        </AccordionDetails>
      </Accordion>
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
            <Form.Control onChange={(e) => setcomment(e.target.value)} as="textarea" rows={3} />
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