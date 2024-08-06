import React from 'react';
import MaterialTable from 'material-table';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { AppoveRefund, ChangeStatusToTransfered, DisappoveRefund, GetRefunds } from 'api';
import Button from 'react-bootstrap/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import moment from 'moment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Accordion from 'react-bootstrap/Accordion';
import { IMG_HOST } from 'api';

import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import 'sweetalert2/src/sweetalert2.scss';

let RefundsData = [];

const RefundsList = () => {
  const theme = useTheme();

  const [show, setShow] = useState(false);
  const [refunds, setrefunds] = useState([]);
  const [refund, setrefund] = useState(null);
  const [selectedCheckbox, setselectedCheckbox] = useState(false);

  const [admin_remark, setadmin_remark] = useState('');

  // =============== VIEW =============
  const [Viewshow, setViewShow] = useState(false);
  const [courses, setcourses] = useState([]);
  const [uD, setuD] = useState(null);

  const handleCloseView = () => setViewShow(false);
  const handleShowView = (refund) => {
    setViewShow(true);
    console.log(refund);
    setcourses(refund.getOwnRefundsResponse);
    setuD(refund);
  };

  useEffect(() => {
    setTimeout(() => {
      GetRefunds(setrefunds);

      RefundsData = refunds.map((refund, index) => {
        // Create a new object with modified property
        return {
          ...refund,
          id: index + 1,
          c_title: refund.courseDetailsResponses[0].courseTitle,
          purch_date: moment(refund.purchasedDate).format('MMM DD,YYYY'),
          purch_amount: `${refund.currency.toUpperCase()} ${refund.refundAmount}`,
          refund_amount: `${refund.refundAmount}`,
          comment: `${refund.reason}`,
          actions: (
            <>
              <Button onClick={() => handleShowView(refund)} size="sm" variant="primary">
                <RemoveRedEyeIcon />
              </Button>

              <Button
                size="sm"
                onClick={() => {
                  handleShow(refund);
                }}
                variant="danger"
              >
                <CloseIcon />
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Approve it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      AppoveRefund(refund.refundCode);
                    }
                  });
                }}
                variant="success"
              >
                <CheckIcon />
              </Button>
            </>
          ),
          status: refund.status == 'Processing' ? <Chip label="Processing" color="info" /> : <Chip label="Completed" color="success" />,
          refunded:
            refund.status == 'Approved' ? (
              <Checkbox value={selectedCheckbox} onChange={(e) => handleTransferedAmount(e.target.checked, refund.refundCode)} />
            ) : (
              <Checkbox disabled={true} />
            )
        };
      });
    }, 1000);
  }, [RefundsData]);

  const handleShow = (refund) => {
    setrefund(refund);
    setShow(true);
    console.log(refund);
  };
  const handleClose = () => {
    setShow(false);
    setrefund(null);
  };

  const handleRefundDispprove = () => {
    if (admin_remark == '') {
      ErrorAlert('Empty Field', 'Please Fill Remark');
      return;
    }

    DisappoveRefund(refund.refundCode, admin_remark, setShow, setadmin_remark, setrefund);

    console.log(admin_remark);
    console.log(refund);
  };

  const handleTransferedAmount = (userAct, rCode) => {
    console.log(userAct);

    setselectedCheckbox(userAct);

    if (userAct) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Approve it!'
      }).then((result) => {
        if (result.isConfirmed) {
          ChangeStatusToTransfered(rCode, setrefunds, setselectedCheckbox);
        }
      });
    }
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
          Pending Refunds
          </Typography>
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
              { title: 'Status', field: 'status' },
              { title: 'Refunded ?', field: 'refunded' }
            ]}
            data={RefundsData}
          />
        </CardContent>
      </Card>

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
          <Button onClick={handleRefundDispprove} variant="danger">
            Disapprove
          </Button>
          <Button variant="secondary">Cancel</Button>
        </Modal.Footer>
      </Modal>

      {/* View */}
      {Viewshow && (
        <Modal show={Viewshow} onHide={handleCloseView}>
          <Modal.Header closeButton>
            <Modal.Title>View Refund History</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Accordion>
              {uD.userDetails != null && (
                <Card className="my-3" sx={{ display: 'flex' }}>
                  {uD.userDetails != null && uD.userDetails.profileImg == null ? (
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={`/assets/images/user-profile.png`}
                      alt="Live from space album cover"
                    />
                  ) : (
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={`${IMG_HOST}${uD.userDetails.profileImg}`}
                      alt="Live from space album cover"
                    />
                  )}
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        {uD != null && uD.userDetails.userName}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {uD != null && uD.userDetails.email}
                      </Typography>

                      <Typography variant="subtitle1" component="div">
                        No. of Refund request - {uD != null && uD.userDetails.noOfRefundRequest}
                      </Typography>

                      <Typography variant="subtitle1" component="div">
                        No. of Refund rejections - {uD != null && uD.userDetails.noOfRefundRejections}
                      </Typography>

                      <Typography variant="subtitle1" component="div">
                        No. of Refund granted - {uD != null && uD.userDetails.noOfRefundGranted}
                      </Typography>

                      <Typography variant="subtitle1" component="div">
                        Total Number of Refunds - {uD != null && uD.userDetails.totalNumberOfRefunds}
                      </Typography>
                    </CardContent>

                    <a
                      className="m-2 w-75 mx-auto"
                      rel="noreferrer"
                      target="_blank"
                      href={`https://aethenos.com/users/${uD.userDetails.userCode}`}
                    >
                      <Button variant="danger">
                        <PeopleAltIcon /> View Student
                      </Button>
                    </a>
                  </Box>
                </Card>
              )}

              {courses.map((course, index) => (
                <Accordion.Item key={index} eventKey={`${index}`}>
                  <Accordion.Header>{course.courseDetailsResponses[0].courseTitle}</Accordion.Header>
                  <Accordion.Body>
                    <h6>Course Completion - {course.courseDetailsResponses[0].courseProgress}%</h6>
                    <h6>Admin Comment - {course.adminComment == null ? 'N/A' : course.adminComment}</h6>
                    <h6>Admin Actions - {course.adminAction}</h6>
                    <h6>Requested Date : {course.requestDate}</h6>
                    <h6>Refunded Amount : {course.refundAmount}</h6>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default RefundsList;
