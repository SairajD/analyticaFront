import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import { dashLoc } from '../reduxStore/actions/addTweets';
import Axios from 'axios'
import cookies from 'react-cookies'
import { Grid, Paper } from '@material-ui/core';
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
}));

function Followers(){
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {

        dispatch(dashLoc("Followers"));
    
      }, [])

      return (
        <div className={classes.followersRoot}>
          <CssBaseline />
          <div className={classes.followersToolbar} />
             <Grid container>
                 <Grid item xs={4}>
                    <Paper elevation={3}>
                    	Follower Data
                    </Paper>
                 </Grid>
             </Grid>
        </div>
      )
}

export default Followers