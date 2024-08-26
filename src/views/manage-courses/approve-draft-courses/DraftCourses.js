import React, { useState, useEffect } from 'react';
import './DraftCourses.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MaterialTable from 'material-table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { Player } from 'video-react';
import { GellAllDraftCourses, ApproveDraftCourse, DisapproveDraftCourse, VideoStreaming, GetCategories } from 'api';
import { FILE_PATH } from 'commonFunctions/FilePaths';
import 'video-react/dist/video-react.css'; // import css
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Button from 'react-bootstrap/Button';
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';

const DraftCourses = () => {
  const [show, setShow] = useState(false);
  const [showDisapprove, setShowDisapprove] = useState(false);
  const [VIDEOURL, setVIDEOURL] = useState('');
  const [courses, setCourses] = useState([]);
  const [comment, setComment] = useState('');
  const [ID, setID] = useState('');
  const [categoryLookup, setCategoryLookup] = useState({}); // State for category lookup

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDisapproveShow = () => setShowDisapprove(true);
  const handleDisapproveClose = () => setShowDisapprove(false);

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '15px',
    width: '40px',
    borderRadius: '25px',
    padding: '0px',
    height: '35px',
  };

  useEffect(() => {
    GellAllDraftCourses(setCourses);
    fetchCategories(); // Fetch categories on component mount
  }, []);

  const fetchCategories = async () => {
    try {
      const result = await GetCategories();
      const lookup = result.reduce((acc, category) => {
        acc[category.name] = category.name; // Use category name as key and value
        return acc;
      }, {});
      setCategoryLookup(lookup);
    } catch (error) {
      console.error('Failed to fetch categories', error);
    }
  };

  const approveDraftCourse = (code) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Approve it!',
    }).then((result) => {
      if (result.isConfirmed) {
        ApproveDraftCourse(code);
      }
    });
  };

  const disapproveDraftCourse = () => {
    if (comment === '') {
      ErrorAlert('Empty Field!', 'Please Give a Comment');
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reject it!',
    }).then((result) => {
      if (result.isConfirmed) {
        DisapproveDraftCourse(ID, comment, setShowDisapprove, setComment);
      }
    });
  };

  const coursesData = courses.map((course, index) => {
    return {
      ...course,
      index: index + 1,
      courseCategory: course.courseCategory ? course.courseCategory.name : 'N/A', // Ensure category is properly displayed
      instructor: `${course.instructorId.generalUserProfile.firstName} ${course.instructorId.generalUserProfile.lastName}`,
      actions: (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            onClick={async () => {
              const url = await VideoStreaming(course.test_video);
              setVIDEOURL(url);
              handleShow();
            }}
            variant="warning"
            style={buttonStyle}
          >
            <PlayCircleIcon />
          </Button>
          <Button
            onClick={() => approveDraftCourse(course.code)}
            variant="success"
            style={buttonStyle}
          >
            <CheckIcon />
          </Button>
          <Button
            onClick={() => {
              setID(course.code);
              handleDisapproveShow();
            }}
            variant="danger"
            style={buttonStyle}
          >
            <CloseIcon />
          </Button>
        </div>
      ),
    };
  });

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            Approve Test Video
          </Typography>

          <MaterialTable
            title=""
            columns={[
              { title: 'ID', field: 'index', filtering: false }, // Filtering disabled
              { title: 'Course Title', field: 'courseTitle' },
              { title: 'Course Category', field: 'courseCategory', lookup: categoryLookup }, // Add category lookup
              { title: 'Instructor', field: 'instructor' },
              { title: 'Actions', field: 'actions', filtering: false }, // Filtering disabled
            ]}
            data={coursesData}
            options={{
              filtering: true, // Global filtering enabled
              exportButton: true,
            }}
          />
        </CardContent>
      </Card>

      {/* Video Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Test Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Player poster="path/to/poster-image.jpg">
            <source src={`${VIDEOURL}`} />
          </Player>
        </Modal.Body>
      </Modal>

      {/* Disapprove Modal */}
      <Modal show={showDisapprove} onHide={handleDisapproveClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reject Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Admin Remark</Form.Label>
              <Form.Control onChange={(e) => setComment(e.target.value)} as="textarea" rows={3} />
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
  );
};

export default DraftCourses;
