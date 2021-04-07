import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import { dashLoc } from '../reduxStore/actions/addTweets';
import Axios from 'axios'
import { Grid, Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;
const documentID = '604865dc9c7f42544d67f492'
const url = ' https://analytica-parsb-api.herokuapp.com'

const useStyles = makeStyles((theme) => ({
  followersRoot: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth
  },
  followersToolbar: theme.mixins.toolbar,
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
  profilePic: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginBottom:theme.spacing(4)
  },
  followerContainer:{
    margin:theme.spacing(4),
    paddingTop:theme.spacing(4),
    height:"30vh"
  },
  followerText:{
    fontSize:theme.spacing(2),
    fontWeight:"bold"
  }
}));

function Followers(){
    const dispatch = useDispatch();
    const classes = useStyles();
    const [followersData, setFollowersData] = useState([]);

    const getFollowers = ()=>{
      Axios.get(url+"/Analytica/instagram/personalprofile/getfollowers")
      .then((res)=>{
        let resArr=[];
        res.data.data.forEach(el => {
          resArr.push({
            fullName:el.full_name,
            id:el.id,
            profilePic:el.profile_pic_url,
            userName:el.username
          })
        });
        setFollowersData(resArr);
        
      })
      .catch(err=>{
        console.log("Error : "+ err);
      })
    }
    useEffect(() => {

        dispatch(dashLoc("Followers"));
    
      }, [])
    useEffect(() => {

      getFollowers();
  
    }, [])

      return (
        <div className={classes.followersRoot}>
          <CssBaseline />
          <div className={classes.followersToolbar} />
             <Grid container>
               {followersData.map((el, index)=>{
                 console.log(el.profilePic)
                 return(
                  <Grid item xs={3} key={index} align="center">
                  <Paper elevation={3} className={classes.followerContainer}>
                    <Avatar alt="Profile Picture" src={el.profilePic} className={classes.profilePic}/>
                    <Typography className={classes.followerText}>
                      {el.fullName}
                    </Typography>
                  </Paper>
                  </Grid>
                 )})}
                 
             </Grid>
        </div>
      )
}

export default Followers