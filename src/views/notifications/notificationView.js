import React from 'react';
import MaterialTable from 'material-table';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { GetRefunds , GetNotifications} from 'api';
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

let NotificationData = [];

const NotificationView = () => {
  const theme = useTheme();
  const [myNotifications, setmyNotifications] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        GetNotifications(setmyNotifications);
      NotificationData = myNotifications.map((notification, index) => {
        // Create a new object with modified property
        return {
          ...notification,
          id: index + 1,
          notificationTitle: notification.notification,
          date: moment(notification.purchasedDate).format('MMM DD,YYYY'),
          
        };
      });
    }, 1000);
  }, [NotificationData]);



  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
          Notifications
          </Typography>
          <MaterialTable
            title=""
            columns={[
              { title: 'ID', field: 'id' },
              { title: 'Course Title', field: 'notificationTitle' },
              { title: 'Date', field: 'date' },          
            ]}
            data={NotificationData}
          />
        </CardContent>
      </Card>

    </div>
  );
};

export default NotificationView;
