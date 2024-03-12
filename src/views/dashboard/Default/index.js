import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

import CountInstructors from './CountInstructors';
import CountStudents from './CountStudents';
import CountDraftCourses from './CountDraftCourses';
import CountCourseSubmissions from './CountCourseSubmissions';
import { GetDashboardData } from 'api';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  const [instructorCount, setinstructorCount] = useState(0)
  const [studentCount, setstudentCount] = useState(0)
  const [draftCoursesCount, setdraftCoursesCount] = useState(0)
  const [submitsCoursesCount, setsubmitsCoursesCount] = useState(0)


  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    GetDashboardData(setinstructorCount,setstudentCount,setdraftCoursesCount,setsubmitsCoursesCount)
  }, [])
  

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
   

    
              <Grid item sm={6} xs={12} md={6} lg={3}>
                <CountInstructors instructorCount={instructorCount} isLoading={isLoading} />
              </Grid>
              
              <Grid item sm={6} xs={12} md={6} lg={3}>
                <CountStudents studentCount={studentCount} isLoading={isLoading} />
              </Grid>

              <Grid item sm={6} xs={12} md={6} lg={3}>
                <CountDraftCourses draftCoursesCount={draftCoursesCount} isLoading={isLoading} />
              </Grid>

              <Grid item sm={6} xs={12} md={6} lg={3}>
                <CountCourseSubmissions submitsCoursesCount={submitsCoursesCount} isLoading={isLoading} />
              </Grid>
     


        </Grid>
      </Grid>

    </Grid>
  );
};

export default Dashboard;
