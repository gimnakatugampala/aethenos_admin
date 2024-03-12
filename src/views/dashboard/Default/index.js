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

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
   

    
              <Grid item sm={6} xs={12} md={6} lg={3}>
                <CountInstructors isLoading={isLoading} />
              </Grid>
              
              <Grid item sm={6} xs={12} md={6} lg={3}>
                <CountStudents isLoading={isLoading} />
              </Grid>

              <Grid item sm={6} xs={12} md={6} lg={3}>
                <CountDraftCourses isLoading={isLoading} />
              </Grid>

              <Grid item sm={6} xs={12} md={6} lg={3}>
                <CountCourseSubmissions isLoading={isLoading} />
              </Grid>
     


        </Grid>
      </Grid>

    </Grid>
  );
};

export default Dashboard;
