import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import {useSelector} from 'react-redux';
import Axios from 'axios';
import cookies from 'react-cookies';


const drawerWidth = 240;
let usernameDisplay='gowithbang2'
const documentID = '604866549c7f42544d67f493'
const url='https://analytica-parsb-api.herokuapp.com'

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

function Character() {
    (function() {
        let tokenValue= cookies.load('Token') ;
        if (tokenValue) {
          Axios.defaults.headers.common['Authorization'] = tokenValue;
        } else {
          Axios.defaults.headers.common['Authorization'] = null;
        
        }
      })();

    const classes = useStyles();
    const [userData, setUserData] = useState({userName:"", profilePic:""})
    const [charData, setCharData] = useState([])

    const similarCharacters = () => {
        let charArr=[];
        let userObjt={};

        Axios
                .get(url+"/analytica/analysis/profile/getsimilarcharacters/jeffbezos" )
                .then(response => {
                  console.log(response.data);
                  userObjt.userName="Jeff Bezos";
                  userObjt.profilePic=response.data.profilePic;
                  
                  response.data.chainedData.forEach(el=>{
                    charArr.push({
                      userName:el.full_name,
                      profilePic:el.profile_pic_url
                    })
                  })                                  
                })
                .catch(err => {
                    console.log(err)
                })
                console.log("yeah baby")
                console.log(userObjt)
                console.log(charArr)
                setUserData(userObjt)
                setCharData(charArr)
      }
      
      useEffect(() => {
        similarCharacters();
      
      }, [])

    // const userCharData=(data)=>{
    //     data.forEach(el=>{
    //         profilePic.push(require(el.profilePic))
    //         userName.push(el.userName)
    //     })
    // }


    return (
        <div className={classes.characterContainer}>            
            <Avatar src={userData.profilePic} alt={userData.userName} className={classes.userProfile}/> 
            {charData.map((it, idx)=>{
                return <Avatar key={idx} src={it.profilePic} alt={it.userName} className={classes.userMatch}/>
        })}
        </div>
    )
}

export default Character