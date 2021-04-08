import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import SearchGraph from '../searchDisplay/SearchGraph';
import { dashLoc } from '../reduxStore/actions/addTweets';
import { useSelector } from 'react-redux';
import SearchComponent from '../searchDisplay/SearchComponent';
import Axios from 'axios'
import cookies from 'react-cookies'
const drawerWidth = 240;

const documentID = '604865dc9c7f42544d67f492'
const url = ' https://analytica-parsb-api.herokuapp.com'
const useStyles = makeStyles((theme) => ({
  historyRoot: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth
  },
  historyToolbar: theme.mixins.toolbar,
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

function History() {
  (function () {
    let tokenValue = cookies.load('Token');
    if (tokenValue) {
      Axios.defaults.headers.common['Authorization'] = tokenValue;
    } else {
      Axios.defaults.headers.common['Authorization'] = null;

    }
    console.log(tokenValue)
  })();
  const [tweetData, setTweetData] = useState([]);
  const [instaData, setInStaData] = useState([]);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {

    dispatch(dashLoc("History"));

  }, [])

  const getTweeterDownload = async () => {

    try {
      var resultsArr2 = [];
      const result = await Axios.get(url + '/analytica/twitter/search/history')
      console.log("twitter result")
      console.log(result)
      result.data.forEach((el) => {

        
        var eachElement = {
          Querry: el.query,
          Positives: [],
          Negatives: [],
          Neutral: [],
          Time: el.updatedAt
        }

        el.results.forEach((al) => {

          let eachCaptionResult = {
            Caption: al.caption,
            Sentiment: al.sentiment
          }
          if (al.sentiment === "Positive") {
            eachElement.Positives.push(eachCaptionResult)
          }
          else if (al.sentiment === "Negative") {
            eachElement.Negatives.push(eachCaptionResult)

          }
          else {
            eachElement.Neutral.push(eachCaptionResult)

          }
        })

        resultsArr2.push({
          Querry: eachElement.Querry,
          CreatedAt: eachElement.Time,
          Positive: eachElement.Positives,
          Negative: eachElement.Negatives,
          Neutral: eachElement.Neutral,
          data:{
            options:{
              labels:["Positive", "Negative", "Neutral"],
              legend:{
                position:"bottom"
              }
            },
            series:[eachElement.Positives.length, eachElement.Negatives.length, eachElement.Neutral.length],
            
          }
        })
        
      })
      console.log("hi2")
      console.log(resultsArr2)
      setTweetData(resultsArr2)
    }
    catch (e) {
      console.log("error occured here : " + e)
    }
  }

  useEffect(() => {

    
    getTweeterDownload();

  }, [])

  const getInstadata = async () => {
    try {
      var resultsArr = [];
      const result = await Axios.get(url + '/analytica/instagram/All/tags/download')
      console.log(result)
      result.data.forEach((el) => {

        
        var eachElement = {
          Querry: el.query,
          Positives: [],
          Negatives: [],
          Neutral: [],
          Time: el.updatedAt
        }

        el.results.forEach((al) => {

          let eachCaptionResukt = {
            Caption: al.caption,
            Sentiment: al.sentiment
          }
          if (al.sentiment === "Positive") {
            eachElement.Positives.push(eachCaptionResukt)
          }
          else if (al.sentiment === "Negative") {
            eachElement.Negatives.push(eachCaptionResukt)

          }
          else {
            eachElement.Neutral.push(eachCaptionResukt)

          }
        })

        resultsArr.push({
          Querry: eachElement.Querry,
          CreatedAt: eachElement.Time,
          Positive: eachElement.Positives,
          Negative: eachElement.Negatives,
          Neutral: eachElement.Neutral,
          data:{
            options:{
              labels:["Positive", "Negative", "Neutral"],
              legend:{
                position:"bottom"
              }
            },
            series:[eachElement.Positives.length, eachElement.Negatives.length, eachElement.Neutral.length],
            
          }
        })
        
      })
      console.log("hi")
      console.log(resultsArr)
      setInStaData(resultsArr)
    }
    catch (e) {
      console.log("error occured here")
    }


  }


  
  useEffect(() => {

    getInstadata();
    console.log(instaData)

  }, [])

  return (
    <div className={classes.historyRoot}>
      <CssBaseline />
      <div className={classes.historyToolbar} />
      {instaData.map((el, index) => {

          console.log(tweetData[index])
          return <SearchGraph
          key={index}
          Querry={el.Querry}
          dataTweet={el.data}
          dataInsta={el.data}
          />}
)}


    </div>
  )
}

export default History
