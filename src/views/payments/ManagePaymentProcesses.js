import { GetPaypalAndPayoneer } from 'api';
import MaterialTable from 'material-table';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const ManagePaymentProcesses = () => {
  const [PaymentData, setPaymentData] = useState([]);

  useEffect(() => {
    GetPaypalAndPayoneer(setPaymentData);
  }, [PaymentData]);

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
          Payouts
          </Typography>
          <MaterialTable
            title=""
            columns={[
              { title: 'Instructor Name', field: 'instructorName' },
              { title: 'Account Type', field: 'accountType', lookup: { Payoneer: 'Payoneer', Paypal: 'Paypal' } },
              { title: 'Username', field: 'userName' },
              { title: 'Email', field: 'email' },
              { title: 'Month of Sale', field: 'monthOfSale' },
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

export default ManagePaymentProcesses;
