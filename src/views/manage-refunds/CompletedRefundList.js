import { GetAllTransferedRefunds } from 'api'
import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react'

let RefundsData = []

const CompletedRefundList = () => {

  const [transferedList, settransferedList] = useState([])


  useEffect(() => {
    GetAllTransferedRefunds(settransferedList)

    RefundsData = transferedList.map((refund,index) => {
      // Create a new object with modified property
      return { ...refund, 
        id: index + 1,
      }
    }).reverse()
   
  }, [transferedList])
  

  return (
    <div>
      <MaterialTable
      title="Transferred Refunds"
      columns={[
        { title: 'ID', field: 'id' },
        { title: 'Course Title', field: 'courseTitle' },
        { title: 'Purchased Date', field: 'purchasedDate' },
        { title: 'Purchased Amount', field: 'purchasedAmount' },
        { title: 'Refund Amount', field: 'refundAmount' },
        { title: 'Student Name', field: 'studentName' }
      ]}
      data={RefundsData}        
     
    />
    </div>
  )
}

export default CompletedRefundList