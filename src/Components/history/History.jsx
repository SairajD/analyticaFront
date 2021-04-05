import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import SearchGraph from '../searchDisplay/SearchGraph2';
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
  const [TweetData, setTweetData] = useState({});
  const [instaData, setInStaData] = useState([{
    Positive: [],
    Negative: [],
    Neutral: [],
    CreatedAt: '',
    Querry: ''
  }])
  const socialInfoNegatives = useSelector(state => state.negativeTweets);
  const socialInfoPositives = useSelector(state => state.positiveTweets);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {

    dispatch(dashLoc("History"));

  }, [])
  useEffect(() => {

    const getTweeterDownloa = async () => {


    }
    getTweeterDownloa();

  }, [])
  useEffect(() => {

    const getInstadata = async () => {
      try {

        const result = await Axios.get(url + '/analytica/instagram/All/tags/download')
        console.log(result)
        result.data.forEach((el) => {

          let positiveArray = [], negativeArray = [], neutralArray = []
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

          setInStaData([...instaData, {
            Positive: eachElement.Positives,
            Negative: eachElement.Negatives,
            Neutral: eachElement.Neutral,

          }])
        })


      }
      catch (e) {
        console.log("error occured here")
      }


    }
    getInstadata();

  }, [])
  return (
    <div className={classes.historyRoot}>
      <CssBaseline />
      <div className={classes.historyToolbar} />
      {
        instaData.map((el, index) => {
          if (el.Positive.length == 0 && el.Negative.length == 0 && el.Neutral.length == 0) {
            return null
          }
          return <SearchGraph
            key={index}
            displayData={el}
          />
        })
      }


    </div>
  )
}

export default History
