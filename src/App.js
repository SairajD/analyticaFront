import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrimarySearchAppBar from './Components/appbar/Appbar';
import Home from './Components/home/Home';
import PermanentDrawerLeft from './Components/sidebar/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import CustomTimeline from './Components/timeline/Timeline';
import SearchDataDisplay from './Components/searchDisplay/SearchDisplay';
import Login from './Components/login/Login';
import Register from './Components/login/Register';
import GettingStarted from './Components/gettingStarted/GettingStarted';
const useStyles = makeStyles((theme) => ({
  root: {
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
      {/* <PermanentDrawerLeft/>
      <PrimarySearchAppBar/> */}
        <Switch>
          <Route path ="/" exact component={Home}/>
          <Route path ="/Timeline"  component={CustomTimeline}/>
          <Route path ="/SearchDisplay"  component={SearchDataDisplay}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>          
          <Route path="/GettingStarted" component={GettingStarted}/>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
