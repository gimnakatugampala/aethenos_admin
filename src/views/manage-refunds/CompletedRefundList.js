import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GetAllTransferedRefunds } from 'api';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';

let RefundsData = [];

const CompletedRefundList = () => {
  const [transferedList, settransferedList] = useState([]);

  useEffect(() => {
    GetAllTransferedRefunds(settransferedList);

    RefundsData = transferedList
      .map((refund, index) => {
        // Create a new object with modified property
        return { ...refund, id: index + 1 };
      })
      .reverse();
  }, [transferedList]);

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
           Completed Refunds
          </Typography>
          <MaterialTable
           title=""
            columns={[
              { title: 'ID', field: 'id' },
              { title: 'Course Title', field: 'courseTitle' },
              { title: 'Purchased Date', field: 'purchasedDate' },
              { title: 'Transferred Date', field: 'transferredDate' },
              { title: 'Purchased Amount', field: 'purchasedAmount' },
              { title: 'Refund Amount', field: 'refundAmount' },
              { title: 'Student Name', field: 'studentName' }
            ]}
            data={RefundsData}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default CompletedRefundList;
