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
import Axios from 'axios'
import { Grid, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import  BarChart  from '../charts/bar/BarChart';
import TwitterIcon from '@material-ui/icons/Twitter';
import cookies from 'react-cookies'
import Logo from '../logo/Logo';
//constants

const drawerWidth = 240;
let usernameDisplay='gowithbang2'
const documentID = '604866549c7f42544d67f493'
const url='https://analytica-parsb-api.herokuapp.com'
//https://analytica-parsb-api.herokuapp.com
const useStyles = makeStyles((theme) => ({
    dataSpace:{
      margin:theme.spacing(2),
      padding:theme.spacing(2),      
      height:"55vh"
    },
    textDataSpace:{
      margin:theme.spacing(2),
      padding:theme.spacing(2),
      height:"15vh"
    },
    feedSpace:{
      margin:theme.spacing(2),
      height:"135vh",
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
  },
  textData:{
    marginTop:theme.spacing(2)
  }
  }));

  

  export default function TwitterDash() {
    const classes = useStyles();

    const [tweetData, settweetData] = useState({})
    const [tweetFeeds, settweetFeeds] = useState([])
    
  //   const [tweetData, settweetData] = useState({series:[],options:{labels:[],
  //     dataLabels:{
  //     enabled: false,
  // },
  // legend: {
  //     show: true,
  //     position: 'bottom',
  //     horizontalAlign: 'center', 
  //     floating: false,
  //     fontSize: '12px',
  //     fontWeight: 400,
  //     inverseOrder: false,
  //     offsetX: 0,
  //     offsetY: 0,
  //     markers: {
  //         width: 12,
  //         height: 12,
  //         strokeWidth: 0,
  //         strokeColor: '#fff',
  //         radius: 24,
  //     },
  //     itemMargin: {
  //         horizontal: 5,
  //         vertical: 5
  //     },
  //     onItemClick: {
  //         toggleDataSeries: true
  //     },
  //     onItemHover: {
  //         highlightDataSeries: true
  //     },
  // },
  // chart: {
  //     animations: {
  //         enabled: true,
  //         easing: 'easeinout',
  //         speed: 800,
  //         animateGradually: {
  //             enabled: true,
  //             delay: 150
  //         },
  //         dynamicAnimation: {
  //             enabled: true,
  //             speed: 350
  //         }
  //     }
  // }}})
 
  const [tweetLineData, settweetLineData] = useState({series:[{data:[]}],options:{xaxis:{categories:[]}}})
  const [socialInfo, setSocialInfo] = useState([{caption:"", likes:0, comments:0, timestamp:0, thumbnail:""}])
//functions

  const instaCharts = () => {
    (function() {
      let tokenValue= cookies.load('Token') ;
      if (tokenValue) {
        Axios.defaults.headers.common['Authorization'] = tokenValue;
      } else {
        Axios.defaults.headers.common['Authorization'] = null;
      
      }
    })();
      Axios
          .get(url+'/analytica/twitter/analysis')
          .then(response => {
                settweetLineData({
                  series:[{data:response.data.postLikes}],
                  options:{
                    xaxis:{
                      categories:response.data.postdates
                    }
                  }
                
                })

                settweetData({
                  "engagement": response.data.engagement,
                  "likes": response.data.likes,
                  "comments": response.data.comments,
                  "posts": response.data.posts,
                  "followers": response.data.followers,
                  "postFrequency": response.data.postFrequency,
                })
              
                              
          })
          .catch(err => {
              console.log(err)
          })
          
          }
  
const userFeeds= async ()=>{
  const results=await Axios.get(url+'/analytica/twitter/personal/feed')
  let feedArray=[];
  console.log( results.data.data.user.edge_web_feed_timeline.edges[0])
  results.data.data.user.edges.forEach((el)=>{
      let obj={
        text:el.node.edge_media_to_caption.edges[0].node.text,
        commentsCount:el.node.edge_media_to_comment.count,
        image:el.node.display_url,
        likesCount:222
      }
      feedArray.push(obj)
  })
  console.log(feedArray)
    settweetFeeds(feedArray)

}
 

  useEffect(() => {
      
    instaCharts();
 
                                                                           
  }, [])
  useEffect(() => {
      
   
    userFeeds();
                                                                           
  }, [])
  const socialData = () => {
  
      Axios
          .get(`https://analytica-parsb-api.herokuapp.com/analytica/instagram/tags/${documentID}/download`)
          .then(response => {
              const negData = response.data.negatives;
              setSocialInfo(negData);
          })
          .catch(err => {
              console.log(err);
          })
          
              
          }
  
  
  
  
  useEffect(() => {
      
     socialData();
                                                                           
  }, [])

  
const EngagementData={
  series:[{data:[0.047,0.059,tweetData.engagement,0.05]}],options:{xaxis:{categories:["World","India","User","Optimal"]},

},

}
const postFrequencyData={
  series:[{data:[2,3,tweetData.postFrequency,1]}],options:{xaxis:{categories:["World","India","User","Optimal"]}}
}
  
  
    return (
      <div className={classes.twitterRoot}>
        <CssBaseline />  
        <Grid container>
          <Grid item xs={8}>
            <Paper elevation={3} className={classes.textDataSpace}>
            <Grid container>
              <Grid item xs={2}>
                <Typography align="center">
                Engagement
                </Typography>
                <Typography align="center" className={classes.textData}>
                  {tweetData.engagement}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center">
                  Likes
                </Typography>
                <Typography align="center" className={classes.textData}>
                {tweetData.likes}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center">
                  Comments
                </Typography>
                <Typography align="center" className={classes.textData}>
                {tweetData.comments}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center">
                  Posts
                </Typography>
                <Typography align="center" className={classes.textData}>
                {tweetData.posts}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center">
                  Followers
                </Typography>
                <Typography align="center" className={classes.textData}>
                {tweetData.followers}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center">
                  Post Frequency
                </Typography>
                <Typography align="center" className={classes.textData}>
                {tweetData.postFrequency}
                </Typography>
              </Grid>
            </Grid>
            </Paper>
            <Grid container>
              <Grid item xs={6} align="center">
                <Paper elevation={3} className={classes.dataSpace}>
                  <Typography variant="body1" color="textPrimary"> 
                    Likeability Analysis
                  </Typography>
                  <LineChart data = {tweetLineData} width = "280" height = "300"/>
                </Paper>
              </Grid>
              <Grid item xs={6} align="center">
                <Paper elevation={3} className={classes.dataSpace}>
                  <Typography variant="body1" color="textPrimary"> 
                   Engagement Details
                  </Typography>
                  <BarChart data = {EngagementData} width = "280" height = "300"/>
                </Paper>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6} align="center">
                <Paper elevation={3} className={classes.dataSpace}>
                  <Typography variant="body1" color="textPrimary"> 
                   Frequency Details
                  </Typography>
                  <BarChart data = {postFrequencyData} width = "280" height = "300"/>
                </Paper>
              </Grid>
              <Grid item xs={6} align="center">
                <Paper elevation={3} className={classes.dataSpace}>
                  <Typography variant="body1" color="textPrimary"> 
                    Sentiment Analysis
                  </Typography>
                  <DougnutChart data = {tweetLineData} width = "280" height = "300"/>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} className={classes.feedSpace} >
              {tweetFeeds.map((item, index) => (
   
                  <div className={classes.socialSnippets} key={index}>
                      <Avatar className={classes.socialSnippetIcon}>

                        <TwitterIcon className={classes.socialSnippetIconInner}/>

                      </Avatar>
                      <div>
                        <Typography className={classes.timelineTitle} variant="h6" component="h1">
                          {item.sentiment}
                        </Typography>
                        
                        <Typography className={classes.timelineContent}>{item.text}</Typography>
                        <div className={classes.likeComment}>
                            <Typography className={classes.likeComItem}>{item.likesCount}</Typography>
                            <ThumbUpIcon color="primary"/>
                            <Typography className={classes.likeComItem}>{item.commentsCount}</Typography>
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