import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Components/login/Login';
import Register from './Components/login/Register';
import GetStartedCombine from './Components/gettingStarted/GetStartedCombine';
import Dashboard from './Components/dashboard/Dashboard';


const useStyles = makeStyles((theme) => ({
  root: {
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Switch>          
          <Route path="/" exact component={GetStartedCombine}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>          
          <Route path="/Dashboard" component={Dashboard}/>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
