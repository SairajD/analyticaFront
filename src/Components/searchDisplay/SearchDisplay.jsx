import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useSelector} from 'react-redux';
import SearchComponent from './SearchComponent';
import SearchGraph from './SearchGraph';
import {useDispatch} from 'react-redux';
import {dashLoc} from '../reduxStore/actions/addTweets';


const drawerWidth = 240;

const documentID = '604865dc9c7f42544d67f492'

const useStyles = makeStyles((theme) => ({
  timelineRoot: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth
  },
  timelineToolbar: theme.mixins.toolbar,
  paper: {
    padding: '6px 16px',
    margin: theme.spacing(3)
  },
  timelineContent:{
      width : 1000,
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
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
      marginLeft: theme.spacing(2),
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
}));

export default function SearchDataDisplay() {
	const dispatch = useDispatch();
  const classes = useStyles();
  const socialInfoNegatives = useSelector(state => state.negativeTweets);  
  const socialInfoPositives = useSelector(state => state.positiveTweets);
  const socialInfoNeutrals = useSelector(state => state.neutralTweets);
  const socialInstaInfoNegatives = useSelector(state => state.negativeInsta);  
  const socialInstaInfoPositives = useSelector(state => state.positiveInsta); 
  const socialInstaInfoNeutrals = useSelector(state => state.neutralInsta);
  const chartTweetData={
    options:{
      labels:["Positive", "Negative", "Neutral"],
      legend:{
        position:"bottom"
      }
    },
    series:[socialInfoPositives.length, socialInfoNegatives.length, socialInfoNeutrals.length]
  }
  const chartInstaData={
    options:{
      labels:["Positive", "Negative", "Neutral"],
      legend:{
        position:"bottom"
      }
    },
    series:[socialInstaInfoPositives.length, socialInstaInfoNegatives.length, socialInstaInfoNeutrals.length]
  }

  useEffect(() => {
    
    dispatch(dashLoc("SearchDisplay"));
                                                                           
  }, [])

  return (
    <div className={classes.timelineRoot}>
    <CssBaseline />
    <div className={classes.timelineToolbar}/>
    
    <SearchGraph  dataTweet={chartTweetData} dataInsta={chartInstaData}/>
    {socialInfoNegatives.map((item, index) => (
      <SearchComponent key={index} sentiment={item.sentiment} caption={item.caption} likes={item.likes} comments={item.comments}/>

      ))}

    {socialInfoPositives.map((item, index) => (
      <SearchComponent key={index} sentiment={item.sentiment} caption={item.caption} likes={item.likes} comments={item.comments}/>
    ))}

    {socialInfoNeutrals.map((item, index) => (
      <SearchComponent key={index} sentiment={item.sentiment} caption={item.caption} likes={item.likes} comments={item.comments}/>
    ))}
    
    {socialInstaInfoNegatives.map((item, index) => (
      <SearchComponent key={index} sentiment={item.sentiment} caption={item.caption} likes={item.likes} comments={item.comments}/>

      ))}

    {socialInstaInfoPositives.map((item, index) => (
      <SearchComponent key={index} sentiment={item.sentiment} caption={item.caption} likes={item.likes} comments={item.comments}/>
    ))}

    {socialInstaInfoNeutrals.map((item, index) => (
      <SearchComponent key={index} sentiment={item.sentiment} caption={item.caption} likes={item.likes} comments={item.comments}/>
    ))}
    
    </div>
  );
}

