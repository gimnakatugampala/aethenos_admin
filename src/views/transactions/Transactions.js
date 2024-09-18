import { GetAllTransactions } from 'api'; // Adjust this import based on your API setup
import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await GetAllTransactions();
        console.log('API Response:', response); // Add this log to inspect the response structure
        setTransactions(response); // Ensure the structure of the response matches the expected format
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []); // Removed transactions from dependency array to avoid infinite loop

  // Function to handle opening the dialog and setting courses
  const handleOpenDialog = (courses) => {
    setSelectedCourses(courses);
    setOpenDialog(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCourses([]);
  };

  const columns = [
    { title: 'Transaction Code', field: 'transactionCode' }, // Ensure these fields match the API response
    { title: 'Student Name', field: 'studentName' },
    { title: 'Purchase Country', field: 'purchaseCountry' },
    { title: 'Total Amount', field: 'totalAmount' },
    { title: 'Purchased Date', field: 'purchasedDate' },
    { title: 'Payment Method', field: 'paymentMethod' },
    {
      title: 'Courses',
      render: (rowData) => (
        <Button variant="contained" color="primary" onClick={() => handleOpenDialog(rowData.courses)}>
          <VisibilityIcon />
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            Transactions
          </Typography>
          {!loading ? (
            <MaterialTable
              title=""
              columns={columns}
              data={transactions}
              options={{
                search: true,
                paging: true,
                filtering: true,
              }}
            />
          ) : (
            <Typography variant="h6">Loading...</Typography>
          )}
        </CardContent>
      </Card>

      {/* Dialog for displaying courses */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>Courses</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Course Name</TableCell>
                  <TableCell>List Price</TableCell>
                  <TableCell>Purchase Price</TableCell>
                  <TableCell>Channel</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedCourses.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell>{course.courseName}</TableCell>
                    <TableCell>{course.listPrice}</TableCell>
                    <TableCell>{course.itemPrice}</TableCell>
                    <TableCell>{course.channel}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Transactions;
