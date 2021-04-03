import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TimelineIcon from '@material-ui/icons/Timeline';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import BackupIcon from '@material-ui/icons/Backup';
import HistoryIcon from '@material-ui/icons/History';
import FaceIcon from '@material-ui/icons/Face';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import ProfilePic from "./prof-pic.jpg";
import Typography from '@material-ui/core/Typography';
import {useDispatch} from 'react-redux';
import {dashLoc} from '../reduxStore/actions/addTweets';
import cookies from 'react-cookies'


const drawerWidth = 240;

const SidebarData = [
    {
        text:"Home",
        icon:<DashboardIcon/>,
        path:"/Dashboard"
    },
    {
        text:"Timeline",
        icon:<TimelineIcon/>,
        path:"/Dashboard/Timeline"
    },
    {
        text:"Trend",
        icon:<WhatshotIcon/>,
        path:"/Dashboard"
    },
    {
        text:"Upload",
        icon:<BackupIcon/>,
        path:"/Dashboard"
    },
    {
        text:"History",
        icon:<HistoryIcon/>,
        path:"/Dashboard"
    },
    {
        text:"Followers",
        icon:<FaceIcon/>,
        path:"/Dashboard"
    },
    {
        text:"Sponsors",
        icon:<MonetizationOnIcon/>,
        path:"/Dashboard"
    },
    {
        text:"Settings",
        icon:<SettingsIcon/>,
        path:"/Dashboard/Settings"
    }
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  userInfo: {
    paddingLeft: theme.spacing(4),    
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: theme.palette.secondary.light,
  },
  profilePic: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  userEmail: {
    marginTop: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  linkStyle:{
    textDecoration: "none",
    color: theme.palette.text.primary
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [dash, setDash] = useState("Home"); 
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.userInfo}>
          <Avatar alt="Profile Picture" src={ProfilePic} className={classes.profilePic}/>
          <Typography variant="body1" align="left" className={classes.userEmail} color="textSecondary">
           {cookies.load('Username')}
          </Typography>
        </div>
        <List>
          {SidebarData.map((item, index) => (
            <Link to={item.path} className={classes.linkStyle} key={index}>
            <ListItem button onClick={()=>dispatch(dashLoc(item.text))}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
