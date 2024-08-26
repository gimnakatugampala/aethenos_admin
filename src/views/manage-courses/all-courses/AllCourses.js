import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MaterialTable from 'material-table';
import { GetAllCourses, GetLanguages, GetLevel, GetCategories } from 'api';
import { FILE_PATH } from 'commonFunctions/FilePaths';
import { TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [languageLookup, setLanguageLookup] = useState({});
  const [levelLookup, setLevelLookup] = useState({});
  const [categoryLookup, setCategoryLookup] = useState({}); // State for category lookup

  useEffect(() => {
    // Fetch courses data
    GetAllCourses(data => {
      setCourses(data);
      setFilteredCourses(filterCourses(data, dateRange));
    });

    // Fetch languages data
    const fetchLanguages = async () => {
      const result = await GetLanguages();
      const lookup = result.reduce((acc, lang) => {
        acc[lang.name] = lang.name; // Use language name as key and value
        return acc;
      }, {});
      setLanguageLookup(lookup);
    };

    // Fetch levels data
    const fetchLevels = async () => {
      const result = await GetLevel();
      const lookup = result.reduce((acc, level) => {
        acc[level.name] = level.name; // Use level name as key and value
        return acc;
      }, {});
      setLevelLookup(lookup);
    };

    // Fetch categories data
    const fetchCategories = async () => {
      const result = await GetCategories();
      const lookup = result.reduce((acc, category) => {
        acc[category.name] = category.name; // Use category name as key and value
        return acc;
      }, {});
      setCategoryLookup(lookup);
    };

    fetchLanguages();
    fetchLevels();
    fetchCategories();
  }, [dateRange]);

  const handleDateRangeChange = (type, newValue) => {
    setDateRange(prev => {
      const newRange = { ...prev, [type]: newValue };
      setFilteredCourses(filterCourses(courses, newRange));
      return newRange;
    });
  };

  const clearDateRange = () => {
    setDateRange({ startDate: null, endDate: null });
    setFilteredCourses(courses); // Show all courses when date range is cleared
  };

  const filterCourses = (coursesData, dateRange) => {
    return coursesData.filter(course => {
      const createdDate = new Date(course.created_date);
      const startDate = dateRange.startDate ? new Date(dateRange.startDate) : null;
      const endDate = dateRange.endDate ? new Date(dateRange.endDate) : null;

      if (startDate && endDate) {
        return createdDate >= startDate && createdDate <= endDate;
      } else if (startDate) {
        return createdDate >= startDate;
      } else if (endDate) {
        return createdDate <= endDate;
      }

      return true;
    });
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            All Courses
          </Typography>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start Date"
                value={dateRange.startDate}
                onChange={(newValue) => handleDateRangeChange('startDate', newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
              <DatePicker
                label="End Date"
                value={dateRange.endDate}
                onChange={(newValue) => handleDateRangeChange('endDate', newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button variant="outlined" onClick={clearDateRange}>
              Clear Date Range
            </Button>
          </div>

          <MaterialTable
            title=""
            columns={[
              {
                title: 'Image',
                field: 'imgElement',
                filtering: false,
                render: rowData => (
                  <img
                    src={`${FILE_PATH}${rowData.img}`}
                    alt={rowData.title}
                    style={{ width: '50px', height: '50px' }}
                  />
                )
              },
              { title: 'Course Name', field: 'title' },
              { 
                title: 'Category', 
                field: 'category', 
                lookup: categoryLookup // Set the lookup for the Category column
              },
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
              { title: 'Ratings', field: 'ratings', filtering: false },
              {
                title: 'Created Date',
                field: 'created_date',
                render: rowData => new Date(rowData.created_date).toLocaleDateString(),
                filtering: false 
              },
              { 
                title: 'Level', 
                field: 'level', 
                lookup: levelLookup 
              },
              { 
                title: 'Language', 
                field: 'language', 
                lookup: languageLookup 
              }
            ]}
            data={filteredCourses}
            options={{
              filtering: true,
              exportButton: true
            }}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default AllCourses;
