import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    characterContainer:{
        marginTop:theme.spacing(2),
        position:"relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"45vh"
    },    
    userProfile:{
        position:"absolute",
        width:theme.spacing(8),
        height:theme.spacing(8),
    },
    userMatch:{
        position:"absolute",
        width:theme.spacing(6),
        height:theme.spacing(6),
        top:"5vh",
        '&:nth-child(2)':{
            top:"15vh",
            left:"5vh"
        },
        '&:nth-child(3)':{
            top:"15vh",
            left:"35vh"
        },
        '&:nth-child(4)':{
            top:"30vh",
            left:"10vh"
        },
        '&:nth-child(5)':{
            top:"30vh",
            left:"30vh"
        }
    }
  }));

function Character(props) {
    const classes = useStyles();

    const avatarDisp = (data) => {
        data.map((it, idx)=>{
            return(
                    <Avatar key={idx} src={it.profilePic} alt={it.userName} className={classes.userMatch}/>
            )
        })
    }

    return (
        <div className={classes.characterContainer}>
            <Avatar src={props.userData.profilePic} alt={props.userData.userName} className={classes.userName}/>
            {avatarDisp(props.charData)}
        </div>
    )
}

export default Character