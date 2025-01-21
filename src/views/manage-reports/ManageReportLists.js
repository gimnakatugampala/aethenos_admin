import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GetAllInstructors, GetCurentMonthRevenue, GetLastThreeMonthsRevenue, GetLastYearMonthRevenue } from '../../api/';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Chip from '@mui/material/Chip';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

let InstructorData = [];
const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '15px',
  width: '40px',
  borderRadius: '25px',
  padding: '0px',
  height: '35px'
};

const ManageReportLists = () => {
  const [instructorList, setInstructorList] = useState([]);
  const [currentMonthData, setCurrentMonthData] = useState([]);
  const [lastThreeMonthsData, setLastThreeMonthsData] = useState([]);
  const [LastYearMonthData, setLastYearMonthData] = useState([]);
  const [viewShow, setViewShow] = useState(false);
  const handleCloseView = () => setViewShow(false);
  const [instructorData, setInstructorData] = useState();


  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  const [daysForOneMonth, setDaysForOneMonth] = useState([]);
  const [revenueDataForOneMonth, setRevenueDataForOneMonth] = useState([]);

  const [daysForThreeMonths, setDaysForThreeMonths] = useState([]);
  const [revenueDataForThreeMonths, setRevenueDataForThreeMonths] = useState([]);

  const [monthsForOneYear, setMonthsForOneYear] = useState([]);
  const [revenueForOneYear, setRevenueForOneYear] = useState([]);

  useEffect(() => {
    if (currentMonthData) {
      const days = currentMonthData.days || [];
      const revenue = currentMonthData.revenue || [];

      setDaysForOneMonth([...days]);
      setRevenueDataForOneMonth([...revenue]);
    }
  }, [currentMonthData]);

  useEffect(() => {
    if (LastYearMonthData) {
      const months = LastYearMonthData.map((data) => data.month);
      const revenues = LastYearMonthData.map((data) => data.revenue);

      setMonthsForOneYear([...months]);
      setRevenueForOneYear([...revenues]);
    }
  }, [LastYearMonthData]);

  useEffect(() => {
    if (lastThreeMonthsData) {
      const threeMonthsData = lastThreeMonthsData
        .map((monthData, monthIndex) =>
          monthData.revenues.map((entry) => {
            return entry.day + monthIndex * 31;
          })
        )
        .flat();

      const revenue = lastThreeMonthsData.map((monthData) => monthData.revenues.map((entry) => entry.revenue)).flat();

      setDaysForThreeMonths(threeMonthsData);
      setRevenueDataForThreeMonths(revenue);
    }
  }, [lastThreeMonthsData]);


  const handleShowView = async (data) => {
    setInstructorData(data);
    GetCurentMonthRevenue(currentMonth, currentYear, data.userCode, setCurrentMonthData);

    GetLastThreeMonthsRevenue(currentMonth, currentYear, data.userCode, setLastThreeMonthsData);

    GetLastYearMonthRevenue(currentMonth, currentYear, data.userCode, setLastYearMonthData);

    setViewShow(true);
    // setCourses(data);
    // setUD(refund);
  };

  const oneMonthRevenue = {
    labels: daysForOneMonth,
    datasets: [
      {
        label: 'Revenue',
        data: revenueDataForOneMonth,
        fill: true,
        backgroundColor: 'rgba(135,206,235,0.2)',
        borderColor: 'rgba(135,206,235,1)'
      }
    ]
  };

  const threeMonthsRevenue = {
    labels: daysForThreeMonths,
    datasets: [
      {
        label: 'Revenue',
        data: revenueDataForThreeMonths,
        fill: true,
        backgroundColor: 'rgba(135,206,235,0.2)',
        borderColor: 'rgba(135,206,235,1)'
      }
    ]
  };

  const oneYearRevenue = {
    labels: monthsForOneYear,
    datasets: [
      {
        label: 'Revenue',
        data: revenueForOneYear,
        fill: true,
        backgroundColor: 'rgba(135,206,235,0.2)',
        borderColor: 'rgba(135,206,235,1)'
      }
    ]
  };

  const optionsForOneMonth = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'Revenue Over Days'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days' // X-axis title
        }
      },
      y: {
        title: {
          display: true,
          text: 'Revenue (USD)' // Y-axis title
        }
      }
    }
  };

  const optionsForThreeMonth = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'Revenue Over Days'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days' // X-axis title
        }
      },
      y: {
        title: {
          display: true,
          text: 'Revenue (USD)' // Y-axis title
        }
      }
    }
  };

  const optionsForOneYear = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'Revenue Over Months'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months' // X-axis title
        }
      },
      y: {
        title: {
          display: true,
          text: 'Revenue (USD)' // Y-axis title
        }
      }
    }
  };

  useEffect(() => {
    GetAllInstructors(setInstructorList);

    InstructorData = instructorList
      .map((data, index) => {
        return {
          ...data,
          id: index + 1,
          active: data.active === true ? <Chip label="Active" color="success" /> : <Chip label="Inactive" color="error" />,
          reports: (
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button onClick={() => handleShowView(data)} variant="success" style={buttonStyle}>
                <QueryStatsIcon />
              </Button>
            </div>
          )
        };
      })
      .reverse();
  }, [instructorList]);

  return (
    <>
      {!viewShow && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h2" gutterBottom>
              Instructor Revenue
            </Typography>
            <MaterialTable
              title=""
              columns={[
                { title: 'ID', field: 'id' },
                { title: 'Name', field: 'name' },
                { title: 'Joined Date', field: 'joinDate' },
                { title: 'Totall Students', field: 'totalStudents' },
                { title: 'Email', field: 'email' },
                { title: 'Status', field: 'active', filtering: false },
                { title: 'Reports', field: 'reports', filtering: false }
              ]}
              data={InstructorData}
            />
          </CardContent>
        </Card>
      )}

      {viewShow && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Card show={viewShow} onHide={handleCloseView}>
              <div className="text-right m-2">
                <Button onClick={() => setViewShow(false)} style={{ float: 'right', backgroundColor: '#e01d20', border: 'none' }}>
                  Back To All Instructors <i className="fa-solid fa-angle-right"></i>
                </Button>
              </div>
              <Typography variant="h2" gutterBottom>
                Revenue Report of {instructorData.name}
              </Typography>
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab
                  eventKey="home"
                  title={
                    <div className="tab-title">
                      <div>
                        Total Revenue on {currentMonth} {currentYear}
                      </div>
                    </div>
                  }
                >
                  <div style={{ height: '600px', width: '100%' }}>
                    <Line data={oneMonthRevenue} options={optionsForOneMonth} height={400} />
                  </div>
                </Tab>

                <Tab
                  eventKey="profile"
                  title={
                    <div className="tab-title">
                      <div>Last three Months Revenue</div>
                    </div>
                  }
                >
                  <div style={{ height: '600px', width: '100%' }}>
                    <Line data={threeMonthsRevenue} options={optionsForThreeMonth} height={400} />
                  </div>
                </Tab>
                <Tab
                  eventKey="OneYearRevenue"
                  title={
                    <div className="tab-title">
                      <div>Last 12 Months Revenue</div>
                      {/* <div className="font-bold fs-5">{overViewStatus.totalEnrollments}</div> */}
                      {/* <div>{overViewStatus.thisMonthEnrollments} this month</div> */}
                    </div>
                  }
                >
                  <div style={{ height: '600px', width: '100%' }}>
                    <Line data={oneYearRevenue} options={optionsForOneYear} height={400} />
                  </div>
                </Tab>
              </Tabs>
            </Card>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ManageReportLists;
