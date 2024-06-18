import React from 'react'
import MaterialTable from 'material-table'

const ManageUKBank = () => {
  return (
    <div> 
    <MaterialTable
    title="UK Bank"
    columns={[
        { title: 'Instructor Name', field: 'instructor_name' },
        { title: 'Bank AC Name', field: 'ac_name' },
        { title: 'Sort code', field: 'sort_code'},
        { title: 'Account No', field: 'account_no'},
        { title: 'Amount', field: 'amount'}
  
      ]}
      data={[{
        instructor_name: "Gimna Katugampala",
        ac_name:"2009342049124",
        sort_code:"50:00",
        account_no:"504576334600",
        amount:"98,000"
      }]}  
      options={{
        filtering: true,
        exportButton: true
      }}        
   
  /></div>
  )
}

export default ManageUKBank