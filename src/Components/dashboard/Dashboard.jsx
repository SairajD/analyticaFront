import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrimarySearchAppBar from '../appbar/Appbar';
import Home from '../home/Home';
import PermanentDrawerLeft from '../sidebar/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import CustomTimeline from '../timeline/Timeline';
import SearchDataDisplay from '../searchDisplay/SearchDisplay';
import Settings from '../settings/Settings';
import History from '../history/History';
import Loading from '../loading/Loading';

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
          <Route path ="/Dashboard/Settings"  component={Settings}/>            
          <Route path ="/Dashboard/History"  component={History}/>          
          <Route path='/Dashboard/Loading' component={Loading}/> 
        </Switch>
        </Router>
    </div>
  );
}

export default Dashboard;