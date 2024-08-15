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
        maxWidth: '450px',
        py: 0,
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
          maxWidth: 450
        },
        '& .MuiListItemSecondaryAction-root': {
          top: 22
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
                    <span className="mx-0">
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
                <ListItemWrapper style={{ width: '350px' }} onClick={() => handleNotifications(notification.notificationCode)}>
                  <div>
                    <ListItem alignItems="center">
                      <div>
                        <ListItemAvatar>
                          <Avatar
                            sx={{
                              color: 'red',
                              backgroundColor: 'transparent',
                              border: 'none',
                              borderColor: theme.palette.success.main
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
                              <span className="d-flex float-left">
                                {notification.notification.length > 35
                                  ? `${notification.notification.substring(0, 35)}...`
                                  : notification.notification}
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
                          {moment(notification.notificationTime).startOf('hour').fromNow()}
                        </span>
                      </Typography>
                    </Grid>
                    {/* {notification.isRead == false && (
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item>
                        <Chip label="Unread" sx={chipErrorSX} />
                      </Grid>
                    </Grid>
                  </Grid>
                )} */}
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
