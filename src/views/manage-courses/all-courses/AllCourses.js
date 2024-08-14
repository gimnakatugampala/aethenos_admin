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
            { title: 'ID', field: 'index' },
            { title: 'Course Title', field: 'courseTitle' },
            { title: 'Course Category', field: 'courseCategory' },
            { title: 'Instrutor', field: 'instructor' },
            { title: 'Actions', field: 'actions' }
          ]}
        //   data={coursesData}
          options={{
            exportButton: true
          }}
        />
      </CardContent>
    </Card>

  
</>
  )
}

export default AllCourses