import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { useEffect } from 'react';
import { GetUKBank } from 'api';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ManageUKBank = () => {
  const [PaymentData, setPaymentData] = useState([]);

  useEffect(() => {
    GetUKBank(setPaymentData);
  }, []);

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
          UK Bank
          </Typography>
          <MaterialTable
            title=""
            columns={[
              { title: 'Instructor Name', field: 'instructorName' },
              { title: 'Sort code', field: 'sortCode' },
              { title: 'Account No', field: 'accountNo' },
              { title: 'Amount', field: 'amount' }
            ]}
            data={PaymentData}
            options={{
              filtering: true,
              exportButton: true
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageUKBank;
