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
  const [myNotifications, setmyNotifications] = useState([])

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
    GetNotifications(setmyNotifications)
  }, [])

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 330,
        py: 0,
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
          maxWidth: 300
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
  
  {myNotifications.length > 0 ? myNotifications.map((notification,index) => (
      <span key={index}>
        <ListItemWrapper>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.success.dark,
                  backgroundColor: theme.palette.success.light,
                  border: 'none',
                  borderColor: theme.palette.success.main
                }}
              >
                <NotificationsIcon stroke={1.5} size="1.3rem" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Typography variant="subtitle1">New</Typography>} />
            <ListItemSecondaryAction>
              <Grid container justifyContent="flex-end">
                <Grid item xs={12}>
                  <Typography variant="caption" display="block" gutterBottom>
                    {moment(notification.notificationTime).startOf('hour').fromNow()}
                  </Typography>
                </Grid>
              </Grid>
            </ListItemSecondaryAction>
          </ListItem>
          <Grid container direction="column" className="list-container">
            <Grid item xs={12} sx={{ pb: 2 }}>
              <Typography variant="subtitle2">{notification.notification}</Typography>
            </Grid>
            {notification.isRead == false && (
            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Chip label="Unread" sx={chipErrorSX} />
                </Grid>
              </Grid>
            </Grid>
            )}
          </Grid>
        </ListItemWrapper>
        <Divider />
      </span>
  )) : 
  <ListItemWrapper>
          <ListItem alignItems="center">
          <ListItemText primary={<Typography variant="subtitle1">No Notifications</Typography>} />
          </ListItem>
    </ListItemWrapper>
  }

    </List>
  );
};

export default NotificationList;
