import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {dashLoc} from '../reduxStore/actions/addTweets';
import Axios from 'axios'
import cookies from 'react-cookies'

const drawerWidth = 240;

const url = ' https://analytica-parsb-api.herokuapp.com'

const useStyles = makeStyles((theme) => ({
  timelineRoot: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth
  },
  timelineToolbar: theme.mixins.toolbar,
  paper: {
    padding: '6px 16px',
  },
  timelineContent:{
      width : 500,
      marginBottom: theme.spacing(2),
      flexWrap: 'wrap',
      wordWrap: 'break-word',
  },
  likeComment:{
      display:"flex",
      justifyContent:"center",
      marginTop:theme.spacing(2),
      marginBottom:theme.spacing(2),
  },
  likeComItem:{
      marginLeft:theme.spacing(4),
      marginRight:theme.spacing(2),
  },
  timelineTitle:{
      marginTop:theme.spacing(2),
      marginBottom:theme.spacing(2),
  },
  timelineBtn:{
    color:"#ffffff"
  }
}));

export default function CustomTimeline() {

  (function () {
    let tokenValue = cookies.load('Token');
    if (tokenValue) {
      Axios.defaults.headers.common['Authorization'] = tokenValue;
    } else {
      Axios.defaults.headers.common['Authorization'] = null;

    }
    console.log(tokenValue)
  })();

  const dispatch = useDispatch();
  const classes = useStyles();
  const [timelineData, setTimelineData] = useState([{caption:"", likeCount:0, commentCount:0, timeStamp:0, sMedia:""}])
  
  const socialData = () => {
    
    axios
        .get(url+`/Analytica/commonPosts/getPosts`)
        .then(response => {
            const data= response.data;
            setTimelineData(data);
            console.log(response.data)
        })
        .catch(err => {
            console.log(err);
        })
        
            
}




useEffect(() => {
    
    socialData();
                                                                         
}, [])

useEffect(() => {
    
  dispatch(dashLoc("Timeline"));
                                                                         
}, [])

const getIcon= (data)=>{
 
    if(data==="Instagram")
    {      
      return <InstagramIcon className={classes.timelineBtn}/>
    }
    if(data==="twitter")
    {
      return <TwitterIcon className={classes.timelineBtn}/>
    }
}


  return (
    <div className={classes.timelineRoot}>
    <CssBaseline />
    <div className={classes.timelineToolbar}/>
    
    <Timeline align="alternate">
    {timelineData.map((item, index) => (
      <TimelineItem key={index}>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(item.timeStamp)}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            {getIcon(item.sMedia)}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Paper elevation={3} className={classes.paper}>
            <Typography >{item.caption}</Typography>
            <div className={classes.likeComment}>
                <Typography className={classes.likeComItem}>{item.likeCount}</Typography>
                <ThumbUpIcon color="primary"/>
                <Typography className={classes.likeComItem}>{item.commentCount}</Typography>
                <CommentIcon color="primary"/>
            </div>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      ))}
    </Timeline>
    </div>
  );
}

