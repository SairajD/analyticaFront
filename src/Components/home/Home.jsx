import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useSelector} from 'react-redux';
import TwitterDash from './TwitterDash';
import InstagramDash from './InstagramDash';

const drawerWidth = 240;

const documentID = '604866549c7f42544d67f493'

const useStyles = makeStyles((theme) => ({
    homeRoot: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth
    },
    homeToolbar: theme.mixins.toolbar,
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
    '@media only screen and (max-width: 600px)':{
      homeRoot: {
        width: "100%",
        marginLeft:0,
      },
    }
  }));

  

  export default function Home() {
    const classes = useStyles();
    const socialLoc = useSelector(state => state.changeSocial);
    

    const socialDisplayData = ()=>{
        if(socialLoc==="Twitter")
        {
            return (<TwitterDash/>)
        }
        else if(socialLoc==="Instagram")
        {
            return (<InstagramDash/>)
        }
    }

  
    return (
      <div className={classes.homeRoot}>
        <CssBaseline />
        <div className={classes.homeToolbar}/>
        {socialDisplayData()}
      </div>
    );
  }