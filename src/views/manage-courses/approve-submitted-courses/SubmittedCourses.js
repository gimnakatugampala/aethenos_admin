import React, { useState, useMemo, useEffect } from 'react';
import './SubmittedCourses.css';
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
import MaterialTable from 'material-table';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { MaterialReactTable } from 'material-react-table';
import {
  GetSubmitReview,
  ApproveSubmittedCourse,
  DispproveSubmittedCourse,
  GetIntendedLeaners,
  GetCourseLandingPage,
  GetCountriesListPricing,
  GetCourseMessages,
  GetCurriculum
} from 'api';
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';
import { FILE_PATH } from 'commonFunctions/FilePaths';
import formatNumber from 'commonFunctions/NumberFormat';
import getSymbolFromCurrency from 'currency-symbol-map';
import LaunchIcon from '@mui/icons-material/Launch';
import Badge from 'react-bootstrap/Badge';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import QuizIcon from "@mui/icons-material/Quiz";
import BugReportIcon from "@mui/icons-material/BugReport";
import AssessmentIcon from "@mui/icons-material/Assessment";



let coursesData = [];

const SubmittedCourses = () => {
  const [show, setShow] = useState(false);
  const [showDisapprove, setshowDisapprove] = useState(false);
  const [key, setKey] = useState('intended-learners');

  const [courses, setcourses] = useState([]);
  const [comment, setcomment] = useState('');
  const [CODE, setCODE] = useState('');

  const [studentsLearnData, setstudentsLearnData] = useState([]);
  const [requirementsData, setrequirementsData] = useState([]);
  const [whosData, setwhosData] = useState([]);

  const [course_title, setcourse_title] = useState('');
  const [course_subtitle, setcourse_subtitle] = useState('');
  const [course_desc, setcourse_desc] = useState('');
  const [lang, setlang] = useState('');
  const [level, setlevel] = useState('');
  const [course_cat, setcourse_cat] = useState('');
  const [course_sub_cat, setcourse_sub_cat] = useState('');
  const [keywords, setkeywords] = useState([]);
  const [course_image, setcourse_image] = useState('');
  const [promo_vid, setpromo_vid] = useState('');
  const [preview_img, setpreview_img] = useState('');
  const [videoSrc, seVideoSrc] = useState('');

  const [countriesData, setcountriesData] = useState(null);

  const [welcomemsg, setwelcomemsg] = useState('');
  const [congratsmsg, setcongratsmsg] = useState('');

  const [sectionData, setsectionData] = useState([]);

  const [syllabusData, setsyllabusData] = useState(null)


  // Show Course Details
  const handleShow = (code, content) => {
    setShow(true);
    console.log(code);
    GetIntendedLeaners(code, setstudentsLearnData, setrequirementsData, setwhosData);
    GetCourseLandingPage(
      code,
      setcourse_title,
      setcourse_subtitle,
      setcourse_desc,
      setpreview_img,
      seVideoSrc,
      setkeywords,
      setcourse_cat,
      setcourse_sub_cat,
      setlevel,
      setlang,
      setpromo_vid
    );
    GetCountriesListPricing(code, setcountriesData);
    GetCourseMessages(code, setcongratsmsg, setwelcomemsg);
    GetCurriculum(code, setsectionData);

    setsyllabusData(content)
    console.log(content)



  };

  const handleClose = () => setShow(false);

  const handleDisapproveShow = (code) => {
    setCODE(code);
    setshowDisapprove(true);
  };
  const handleDisapproveClose = () => setshowDisapprove(false);

  const approveDraftCourse = (code) => {
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
        ApproveSubmittedCourse(code);

        // Swal.fire(
        //   'Approved!',
        //   'Course has been Approved.',
        //   'success'
        // )
      }
    });
  };

  const disapproveDraftCourse = () => {
    console.log();
    console.log(comment);

    if (comment == '') {
      ErrorAlert('Empty Field', 'Please Enter a Comment');
      return;
    }

    if (CODE == '') {
      ErrorAlert('Invalid Course ID', 'Please Select Course Code');
      return;
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
        DispproveSubmittedCourse(CODE, comment, setshowDisapprove);
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      GetSubmitReview(setcourses);

      coursesData = courses.map((course, index) => {
        // Create a new object with modified property
        return {
          ...course,
          index: index + 1,
          courseCategory: course.courseCategory.name,
          instructor: `${course.instructorId.generalUserProfile.firstName} ${course.instructorId.generalUserProfile.lastName}`,
          actions: (
            <>
              <Button size="sm" onClick={() => handleShow(course.code, course.course_content)} className="mx-1" variant="primary">
                <RemoveRedEyeIcon />
              </Button>
              <Button size="sm" onClick={() => approveDraftCourse(course.code)} className="mx-1" variant="success">
                <CheckIcon />
              </Button>
              <Button size="sm" onClick={() => handleDisapproveShow(course.code)} className="mx-1" variant="danger">
                <CloseIcon />
              </Button>
            </>
          )
        };
      });
    }, 1000);
  }, [coursesData]);

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
              { title: 'Course Category', field: 'courseCategory' },
              { title: 'Instructor', field: 'instructor' },
              { title: 'Actions', field: 'actions' }
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

          <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">

            <Tab eventKey="intended-learners" title="Target Audience">
              <Typography variant="h4" gutterBottom>
                What will students learn in your course?
              </Typography>

              <ListGroup className="my-3">
                {studentsLearnData.length > 0 ? (
                  studentsLearnData.map((learn, index) => <ListGroup.Item key={index}>{learn}</ListGroup.Item>)
                ) : (
                  <p>No Items Available</p>
                )}
              </ListGroup>

              <Typography variant="h4" gutterBottom>
                What are the requirements or prerequisites for taking your course?
              </Typography>

              <ListGroup className="my-3">
                {requirementsData.length > 0 ? (
                  requirementsData.map((req, index) => <ListGroup.Item key={index}>{req}</ListGroup.Item>)
                ) : (
                  <p>No Items Available</p>
                )}
              </ListGroup>

              <Typography variant="h4" gutterBottom>
                Who is this course for?
              </Typography>

              <ListGroup className="my-3">
                {whosData.length > 0 ? (
                  whosData.map((who, index) => <ListGroup.Item key={index}>{who}</ListGroup.Item>)
                ) : (
                  <p>No Items Available</p>
                )}
              </ListGroup>
            </Tab>

            <Tab eventKey="curriculum" title="Syllabus">
              <div className="p-3">
                {syllabusData != null &&
                  syllabusData.length > 0 &&
                  syllabusData.map((section, index) => (
                    <Card key={index} className="p-3 m-2" variant="outlined">

                      <Typography variant="h4" gutterBottom>
                        Section {index + 1} : {section.section_name}
                      </Typography>

                      {section.section_curriculum_item.map((item, idx) => (
                          <>

                          {/* Video */}
                          {item.curriculum_item_type == 'Lecture' && item.article == "N/A" && (
                          <Accordion key={idx}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                              <Typography>
                              {item.article != "N/A" ? (<FileCopyIcon sx={{ fontSize: 15 }} /> ) : ( <PlayCircleIcon  sx={{ fontSize: 15 }} /> )}{" "}
                                  {item.type} {idx + 1} : <b>{item.title}</b>
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>


                              
                              {item.get_CurriculumItem_File.map(
                                  (files, index) =>

                                    files.curriculum_item_file_type == 'Video' && (
                                      <Typography key={index}>
                                        <Card>
                                          <Player>
                                            <source src={`${FILE_PATH}${files.url}`} />
                                          </Player>
                                          <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                              {files.title}
                                            </Typography>
                                          </CardContent>
                                        </Card>
                                      </Typography>
                                    )
                                )}


                               
                                  <div className="p-2">
                                    <h6>
                                      <b>Downloadable Files</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (files, index) =>
                                          files.curriculum_item_file_type == 'Downloadable Items' && <ListGroup.Item key={index}>{files.url}</ListGroup.Item>
                                      )}
                                    </ListGroup>
                                  </div>
                           

                             
                                  <div className="p-2">
                                    <h6>
                                      <b>External Resources</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (link, index) =>
                                          link.curriculum_item_file_type == 'External Resourses' && (
                                            <ListGroup.Item key={index}>
                                              <a rel="noreferrer" target="_blank" href={link.url}>
                                                <LaunchIcon fontSize="10" />
                                                {link.title}
                                              </a>
                                            </ListGroup.Item>
                                          )
                                      )}
                                    </ListGroup>
                                  </div>
                                

                                  <div className="p-2">
                                    <h6>
                                      <b>Source Code</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (link, index) =>
                                          link.curriculum_item_file_type == 'Source Code' && <ListGroup.Item key={index}>{link.url}</ListGroup.Item>
                                      )}
                                    </ListGroup>
                                  </div>
                                
                              

                            
                            </AccordionDetails>
                          </Accordion>
                          )}


                          {/* Article */}
                          {item.curriculum_item_type == 'Lecture' && item.article != "N/A" && (
                          <Accordion key={idx}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                              <Typography>
                              {item.article != "N/A" ? (<FileCopyIcon sx={{ fontSize: 15 }} /> ) : ( <PlayCircleIcon  sx={{ fontSize: 15 }} /> )}{" "}
                                  {item.type} {idx + 1} : <b>{item.title}</b>
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>


                              
                              {item.get_CurriculumItem_File.map(
                                  (files, index) =>

                                    files.curriculum_item_file_type == 'Video' && (
                                      <Typography key={index}>
                                        <Card>
                                          <Player>
                                            <source src={`${FILE_PATH}${files.url}`} />
                                          </Player>
                                          <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                              {files.title}
                                            </Typography>
                                          </CardContent>
                                        </Card>
                                      </Typography>
                                    )
                                )}

                              <div className="p-2">
                                    <h6>
                                      <b>Downloadable Files</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (files, index) =>
                                          files.curriculum_item_file_type == 'Downloadable Items' && <ListGroup.Item key={index}>{files.url}</ListGroup.Item>
                                      )}
                                    </ListGroup>
                                  </div>
                           

                             
                                  <div className="p-2">
                                    <h6>
                                      <b>External Resources</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (link, index) =>
                                          link.curriculum_item_file_type == 'External Resourses' && (
                                            <ListGroup.Item key={index}>
                                              <a rel="noreferrer" target="_blank" href={link.url}>
                                                <LaunchIcon fontSize="10" />
                                                {link.title}
                                              </a>
                                            </ListGroup.Item>
                                          )
                                      )}
                                    </ListGroup>
                                  </div>
                                

                                  <div className="p-2">
                                    <h6>
                                      <b>Source Code</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (link, index) =>
                                          link.curriculum_item_file_type == 'Source Code' && <ListGroup.Item key={index}>{link.url}</ListGroup.Item>
                                      )}
                                    </ListGroup>
                                  </div>
                                

                            
                            </AccordionDetails>
                          </Accordion>
                          )}


                          {/* Practice Test */}
                          {item.curriculum_item_type == "Practice Test" && (
                             <Accordion key={idx}>
                             <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                               <Typography>
                               <BugReportIcon
                                              sx={{ fontSize: 15 }}
                                            />{" "}
                                   {item.type} {idx + 1} : <b>{item.title}</b>
                               </Typography>
                             </AccordionSummary>
                             <AccordionDetails>

                              {/* Practice Test */}

                             <div className="p-3">
                              <Tabs
                                defaultActiveKey="practice"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                              >
                                <Tab
                                  eventKey="practice"
                                  title="Practice Test information and Instructions"
                                >
                                  <Form>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>Title</Form.Label>
                                      <Form.Control
                                        value={item.title}
                                        type="text"
                                        placeholder="Practice Test Title"
                                      />
                                    </Form.Group>

                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlTextarea1"
                                    >
                                      <Form.Label>
                                        Description
                                      </Form.Label>
                                      <Form.Control
                                        value={item.description}
                                        
                                        as="textarea"
                                        rows={2}
                                      />
                                    </Form.Group>

                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>
                                        Duration (HH:MM)
                                      </Form.Label>
                                      <Form.Control
                                        value={item.getPracticeTests[0] != null ? item.getPracticeTests[0].duration : ""}
                                      
                                        type="text"
                                      />
                                    </Form.Group>

                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>
                                        Minimum pass mark
                                      </Form.Label>
                                      <Form.Control
                                        value={item.getPracticeTests[0] != null ? item.getPracticeTests[0].minimumuPassMark : 0}
                                        type="number"
                                      />
                                    </Form.Group>

                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlTextarea1"
                                    >
                                      <Form.Label>
                                        Instructions
                                      </Form.Label>
                                      <Form.Control
                                        value={item.getPracticeTests[0] != null ? item.getPracticeTests[0].instructions : ""}
                                     
                                        as="textarea"
                                        rows={3}
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>
                                        External Link
                                      </Form.Label>
                                      <Form.Control
                                        value={item.getPracticeTests[0] != null ? item.getPracticeTests[0].externalLink : ""}
                                       
                                        type="text"
                                        placeholder="https://externallink.com"
                                      />
                                    </Form.Group>
                                  </Form>
                                </Tab>

                                <Tab
                                  eventKey="questions"
                                  title="Questions"
                                >
                                  <Form>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>
                                        Upload Questions
                                      </Form.Label>

                                      {item.getPracticeTests[0] !=
                                        null &&
                                        item.getPracticeTests[0]
                                          .practiceTestQuestionSheet !=
                                          "" && (
                                          <ListGroup className="my-2">
                                            <ListGroup.Item className="d-flex justify-content-between">
                                              <span>
                                                {
                                                  item
                                                    .getPracticeTests[0]
                                                    .practiceTestQuestionSheet
                                                }
                                              </span>
                                         
                                            </ListGroup.Item>
                                          </ListGroup>
                                        )}

                                    
                                    </Form.Group>

                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>
                                        External Link
                                      </Form.Label>
                                      <Form.Control
                                        value={
                                          item.getPracticeTests[0] != null ? item.getPracticeTests[0].PracticeTestQuestionExLink : ""
                                        }
                                       
                                        type="text"
                                        placeholder="https://externallink.com"
                                      />
                                    </Form.Group>
                                  </Form>
                                </Tab>
                                <Tab
                                  eventKey="solutions"
                                  title="Solutions"
                                >
                                  <Form>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>
                                        Upload Solutions
                                      </Form.Label>
                                      {item.getPracticeTests[0] !=
                                        null &&
                                        item.getPracticeTests[0]
                                          .practiceTestSolutionSheet !=
                                          "" && (
                                          <ListGroup className="my-2">
                                            <ListGroup.Item className="d-flex justify-content-between">
                                              <span>
                                                {
                                                  item
                                                    .getPracticeTests[0]
                                                    .practiceTestSolutionSheet
                                                }
                                              </span>
                                              
                                            </ListGroup.Item>
                                          </ListGroup>
                                        )}

                                     
                                    </Form.Group>

                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>
                                        External Link
                                      </Form.Label>
                                      <Form.Control
                                        value={item.getPracticeTests[0] != null ? item
                                          .getPracticeTests[0].PraticeTestSolutionsExLink : ""}
                                       
                                        type="text"
                                        placeholder="https://externallink.com"
                                      />
                                    </Form.Group>

                                   
                                  
                                  </Form>
                                </Tab>
                              </Tabs>
                            </div>
 
 
                             
 
                              <div className="p-2">
                                    <h6>
                                      <b>Downloadable Files</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (files, index) =>
                                          files.curriculum_item_file_type == 'Downloadable Items' && <ListGroup.Item key={index}>{files.url}</ListGroup.Item>
                                      )}
                                    </ListGroup>
                                  </div>
                          

                            
                                  <div className="p-2">
                                    <h6>
                                      <b>External Resources</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (link, index) =>
                                          link.curriculum_item_file_type == 'External Resourses' && (
                                            <ListGroup.Item key={index}>
                                              <a rel="noreferrer" target="_blank" href={link.url}>
                                                <LaunchIcon fontSize="10" />
                                                {link.title}
                                              </a>
                                            </ListGroup.Item>
                                          )
                                      )}
                                    </ListGroup>
                                  </div>
                                

                                  <div className="p-2">
                                    <h6>
                                      <b>Source Code</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (link, index) =>
                                          link.curriculum_item_file_type == 'Source Code' && <ListGroup.Item key={index}>{link.url}</ListGroup.Item>
                                      )}
                                    </ListGroup>
                                  </div>
                                 
 
                             
                             </AccordionDetails>
                           </Accordion>
                          )}


                          {/* Assignment */}
                          {item.curriculum_item_type == "Assignment" && (
                             <Accordion key={idx}>
                             <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                               <Typography>
                               <AssessmentIcon
                                          sx={{ fontSize: 15 }}
                                            />{" "}
                                   {item.type} {idx + 1} : <b>{item.title}</b>
                               </Typography>
                             </AccordionSummary>
                             <AccordionDetails>

                              {/* Assignment */}

                              <div className="p-3">
                                  <Tabs
                                    defaultActiveKey="assignment"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                  >
                                    <Tab
                                      eventKey="assignment"
                                      title="Assignment information and Instructions"
                                    >
                                      <Form>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlInput1"
                                        >
                                          <Form.Label>Title</Form.Label>
                                          <Form.Control
                                            value={item.title}
                                            type="text"
                                            placeholder="Assignment Title"
                                          />
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlTextarea1"
                                        >
                                          <Form.Label>
                                            Description
                                          </Form.Label>
                                          <Form.Control
                                            value={item.description}
                                          
                                            as="textarea"
                                            rows={2}
                                          />
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlInput1"
                                        >
                                          <Form.Label>
                                            Duration (HH:MM)
                                          </Form.Label>
                                          <Form.Control
                                            value={item.getAssignments[0] != null ? item.getAssignments[0].duration : ""}
                                          />
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlTextarea1"
                                        >
                                          <Form.Label>
                                            Instructions
                                          </Form.Label>
                                          <Form.Control
                                            value={
                                              item.getAssignments[0] != null ? item.getAssignments[0].instructions : ""
                                            }
                                          
                                            as="textarea"
                                            rows={3}
                                          />
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlInput1"
                                        >
                                          <Form.Label>
                                            Upload Video
                                          </Form.Label>

                                          {item.getAssignments[0]
                                            .assignmentVideo != "" || item.getAssignments[0]
                                            .assignmentVideo != null && (
                                            <ListGroup className="my-2">
                                              <ListGroup.Item
                                                className="d-flex justify-content-between"
                                                key={index}
                                              >
                                                <span>
                                                  {
                                                    item
                                                      .getAssignments[0]
                                                      .assignmentVideo
                                                  }
                                                </span>
                                            
                                              </ListGroup.Item>
                                            </ListGroup>
                                          )}

                                        
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlTextarea1"
                                        >
                                          <Form.Label>
                                            Downloadable Resourses
                                          </Form.Label>

                                          {item.getAssignments[0]
                                            .downloadableResource !=
                                            "" || item.getAssignments[0]
                                            .downloadableResource !=
                                            null && (
                                            <ListGroup className="my-2">
                                              <ListGroup.Item
                                                className="d-flex justify-content-between"
                                                key={index}
                                              >
                                                <span>
                                                  {
                                                    item
                                                      .getAssignments[0]
                                                      .downloadableResource
                                                  }
                                                </span>
                                              
                                              </ListGroup.Item>
                                            </ListGroup>
                                          )}

                                          
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlInput1"
                                        >
                                          <Form.Label>
                                            External Link
                                          </Form.Label>
                                          <Form.Control
                                            value={item.getAssignments[0] != null ? item.getAssignments[0].externalLink : ""}
                                          
                                            type="text"
                                            placeholder="https://externallink.com"
                                          />
                                        </Form.Group>
                                      </Form>
                                    </Tab>

                                    <Tab
                                      eventKey="questions"
                                      title="Questions"
                                    >
                                      <Form>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlTextarea1"
                                        >
                                          <Form.Label>
                                            Questions
                                          </Form.Label>
                                          <Form.Control
                                            value={item.getAssignments[0] != null ? item.getAssignments[0].question : ""}
                                            
                                            as="textarea"
                                            rows={2}
                                          />
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlInput1"
                                        >
                                          <Form.Label>
                                            Upload Questions
                                          </Form.Label>
                                          {item.getAssignments[0]
                                            .questionSheet != "" && (
                                            <ListGroup className="my-2">
                                              <ListGroup.Item
                                                className="d-flex justify-content-between"
                                                key={index}
                                              >
                                                <span>
                                                  {
                                                    item
                                                      .getAssignments[0]
                                                      .questionSheet
                                                  }
                                                </span>
                                                
                                              </ListGroup.Item>
                                            </ListGroup>
                                          )}

                                          
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlInput1"
                                        >
                                          <Form.Label>
                                            External Link
                                          </Form.Label>
                                          <Form.Control
                                            value={
                                              item.getAssignments[0] != null ? item.getAssignments[0].questionExternalLink : ""
                                            }
                                            
                                            type="text"
                                            placeholder="https://externallink.com"
                                          />
                                        </Form.Group>
                                      </Form>
                                    </Tab>

                                    <Tab
                                      eventKey="solutions"
                                      title="Solutions"
                                    >
                                      <Form>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlTextarea1"
                                        >
                                          <Form.Label>
                                            Solutions
                                          </Form.Label>
                                          <Form.Control
                                            value={item.getAssignments[0] != null ? item.getAssignments[0].solutions : ""}
                                          
                                            as="textarea"
                                            rows={2}
                                          />
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlInput1"
                                        >
                                          <Form.Label>
                                            Upload Video
                                          </Form.Label>
                                          {item.getAssignments[0]
                                            .solutionVideo != "" && (
                                            <ListGroup className="my-2">
                                              <ListGroup.Item
                                                className="d-flex justify-content-between"
                                                key={index}
                                              >
                                                <span>
                                                  {
                                                    item
                                                      .getAssignments[0]
                                                      .solutionVideo
                                                  }
                                                </span>
                                                
                                              </ListGroup.Item>
                                            </ListGroup>
                                          )}

                                          
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlInput1"
                                        >
                                          <Form.Label>
                                            Upload Solutions
                                          </Form.Label>
                                          {item.getAssignments[0]
                                            .solutionsSheet != "" && (
                                            <ListGroup className="my-2">
                                              <ListGroup.Item
                                                className="d-flex justify-content-between"
                                                key={index}
                                              >
                                                <span>
                                                  {
                                                    item
                                                      .getAssignments[0]
                                                      .solutionsSheet
                                                  }
                                                </span>
                                                
                                              </ListGroup.Item>
                                            </ListGroup>
                                          )}

                                          
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlInput1"
                                        >
                                          <Form.Label>
                                            External Link
                                          </Form.Label>
                                          <Form.Control
                                            value={
                                              item.getAssignments[0] != null ? item.getAssignments[0].solutionsExternalLink : ""
                                            }
                                            
                                            type="text"
                                            placeholder="https://externallink.com"
                                          />
                                        </Form.Group>

                                        
                                      </Form>
                                    </Tab>
                                  </Tabs>
                                </div>
 
 
                             
 
                              <div className="p-2">
                                    <h6>
                                      <b>Downloadable Files</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (files, index) =>
                                          files.curriculum_item_file_type == 'Downloadable Items' && <ListGroup.Item key={index}>{files.url}</ListGroup.Item>
                                      )}
                                    </ListGroup>
                                  </div>
                          

                            
                                  <div className="p-2">
                                    <h6>
                                      <b>External Resources</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (link, index) =>
                                          link.curriculum_item_file_type == 'External Resourses' && (
                                            <ListGroup.Item key={index}>
                                              <a rel="noreferrer" target="_blank" href={link.url}>
                                                <LaunchIcon fontSize="10" />
                                                {link.title}
                                              </a>
                                            </ListGroup.Item>
                                          )
                                      )}
                                    </ListGroup>
                                  </div>
                                

                                  <div className="p-2">
                                    <h6>
                                      <b>Source Code</b>
                                    </h6>
                                    <ListGroup>
                                      {item.get_CurriculumItem_File.map(
                                        (link, index) =>
                                          link.curriculum_item_file_type == 'Source Code' && <ListGroup.Item key={index}>{link.url}</ListGroup.Item>
                                      )}
                                    </ListGroup>
                                  </div>
                                 
 
                             
                             </AccordionDetails>
                           </Accordion>
                          )}
                          
                          </>
                       
                      ))}


                    </Card>
                  ))}
              </div>
            </Tab>

            <Tab eventKey="course-landing-page" title="Course Landing Page">
              <div className="row m-2">
                <div className="col-md-7">
                  <div className="my-2">
                    <Typography gutterBottom variant="h4" component="div">
                      Language
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {lang}
                    </Typography>
                  </div>

                  <div className="my-2">
                    <Typography gutterBottom variant="h4" component="div">
                      Level
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {level}
                    </Typography>
                  </div>

                  <div className="my-2">
                    <div className="row">
                      <div className="col-md-6">
                        <Typography gutterBottom variant="h4" component="div">
                          Category
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {course_cat}
                        </Typography>
                      </div>

                      <div className="col-md-6">
                        <Typography gutterBottom variant="h4" component="div">
                          Sub Category
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {course_sub_cat}
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div className="my-2">
                    <Typography gutterBottom variant="h4" component="div">
                      What is primarily taught in your course?
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      <Stack direction="row" spacing={1}>
                        {keywords.map((keyword, index) => (
                          <Chip key={index} label={keyword} variant="outlined" />
                        ))}
                      </Stack>
                    </Typography>
                  </div>

                  <div className="my-2">
                    <Typography gutterBottom variant="h4" component="div">
                      Description
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {course_desc}
                    </Typography>
                  </div>
                </div>

                <div className="col-md-5">
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
                <tr >
                        <td>Worldwide</td>
                        <td>USD</td>
                        <td>{countriesData != null && formatNumber(countriesData.globalListPrice)}</td>
                        <td>
                          $ {countriesData != null && formatNumber(countriesData.priceRange[29].minPrice)} -{' '}
                          $ {countriesData != null && formatNumber(countriesData.priceRange[29].maxPrice)}
                        </td>
                        <td>{countriesData != null && countriesData.discountType}</td>
                        <td>{countriesData != null && countriesData.discountAmount}</td>
                  </tr>

                  {countriesData != null &&
                    countriesData.prices.map((countryData, index) => (
                      <tr key={index}>
                        <td>{countryData.country}</td>
                        <td>{countryData.currency}</td>
                        <td>{formatNumber(countryData.listPrice)}</td>
                        <td>
                          {getSymbolFromCurrency(countryData.currency)} {formatNumber(countryData.minPrice)} -{' '}
                          {getSymbolFromCurrency(countryData.currency)} {formatNumber(countryData.maxPrice)}
                        </td>
                        <td>{countryData.discountType}</td>
                        <td>{countryData.discountAmount}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Tab>

            <Tab eventKey="course-messages" title="Course Messages">
              <div className="m-3">
                <Typography variant="h4" gutterBottom>
                  Welcome Message
                </Typography>

                <p>{welcomemsg}</p>
              </div>

              <div className="m-3">
                <Typography variant="h4" gutterBottom>
                  Congratulations Message
                </Typography>

                <p>{congratsmsg}</p>
              </div>
            </Tab>

            <Tab eventKey="promotions" title="Promotions">
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>CODE1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <h5>Course Description</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget.
                    </p>

                    <div className="row">
                      <div className="col-md-4">
                        <h6>Discount Type</h6>
                        <p>Percentage</p>
                      </div>

                      <div className="col-md-4">
                        <h6>Coupon Amount ($.)</h6>
                        <p>35.00</p>
                      </div>

                      <div className="col-md-4">
                        <h6>Expiry Date</h6>
                        <p>9th October 2023</p>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                  <Typography>CODE2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <h5>Course Description</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget.
                    </p>

                    <div className="row">
                      <div className="col-md-4">
                        <h6>Discount Type</h6>
                        <p>Percentage</p>
                      </div>

                      <div className="col-md-4">
                        <h6>Coupon Amount ($.)</h6>
                        <p>35.00</p>
                      </div>

                      <div className="col-md-4">
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
  );
};

export default SubmittedCourses;
