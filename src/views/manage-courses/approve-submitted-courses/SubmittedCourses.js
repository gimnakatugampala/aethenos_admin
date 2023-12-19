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
import { GetSubmitReview , ApproveSubmittedCourse , DispproveSubmittedCourse , GetIntendedLeaners , GetCourseLandingPage , GetCountriesListPricing } from 'api';
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';
import { FILE_PATH } from 'commonFunctions/FilePaths';
import formatNumber from 'commonFunctions/NumberFormat';
import getSymbolFromCurrency from 'currency-symbol-map'


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

    const [studentsLearnData, setstudentsLearnData] = useState([])
    const [requirementsData, setrequirementsData] = useState([])
    const [whosData, setwhosData] = useState([])

    const [course_title, setcourse_title] = useState("")
    const [course_subtitle, setcourse_subtitle] = useState("")
    const [course_desc, setcourse_desc] = useState("")
    const [lang, setlang] = useState("")
    const [level, setlevel] = useState("")
    const [course_cat, setcourse_cat] = useState("")
    const [course_sub_cat, setcourse_sub_cat] = useState("")
    const [keywords, setkeywords] = useState([])
    const [course_image, setcourse_image] = useState("")
    const [promo_vid, setpromo_vid] = useState("")
    const [preview_img, setpreview_img] = useState("")
    const [videoSrc , seVideoSrc] = useState("");

    const [countriesData, setcountriesData] = useState([])
    
  
  
    // Show Course Details
    const handleShow = (code) => {
      setShow(true)
      console.log(code)
      GetIntendedLeaners(code,setstudentsLearnData,setrequirementsData,setwhosData)
      GetCourseLandingPage(code,setcourse_title,setcourse_subtitle,setcourse_desc,setpreview_img,seVideoSrc,setkeywords,setcourse_cat,setcourse_sub_cat,setlevel,setlang,setpromo_vid)
      GetCountriesListPricing(code,setcountriesData)
    };

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
           <Button size='sm' onClick={() => handleShow(course.code)} className='mx-1' variant="primary"><RemoveRedEyeIcon /></Button>
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
          {studentsLearnData.length > 0 ? studentsLearnData.map((learn,index) => (
          <ListGroup.Item key={index}>{learn}</ListGroup.Item>
          )) : <p>No Items Available</p>}
        </ListGroup>

        <Typography variant="h4" gutterBottom>
        What are the requirements or prerequisites for taking your course?
        </Typography>

        <ListGroup className='my-3'>
        {requirementsData.length > 0 ? requirementsData.map((req,index) => (
          <ListGroup.Item key={index}>{req}</ListGroup.Item>
          )) : <p>No Items Available</p>}
        </ListGroup>

        <Typography variant="h4" gutterBottom>
        Who is this course for?
        </Typography>

        <ListGroup className='my-3'>
        {whosData.length > 0 ? whosData.map((who,index) => (
          <ListGroup.Item key={index}>{who}</ListGroup.Item>
          )) : <p>No Items Available</p>}
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
                {lang}
              </Typography>
            </div>

            <div className='my-2'>
            <Typography gutterBottom variant="h4" component="div">
                      Level
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {level}
              </Typography>
            </div>

            <div className='my-2'>
              <div className='row'>

                <div className='col-md-6'>
                    <Typography gutterBottom variant="h4" component="div">
                          Category
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course_cat}
                  </Typography>
                </div>

                <div className='col-md-6'>
                <Typography gutterBottom variant="h4" component="div">
                          Sub Category
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course_sub_cat}
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
                {keywords.map((keyword,index) => (
                <Chip key={index} label={keyword} variant="outlined" />
                ))}
              </Stack>

              </Typography>
          </div>


            <div className='my-2'>
            <Typography gutterBottom variant="h4" component="div">
                    Description
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {course_desc}
              </Typography>
          </div>
          </div>

            <div className='col-md-5'>
              <Card>

              <Player>
                <source src={`${FILE_PATH}${videoSrc}`} />
              </Player>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course_title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {course_subtitle}
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
              {countriesData.map((countryData, index) => (
                <tr key={index}>
                  <td>{countryData.country}</td>
                  <td>{countryData.currency}</td>
                  <td>
                    {formatNumber(countryData.value)}
                  </td>
                  <td>{getSymbolFromCurrency(countryData.currency)} {formatNumber(countryData.minPrice)} - {getSymbolFromCurrency(countryData.currency)} {formatNumber(countryData.maxPrice)}</td>
                  <td>
                  {countryData.discountType}
                  </td>
                  <td>
                    {
                      countryData.discountTypeId == 1 ? `${getSymbolFromCurrency(countryData.currency) != null ?  getSymbolFromCurrency(countryData.currency) : '' } ${formatNumber(countryData.value)}` : 
                      countryData.discountTypeId == 2 ? `${getSymbolFromCurrency(countryData.currency) != null ?  getSymbolFromCurrency(countryData.currency) : '' } ${formatNumber((countryData.value) - ((countryData.value * countryData.discountValue)/100))}` :
                      `${getSymbolFromCurrency(countryData.currency) != null ?  getSymbolFromCurrency(countryData.currency) : '' } ${formatNumber((countryData.value) - (countryData.discountValue))}`
                    }
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