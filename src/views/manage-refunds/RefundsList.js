import React from 'react'
import MaterialTable from 'material-table'
import { useEffect } from 'react'
import { AppoveRefund, DisappoveRefund, GetRefunds } from 'api'
import Button from 'react-bootstrap/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import moment from 'moment'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';


let RefundsData = []

const RefundsList = () => {

  const [show, setShow] = useState(false);
  const [refunds, setrefunds] = useState([])
  const [refund, setrefund] = useState(null)

  const [admin_remark, setadmin_remark] = useState("")

  useEffect(() => {
    setTimeout(() => {
      GetRefunds(setrefunds)
  
      RefundsData = refunds.map((refund,index) => {
        // Create a new object with modified property
        return { ...refund, 
          id: index + 1,
          c_title: refund.courseTitles[0],
          purch_date: moment(refund.purchasedDate).format('MMM DD,YYYY'),
          purch_amount: `${refund.currency.toUpperCase()} ${refund.refundAmount}`,
          refund_amount:`${refund.refundAmount}`,
          comment:`${refund.reason}`,
          actions: (
            <>
           <Button onClick={() => {
              handleShow(refund)
              }}  variant="danger"><CloseIcon />
            </Button>
           <Button onClick={() => {
              // handleShow()
              AppoveRefund(refund.refundCode)
              }}  variant="success"><CheckIcon />
            </Button>
            </>
          )
         };
    })
    }, 1000);

  }, [RefundsData])

  const handleShow = (refund) => {
    setrefund(refund)
    setShow(true)
  };
  const handleClose = () => {
    setShow(false)
    setrefund(null)
  };


  const handleRefundDispprove = () => {

    if(admin_remark == ""){
      ErrorAlert("Empty Field","Please Fill Remark")
      return
    }

    DisappoveRefund(refund.refundCode,admin_remark,setShow,setadmin_remark,setrefund)

    console.log(admin_remark)
    console.log(refund)
  }
  

  return (
    <div>
       <MaterialTable
      title="Refunds"
      columns={[
        { title: 'ID', field: 'id' },
        { title: 'Course Title', field: 'c_title' },
        { title: 'Purchased Date', field: 'purch_date' },
        { title: 'Purchased Amount', field: 'purch_amount' },
        { title: 'Refund Amount', field: 'refund_amount' },
        { title: 'Comment', field: 'comment' },
        { title: 'Actions', field: 'actions' },
      ]}
      data={RefundsData}        
     
    />


    {/* Disaaprove  */}
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Disapprove Refund</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Admin Remark</Form.Label>
            <Form.Control value={admin_remark} onChange={(e) => setadmin_remark(e.target.value)} as="textarea" rows={3} />
          </Form.Group>
        </Form>
       </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleRefundDispprove} variant="danger" >
          Disapprove
        </Button>
        <Button variant="secondary" >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>

    </div>
  )
}

export default RefundsList