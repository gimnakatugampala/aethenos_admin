import React, { useState } from 'react'
import MaterialTable from 'material-table'
import { useEffect } from 'react'
import { GetUKBank } from 'api'

const ManageUKBank = () => {

  const [PaymentData, setPaymentData] = useState([])

  useEffect(() => {
    GetUKBank(setPaymentData)
  }, [])
  

  return (
    <div> 
    <MaterialTable
    title="UK Bank"
    columns={[
        { title: 'Instructor Name', field: 'instructorName' },
        { title: 'Sort code', field: 'sortCode'},
        { title: 'Account No', field: 'accountNo'},
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

export default ManageUKBank