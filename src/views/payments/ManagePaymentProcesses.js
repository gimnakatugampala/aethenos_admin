import MaterialTable from 'material-table'
import React from 'react'
// lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } 
const ManagePaymentProcesses = () => {
  return (
    <div> 
    <MaterialTable
    title="Payment Proccess"
    columns={[
      { title: 'Instructor Name', field: 'instructor_name' },
      { title: 'Account Type', field: 'account_type', lookup: { Stripe: 'Stripe', Paypal: 'Paypal' }  },
      { title: 'PayPal/Stripe AC Name', field: 'ac_name' },
      { title: 'Email', field: 'email'},
      { title: 'Amount', field: 'amount'}

    ]}
    data={[{
      instructor_name: "Gimna Katugampala",
      account_type: "Paypal",
      ac_name:"2009342049124",
      email:"gimnakatugampala1@gmail.com",
      amount:"98,000"
    }]}  
    options={{
      filtering: true,
      exportButton: true
    }}      
   
  /></div>
  )
}

export default ManagePaymentProcesses