import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { useTheme } from '@mui/material/styles';
import { AppoveRefund, ChangeStatusToTransfered, DisappoveRefund, GetRefunds } from 'api';
import Button from 'react-bootstrap/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ErrorAlert from 'commonFunctions/Alerts/ErrorAlert';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Accordion from 'react-bootstrap/Accordion';
import { IMG_HOST } from 'api';
import getSymbolFromCurrency from 'currency-symbol-map'
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

const RefundsList = () => {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [refunds, setrefunds] = useState([]);
  const [refund, setRefund] = useState(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState(false);
  const [adminRemark, setAdminRemark] = useState('');
  const [viewShow, setViewShow] = useState(false);
  const [courses, setCourses] = useState([]);
  const [uD, setUD] = useState(null);

  const handleCloseView = () => setViewShow(false);
  const handleShowView = (refund) => {
    setViewShow(true);
    setCourses(refund);
    setUD(refund);
    console.log(refund)
  };

  useEffect(() => {
    const fetchRefunds = async () => {
      try {
        const data = await GetRefunds();
        console.log('Fetched refunds data:', data); // Log the data
        if (Array.isArray(data)) {
          const processedData = data.map((refund, index) => ({
            ...refund,
            id: index + 1,
            c_title: refund.courseDetailsResponses[0]?.courseTitle || 'N/A',
            purch_date: moment(refund.purchasedDate).format('MMM DD, YYYY'),
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
                  onClick={() => handleShow(refund)}
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
            status: refund.status === 'Processing'
              ? <Chip label="Processing" color="info" />
              : <Chip label="Completed" color="success" />,
            refunded: refund.status === 'Approved'
              ? <Checkbox value={selectedCheckbox} onChange={(e) => handleTransferedAmount(e.target.checked, refund.refundCode)} />
              : <Checkbox disabled={true} />
          }));
          setrefunds(processedData);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching refunds data:', error);
      }
    };

    fetchRefunds(); // Fetch data once when the component mounts
  }, []);

  const handleShow = (refund) => {
    setRefund(refund);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setRefund(null);
  };

  const handleRefundDisapprove = () => {
    if (adminRemark === '') {
      ErrorAlert('Empty Field', 'Please Fill Remark');
      return;
    }

    DisappoveRefund(refund.refundCode, adminRemark, setShow, setAdminRemark, setRefund);
  };

  const handleTransferedAmount = (userAct, rCode) => {
    setSelectedCheckbox(userAct);

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
          ChangeStatusToTransfered(rCode, setrefunds, setSelectedCheckbox);
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
            title=""
            columns={[
              { title: 'ID', field: 'id', filtering: false },
              { title: 'Course Title', field: 'c_title', filtering: true },
              { title: 'Purchased Date', field: 'purch_date', filtering: true },
              { title: 'Purchased Amount', field: 'purch_amount', filtering: true },
              { title: 'Refund Amount', field: 'refund_amount', filtering: true },
              { title: 'Comment', field: 'comment', filtering: true },
              { title: 'Actions', field: 'actions', filtering: false },
              { title: 'Status', field: 'status', filtering: false },
              { title: 'Refunded ?', field: 'refunded', filtering: false }
            ]}
            data={refunds}
            options={{
              search: true,
              filtering: true,
              exportButton: true
            }}
          />
        </CardContent>
      </Card>

      {/* Disapprove Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Disapprove Refund</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Admin Remark</Form.Label>
              <Form.Control value={adminRemark} onChange={(e) => setAdminRemark(e.target.value)} as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleRefundDisapprove} variant="danger">
            Disapprove
          </Button>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>

      {/* View Refund History Modal */}
      {viewShow && (
        <Modal show={viewShow} onHide={handleCloseView}>
          <Modal.Header closeButton>
            <Modal.Title>View Refund History</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Accordion>
              {uD?.userDetails && (
                <Card className="my-3" sx={{ display: 'flex' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={uD.userDetails.profileImg ? `${IMG_HOST}${uD.userDetails.profileImg}` : `/assets/images/user-profile.png`}
                    alt="Profile"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        {uD.userDetails.userName}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {uD.userDetails.email}
                      </Typography>
                      <Typography variant="subtitle1" component="div">
                        No. of Refund request - {uD.userDetails.noOfRefundRequest}
                      </Typography>
                      <Typography variant="subtitle1" component="div">
                        No. of Refund rejections - {uD.userDetails.noOfRefundRejections}
                      </Typography>
                      <Typography variant="subtitle1" component="div">
                        No. of Refund granted - {uD.userDetails.noOfRefundGranted}
                      </Typography>
                      <Typography variant="subtitle1" component="div">
                        Total Number of Refunds - {uD.userDetails.totalNumberOfRefunds}
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

              <div className="my-2">
                <h5>Requested Course Details</h5>
                {courses && courses.courseDetailsResponses.map((course, index) => (
                  <div key={index} className="card mb-3" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div className="card-body">
                      <h5 className="card-title">{course.courseTitle}</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <p className="card-text"><strong>Course Completion:</strong> {(Number.parseFloat(course.courseProgress).toFixed(2) / Number.parseFloat(course.courseCompletion).toFixed(2)) * 100}%</p>
                          <p className="card-text"><strong>Completed Sections:</strong> {course.sectionCompleteCount}/{course.allSectionCount}</p>
                          <p className="card-text"><strong>Purchase Amount:</strong> {getSymbolFromCurrency(courses.currency)} {courses.purchasedAmount}</p>
                        </div>
                        <div className="col-md-6">
                          <p className="card-text"><strong>Refund Amount:</strong> {getSymbolFromCurrency(courses.currency)} {courses.refundAmount}</p>
                          <p className="card-text"><strong>Purchase Date:</strong> {courses.purchasedDate}</p>
                          <p className="card-text"><strong>Status:</strong> {courses.status}</p>
                          <p className="card-text"><strong>Reason:</strong> {courses.reason}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>


              <div className='my-2'>
          <h6>Other Requested Course Details</h6>
              {courses != null && (
                courses.getOwnRefundsResponse.map((course, index) => (
                  <Accordion.Item key={index} eventKey={`${index}`}>
                    <Accordion.Header>{course.courseTitle}</Accordion.Header>
                    <Accordion.Body>
                      <h6>Course Completion - {course.courseProgress}%</h6>
                      <h6>Admin Comment - {course.adminComment ?? 'N/A'}</h6>
                      <h6>Admin Actions - {course.adminAction}</h6>
                      <h6>Requested Date : {course.requestDate}</h6>
                      <h6>Refunded Amount : {course.refundAmount}</h6>
                    </Accordion.Body>
                  </Accordion.Item>
                ))
              )}
</div>
            </Accordion>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default RefundsList;
