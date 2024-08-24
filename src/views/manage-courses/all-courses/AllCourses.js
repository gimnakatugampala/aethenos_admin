import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MaterialTable from 'material-table';
import { GetAllCourses } from 'api';
import { FILE_PATH } from 'commonFunctions/FilePaths';

const AllCourses = () => {
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    GetAllCourses(setcourses);
  }, []);

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
              {
                title: 'Image',
                field: 'imgElement',
                filtering: false, // Disable filtering for the Image column
                render: rowData => (
                  <img
                    src={`${FILE_PATH}${rowData.img}`}
                    alt={rowData.title}
                    style={{ width: '50px', height: '50px' }}
                  />
                )
              },
              { title: 'Course Name', field: 'title' },
              { title: 'Category', field: 'category' },
              { title: 'Sub Category', field: 'sub_category' },
              { title: 'Topic', field: 'topic' },
              { title: 'Instructor', field: 'instructor' },
              {
                title: 'Status',
                field: 'approvalTypeId',
                lookup: {
                  1: 'Draft',
                  2: 'Rejected',
                  3: 'Pending',
                  4: 'Disapproved',
                  5: 'Approved',
                  6: 'Unpublished',
                  7: 'Requested'
                }
              },
              { title: 'Students', field: 'enrolled_count', type: 'numeric' },
              { title: 'Ratings', field: 'ratings' },
              { title: 'Created Date', field: 'created_date' },
              { title: 'Level', field: 'level' },
              { title: 'Language', field: 'language' }
            ]}
            data={courses}
            options={{
              filtering: true, // Enable filtering globally
              exportButton: true
            }}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default AllCourses;
