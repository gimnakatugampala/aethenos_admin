import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from 'react-bootstrap/Button';
import Typography from '@mui/material/Typography';
import MaterialTable from 'material-table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { Player } from 'video-react';
import { GellAllDraftCourses, ApproveDraftCourse, DisapproveDraftCourse, GetAllCourses } from 'api';
import { FILE_PATH } from 'commonFunctions/FilePaths';
import 'video-react/dist/video-react.css'; // import css
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

let coursesData = []

const AllCourses = () => {

  const [courses, setcourses] = useState([])

  useEffect(() => {
    GetAllCourses(setcourses)
  }, [])

  // useEffect(() => {

  //   coursesData = courses.map(course => ({
  //     ...course,
  //     imgElement: <img src={`${FILE_PATH}${course.img}`} alt={course.title} style={{ width: '50px', height: '50px' }} />,
  // }));
    
  // }, [courses])
  


  

  return (
    <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          All Courses
        </Typography>

        <MaterialTable
            title=""
            columns={[
                { title: 'Image', field: 'imgElement' },
                { title: 'Course Name', field: 'title' },
                { title: 'Category', field: 'category' },
                { title: 'Sub Category', field: 'sub_category' },
                { title: 'Topic', field: 'topic' },
                { title: 'Instructor', field: 'instructor'},
                {
                    title: 'Status',
                    field: 'approvalTypeId',
                    lookup: { 1: 'Draft', 2: 'Rejected', 3: 'Pending', 4 :'Disapproved' , 5 : 'Approved' , 6 : 'un published' , 7: 'Requested' },
                    },
                { title: 'Students', field: 'enrolled_count', type: 'numeric' },
                { title: 'Ratings', field: 'ratings' },
               
                { title: 'Created Date', field: 'created_date' },
                { title: 'Level', field: 'level' },
                { title: 'Language', field: 'language' }
                ]}
                data={courses}        
                options={{
                    filtering: true,
                    exportButton: true
                }}
                />
      </CardContent>
    </Card>

  
</>
  )
}

export default AllCourses