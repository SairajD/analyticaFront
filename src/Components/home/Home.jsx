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
    Facebook: {
      width: 250,
      height: 150,
      backgroundColor: "#5F77A9",
      borderRadius: theme.spacing(1)
    },
    Twitter: {
      width: 250,
      height: 150,
      backgroundColor: "#30B9EE",
      borderRadius: theme.spacing(1)
    },
    Linkedin: {
      width: 250,
      height: 150,
      backgroundColor: "#3B8EB6",
      borderRadius: theme.spacing(1)
    },
    Instagram: {
      width: 250,
      height: 150,
      backgroundColor: "#F48451",
      borderRadius: theme.spacing(1)
    },    
    socialCards: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: theme.spacing(3),
    },
    pieChart: {
        width: 250,
        height: 340,
        backgroundColor: "#ffffff",
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop:theme.spacing(3)
    },
    lineChart: {
        width: 650,
        height: 340,
        backgroundColor: "#ffffff",
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop:theme.spacing(3)
    },
    chartRow:{
        display:"flex"
    },
    paper: {
        width:460,
        padding: '6px 16px',
        margin: theme.spacing(3),
        borderRadius:theme.spacing(1),
        height:"60vh",
        overflowY:"scroll"
    },
    timelineContent:{
        width: 360,
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        flexWrap: 'wrap',
        wordWrap: 'break-word',
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
        color: theme.palette.getContrastText(theme.palette.primary.main),
        backgroundColor: theme.palette.primary.main
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