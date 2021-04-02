import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useSelector} from 'react-redux';
import SearchComponent from './SearchComponent';


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
  }
}));

export default function SearchDataDisplay() {
  const classes = useStyles();
  const socialInfoNegatives = useSelector(state => state.negativeTweets);  
  const socialInfoPositives = useSelector(state => state.positiveTweets);



  return (
    <div className={classes.timelineRoot}>
    <CssBaseline />
    <div className={classes.timelineToolbar}/>
    
    
    {socialInfoNegatives.map((item, index) => (
      <SearchComponent key={index} sentiment={item.sentiment} caption={item.caption} likes={item.likes} comments={item.comments}/>

      ))}

{socialInfoPositives.map((item, index) => (
      <SearchComponent key={index} sentiment={item.sentiment} caption={item.caption} likes={item.likes} comments={item.comments}/>
  ))}
    
    </div>
  );
}

