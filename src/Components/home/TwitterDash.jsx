import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SimpleCard from '../socialDataCards/SocialDataCards';
import Facebook from "./facebook.png"
import Instagram from "./instagram.png"
import Linkedin from "./linkedin.png"
import Twitter from "./twitter.png"
import DougnutChart from '../charts/doughnut/DougnutChart';
import LineChart from '../charts/line/LineChart';
import axios from 'axios'
import { Grid, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import Paper from '@material-ui/core/Paper';
const drawerWidth = 240;

const documentID = '604866549c7f42544d67f493'

const useStyles = makeStyles((theme) => ({
    dataSpace:{
      margin:theme.spacing(2),
      padding:theme.spacing(2),
    },
    feedSpace:{
      margin:theme.spacing(2),
      height:"120vh",
      overflowY:"scroll",
      padding: '6px 16px',
    },
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
    },
    timelineContent:{
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
      wordWrap: 'break-word',
      width:"18vw"
  },
  likeComment:{
      display:"flex",
      justifyContent:"flex-start",
      marginTop:theme.spacing(2),
      marginBottom:theme.spacing(2),
  },
  likeComItem:{
      marginLeft:theme.spacing(4),
      marginRight:theme.spacing(2),
  },
  timelineTitle:{      
      marginLeft: theme.spacing(2),
  },
  socialSnippets:{
      marginTop:theme.spacing(2),
      marginBottom:theme.spacing(2),
      display:"flex",
  },
  socialSnippetIcon:{
    backgroundColor:theme.palette.primary.main,
  },  
  socialSnippetIconInner:{
    color:"#ffffff"
  }
  }));

  

  export default function TwitterDash() {
    const classes = useStyles();


    
    const [facebookData, setFacebookData] = useState({series:[],options:{labels:[],
      dataLabels:{
      enabled: false,
  },
  legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center', 
      floating: false,
      fontSize: '12px',
      fontWeight: 400,
      inverseOrder: false,
      offsetX: 0,
      offsetY: 0,
      markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          radius: 24,
      },
      itemMargin: {
          horizontal: 5,
          vertical: 5
      },
      onItemClick: {
          toggleDataSeries: true
      },
      onItemHover: {
          highlightDataSeries: true
      },
  },
  chart: {
      animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      }
  }}})
 
  const [lineData, setLineData] = useState({series:[{data:[]}],options:{xaxis:{categories:[]}}})
  const [socialInfo, setSocialInfo] = useState([{caption:"", likes:0, comments:0, timestamp:0, thumbnail:""}])

  // const facebookChart = () => {
  //     let positive
  //     let negative
  //     axios
  //         .get(`https://analytica-parsb-api.herokuapp.com/analytica/instagram/tags/${documentID}/download`)
  //         .then(response => {

  //             positive = parseInt(response.data.numberOfPositives)
  //             negative = parseInt(response.data.numberOfNegatives)
  //             setFacebookData({
  //                 series:[positive, negative],
  //                 options:{
  //                     labels:["positive feedback", "negative feedback"]
  //                 },
                  
  //             })
  //             setLineData({
  //                 series:[{data:[positive, negative]}],
  //                 options:{xaxis:{categories:[positive, negative]}}
  //             })
                              
  //         })
  //         .catch(err => {
  //             console.log(err)
  //         })
          
  //         }
  

 

  // useEffect(() => {
      
  //     facebookChart();
                                                                           
  // }, [])

  // const socialData = () => {
  
  //     axios
  //         .get(`https://analytica-parsb-api.herokuapp.com/analytica/instagram/tags/${documentID}/download`)
  //         .then(response => {
  //             const negData = response.data.negatives;
  //             setSocialInfo(negData);
  //         })
  //         .catch(err => {
  //             console.log(err);
  //         })
          
              
  //         }
  
  
  
  
  // useEffect(() => {
      
  //     socialData();
                                                                           
  // }, [])

  

  
    return (
      <div className={classes.twitterRoot}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={8}>
            <Paper elevation={3} className={classes.dataSpace}>
            <Grid container>
              <Grid item xs={3}>
                <Typography align="center">
                  Twitter
                </Typography>
                <Typography align="center">
                  Likes
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography align="center">
                  Likes
                </Typography>
                <Typography align="center">
                  Likes
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography align="center">
                  Likes
                </Typography>
                <Typography align="center">
                  Likes
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography align="center">
                  Likes
                </Typography>
                <Typography align="center">
                  Likes
                </Typography>
              </Grid>
            </Grid>
            </Paper>
            <Grid container>
              <Grid item xs={6} align="center">
                <Paper elevation={3} className={classes.dataSpace}>
                  <Typography variant="body1" color="textPrimary"> 
                    Sentiment Analysis
                  </Typography>
                  <DougnutChart data = {facebookData} width = "250" height = "300"/>
                </Paper>
              </Grid>
              <Grid item xs={6} align="center">
                <Paper elevation={3} className={classes.dataSpace}>
                  <Typography variant="body1" color="textPrimary"> 
                    Sentiment Analysis
                  </Typography>
                  <DougnutChart data = {facebookData} width = "250" height = "300"/>
                </Paper>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6} align="center">
                <Paper elevation={3} className={classes.dataSpace}>
                  <Typography variant="body1" color="textPrimary"> 
                    Sentiment Analysis
                  </Typography>
                  <DougnutChart data = {facebookData} width = "250" height = "300"/>
                </Paper>
              </Grid>
              <Grid item xs={6} align="center">
                <Paper elevation={3} className={classes.dataSpace}>
                  <Typography variant="body1" color="textPrimary"> 
                    Sentiment Analysis
                  </Typography>
                  <DougnutChart data = {facebookData} width = "250" height = "300"/>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} className={classes.feedSpace} >
              {socialInfo.map((item, index) => (
      
                  <div className={classes.socialSnippets} key={index}>
                      <Avatar className={classes.socialSnippetIcon}>
                        <FacebookIcon className={classes.socialSnippetIconInner}/>
                      </Avatar>
                      <div>
                        <Typography className={classes.timelineTitle} variant="h6" component="h1">
                          {item.sentiment}
                        </Typography>
                        <Typography className={classes.timelineContent}>{item.caption}</Typography>
                        <div className={classes.likeComment}>
                            <Typography className={classes.likeComItem}>{item.likes}</Typography>
                            <ThumbUpIcon color="primary"/>
                            <Typography className={classes.likeComItem}>{item.comments}</Typography>
                            <CommentIcon color="primary"/>
                        </div>
                  <Divider/>
                        </div>
                  </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }