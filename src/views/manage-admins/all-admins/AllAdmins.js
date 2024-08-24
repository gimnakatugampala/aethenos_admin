import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MaterialTable from 'material-table';
import Chip from '@mui/material/Chip';
import Swal from 'sweetalert2';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { ActivateAdminAPI, ViewAdminAPI } from 'api';
import './AllAdmins.css';

const AllAdmins = () => {
  const [admins, setAdmins] = useState([]);

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

  const handleDeactivate = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Deactivate it!',
    }).then((result) => {
      if (result.isConfirmed) {
        ActivateAdminAPI(id);
      }
    });
  };

  const handleActivate = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Activate it!',
    }).then((result) => {
      if (result.isConfirmed) {
        ActivateAdminAPI(id);
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ViewAdminAPI();
        const processedData = response.map((admin, index) => ({
          ...admin,
          index: index + 1,
          status: admin.isActive === 1 ? <Chip label="Active" color="success" /> : <Chip label="Inactive" color="error" />,
          actions: admin.isActive === 1 ? (
            <div className='d-flex'>
              <Button onClick={() => handleDeactivate(admin.id)} className='mx-1' style={buttonStyle} variant="contained">
                <CloseIcon />
              </Button>
            </div>
          ) : (
            <div className='d-flex'>
              <Button onClick={() => handleActivate(admin.id)} className='mx-1' style={buttonStyle} color="success" variant="contained">
                <CheckIcon />
              </Button>
            </div>
          ),
        }));

        setAdmins(processedData);
      } catch (error) {
        console.error("Error fetching admin data: ", error);
      }
    };

    fetchData(); // Fetch data once when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            All Admins
          </Typography>

          <MaterialTable
            title="Admins"
            columns={[
              { title: '#ID', field: 'index', filtering: false },
              { title: 'First Name', field: 'firstName' },
              { title: 'Last Name', field: 'lastName' },
              { title: 'Email', field: 'email' },
              { title: 'Status', field: 'status', filtering: false },
              { title: 'Actions', field: 'actions', filtering: false },
            ]}
            data={admins} // Use admins directly
            options={{
              search: true,
              filtering: true,
              exportButton: true,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AllAdmins;
