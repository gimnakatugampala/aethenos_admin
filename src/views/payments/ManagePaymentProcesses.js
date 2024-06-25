import { GetPaypalAndPayoneer } from 'api'
import MaterialTable from 'material-table'
import React, { useState } from 'react'
import { useEffect } from 'react'
// lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } 
const ManagePaymentProcesses = () => {

  const [PaymentData, setPaymentData] = useState([])


  useEffect(() => {
    GetPaypalAndPayoneer(setPaymentData)
  }, [PaymentData])
  

  return (
    <div> 
    <MaterialTable
    title="Payment Proccess"
    columns={[
      { title: 'Instructor Name', field: 'instructorName' },
      { title: 'Account Type', field: 'accountType', lookup: { Payoneer: 'Payoneer', Paypal: 'Paypal' }  },
      { title: 'Username', field: 'userName' },
      { title: 'Email', field: 'email'},
      { title: 'Amount', field: 'amount'}

    ]}
    data={PaymentData}  
    options={{
      filtering: true,
      exportButton: true
    }}      
   
  /></div>
  )
}

export default ManagePaymentProcesses