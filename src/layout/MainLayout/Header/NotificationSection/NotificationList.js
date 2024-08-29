// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';

// assets
import { IconBrandTelegram, IconBuildingStore, IconMailbox, IconPhoto } from '@tabler/icons';
import NotificationsIcon from '@mui/icons-material/Notifications';
import User1 from 'assets/images/users/user-round.svg';
import { useEffect } from 'react';
import { GetNotifications, UpdateNotifications } from 'api';
import { useState } from 'react';
import moment from 'moment';

import CircularProgress from '@mui/material/CircularProgress'; // Import the spinner component

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 12,
  '&:hover': {
    background: theme.palette.primary.light
  },
  '& .MuiListItem-root': {
    padding: 0
  }
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {
  const theme = useTheme();
  const [myNotifications, setmyNotifications] = useState([]);

  const calculateTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now - date) / 1000);
  
    const years = Math.floor(seconds / 31536000);
    const months = Math.floor((seconds % 31536000) / 2592000);
    const days = Math.floor((seconds % 2592000) / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
  
    if (years > 0) return years === 1 ? 'A year ago' : `${years} years ago`;
    if (months > 0) return months === 1 ? 'A month ago' : `${months} months ago`;
    if (days > 0) return days === 1 ? 'A day ago' : `${days} days ago`;
    if (hours > 0) return hours === 1 ? 'An hour ago' : `${hours} hours ago`;
    if (minutes > 0) return minutes === 1 ? 'A minute ago' : `${minutes} minutes ago`;
    return 'just now';
  };

  const chipSX = {
    height: 24,
    padding: '0 6px'
  };
  const chipErrorSX = {
    ...chipSX,
    color: theme.palette.orange.dark,
    backgroundColor: theme.palette.orange.light,
    marginRight: '5px'
  };

  const chipWarningSX = {
    ...chipSX,
    color: theme.palette.warning.dark,
    backgroundColor: theme.palette.warning.light
  };

  const chipSuccessSX = {
    ...chipSX,
    color: theme.palette.success.dark,
    backgroundColor: theme.palette.success.light,
    height: 28
  };

  useEffect(() => {
    GetNotifications(setmyNotifications);
  }, []);

  const handleNotifications = (code) => {
    UpdateNotifications(code);
    GetNotifications(setmyNotifications);
    window.location.href = "/notifications";

  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: '350px',
        minWidth: '250px',
        paddingTop : '0px',
        px: 0,
        py: 0,
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
          maxWidth: 350
        },
        '& .MuiListItemSecondaryAction-root': {
          top: 0
        },
        '& .MuiDivider-root': {
          my: 0
        },
        '& .list-container': {
          pl: 7
        }
      }}
    >
      {myNotifications && (
        <ListItemWrapper>
          <ListItem alignItems="center">
            <ListItemText
              primary={
                <Typography variant="subtitle1">
                  <div className="row">
                    <span className="mx-0" style={{justifyContent: "space-around", display: "flex",   alignItems: "center"}}>
                      {' '}
                      <NotificationsIcon className="mx-2" /> You Have{' '}
                      {myNotifications.filter((notification) => !notification.isRead).length} New Notifications{' '}
                      <Button
                        className="edu-btn btn-small"
                        onClick={() => {
                          window.location.href = '/notificationView';
                        }}
                      >
                        View All
                      </Button>
                    </span>
                  </div>
                </Typography>
              }
            />
          </ListItem>
        </ListItemWrapper>
      )}
      {myNotifications.filter((notification) => !notification.isRead).length ? (
        myNotifications.length > 0 ? (
          myNotifications
            .filter((notification) => !notification.isRead)
            .map((notification, index) => (
              <span key={index}>
                <ListItemWrapper style={{ width: 'auto' }} onClick={() => handleNotifications(notification.notificationCode)}>
                  <div>
                    <ListItem alignItems="center">
                      <div>
                        <ListItemAvatar>
                          <Avatar
                            sx={{
                              color: 'red',
                              backgroundColor: 'transparent',
                              border: 'none',
                              borderColor: theme.palette.success.main,                            
                            }}
                          >
                            <NotificationsIcon />
                          </Avatar>
                        </ListItemAvatar>
                      </div>
                      <ListItemSecondaryAction>
                        <Grid justifyContent="d-flex">
                          <Grid>
                            <Typography variant="h6">
                              <span className="d-flex me-0 ms-5 pt-4 text-end" >
                                {notification.notification}
                                
                              </span>
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </div>
                  <Grid container direction="column" className="list-container">
                    <Grid>
                      <Typography variant="caption">
                        <span className="d-flex justify-content-end">
                          {calculateTimeAgo(notification.notificationTime)}
                        </span>
                      </Typography>
                    </Grid>                 
                  </Grid>
                </ListItemWrapper>
                <Divider />
              </span>
            ))
        ) : (
          <ListItemWrapper>
            <ListItem alignItems="center">
              <ListItemText primary={<Typography variant="subtitle1">No Notifications</Typography>} />
            </ListItem>
          </ListItemWrapper>
        )
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: '350px', height: '100px' }} // Setting width to 350px and height to 100px for better visibility
        >
          <CircularProgress /> {/* Spinner for loading state */}
        </div>
      )}
    </List>
  );
};

export default NotificationList;
