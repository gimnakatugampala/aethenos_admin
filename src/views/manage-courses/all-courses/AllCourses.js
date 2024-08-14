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
import { GellAllDraftCourses, ApproveDraftCourse, DisapproveDraftCourse } from 'api';
import { FILE_PATH } from 'commonFunctions/FilePaths';
import 'video-react/dist/video-react.css'; // import css
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const AllCourses = () => {
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
                { title: 'Image', field: 'image' },
                { title: 'Course Name', field: 'courseName' },
                { title: 'Category', field: 'Category' },
                { title: 'Sub Category', field: 'subCategory' },
                { title: 'Topic', field: 'Topic' },
                { title: 'Instructor', field: 'instructor'},
                {
                    title: 'Status',
                    field: 'status',
                    lookup: { 1: 'Draft', 2: 'Rejected', 3: 'Pending', 4 :'Disapproved' , 5 : 'Approved' , 6 : 'un published' , 7: 'Requested' },
                    },
                { title: 'Students', field: 'student', type: 'numeric' },
                { title: 'Ratings', field: 'ratings' },
               
                { title: 'Created Date', field: 'createdDate' }
                ]}
                data={[
                    {image : 'sd', courseName: 'Mehmet', Category: 'Baran', subCategory: 'dfsf', Topic: 'dfsf', instructor: 'fdsf', status: 1 , student: 345, ratings : '2', createdDate : '234534'},
                ]}        
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