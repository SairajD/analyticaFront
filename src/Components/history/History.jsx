import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useDispatch} from 'react-redux';
import SearchGraph from '../searchDisplay/SearchGraph';
import {dashLoc} from '../reduxStore/actions/addTweets';


const drawerWidth = 240;

const documentID = '604865dc9c7f42544d67f492'

const useStyles = makeStyles((theme) => ({
  historyRoot: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth
  },
  historyToolbar: theme.mixins.toolbar,
}));

function History() {
    
	const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
    
        dispatch(dashLoc("History"));
                                                                               
      }, [])

    return (
        <div className={classes.historyRoot}>
    <CssBaseline />
    <div className={classes.historyToolbar}/>
    
    <SearchGraph/>
    
    </div>
    )
}

export default History
