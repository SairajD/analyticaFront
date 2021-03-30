import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrimarySearchAppBar from '../appbar/Appbar';
import Home from '../home/Home';
import PermanentDrawerLeft from '../sidebar/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import CustomTimeline from '../timeline/Timeline';
import SearchDataDisplay from '../searchDisplay/SearchDisplay';
const useStyles = makeStyles((theme) => ({
  root: {
  }
}));


function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
      <PermanentDrawerLeft/>
      <PrimarySearchAppBar/>
        <Switch>
          <Route path ="/Dashboard" exact component={Home}/>
          <Route path ="/Dashboard/Timeline"  component={CustomTimeline}/>
          <Route path ="/Dashboard/SearchDisplay"  component={SearchDataDisplay}/>
        </Switch>
        </Router>
    </div>
  );
}

export default Dashboard;