import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GettingStarted from '/GettingStarted';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));


function GetStartedCombine() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
          <GettingStarted/>
        <Switch>
          <Route path ="/GettingStarted" exact component={Page1}/>
          <Route path ="/GettingStarted/SentimentAnalysis"  component={Page2}/>
          <Route path ="/GettingStarted/TrendAnalysis"  component={Page3}/>
          <Route path="/GettingStarted/DataVisualization" component={Page4}/>
          <Route path="/GettingStarted/EasyUpload" component={Page5}/>          
        </Switch>
        </Router>
    </div>
  );
}

export default GetStartedCombine;