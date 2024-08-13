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
import { GetNotifications } from 'api';
import { useState } from 'react';
import moment from 'moment';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 16,
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

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: '350px',
        py: 0,
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
          maxWidth: 350
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
      {myNotifications.length > 0 ? (
        myNotifications.map((notification, index) => (
          <span key={index}>
            <ListItemWrapper style={{ width: '350px' }}>
              <ListItem alignItems="center">
                <div>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        color: '#fff',
                        backgroundColor: '#d42a34',
                        border: 'none',
                        borderColor: theme.palette.success.main
                      }}
                    >
                      <NotificationsIcon />
                    </Avatar>
                  </ListItemAvatar>
                </div>
                <ListItemSecondaryAction>
                  <Grid container justifyContent="d-flex">
                    <Grid>
                      <Typography variant="h6">
                        <span className="d-flex ">
                          {notification.notification.length > 35
                            ? `${notification.notification.substring(0, 35)}...`
                            : notification.notification}
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItemSecondaryAction>
              </ListItem>
              <Grid container direction="column" className="list-container">
                <Grid>
                  <Typography variant="caption">
                    <span className="d-flex justify-content-end">{moment(notification.notificationTime).startOf('hour').fromNow()}</span>
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
      )}
    </List>
  );
};

export default NotificationList;
