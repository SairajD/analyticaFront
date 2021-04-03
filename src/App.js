import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Components/login/Login';
import Register from './Components/login/Register';
import GetStartedCombine from './Components/gettingStarted/GetStartedCombine';
import Dashboard from './Components/dashboard/Dashboard';
import ProTectedRoute from './protectedRoute/protectedroute'
import Axios from 'axios'
import cookies from 'react-cookies'
import {ThemeProvider} from "@material-ui/core/styles";
import {Theme, DarkTheme} from "./Components/theme/Theme";
import {useSelector} from 'react-redux';




const url="https://analytica-parsb-api.herokuapp.com"

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));


function App() {
  
  (function() {
    let tokenValue= cookies.load('Token') ;
    if (tokenValue) {
      Axios.defaults.headers.common['Authorization'] = tokenValue;
    } else {
      Axios.defaults.headers.common['Authorization'] = null;
    
    }
  })();
  const checkAuth=async ()=>{

    const result=await Axios.get(url+'/Analytica/users/checkexists');
    if(result.status===200){
      return true;
    }
    else{
      return false;
    }


  }
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
              <ProTectedRoute path="/Dashboard" component={Dashboard}  isAuthenticate={() => checkAuth} />
            </Switch>
            </Router>
        </div>        
      </ThemeProvider>

  );
}

export default App;
