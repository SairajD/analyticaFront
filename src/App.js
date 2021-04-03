import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Components/login/Login';
import Register from './Components/login/Register';
import GetStartedCombine from './Components/gettingStarted/GetStartedCombine';
import Dashboard from './Components/dashboard/Dashboard';
import {ThemeProvider} from "@material-ui/core/styles";
import {Theme, DarkTheme} from "./Components/theme/Theme";
import {useSelector} from 'react-redux';




const useStyles = makeStyles((theme) => ({
  root: {
  }
}));


function App() {
  const classes = useStyles();
  const checkedDarkLight = useSelector(state=>state.changeTheme);
  return (
      <ThemeProvider theme ={checkedDarkLight? DarkTheme : Theme}>
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
      </ThemeProvider>
  );
}

export default App;
