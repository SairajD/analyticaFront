import {React,useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Login from './login/Login';
import Register from './login/Register';
import GetStartedCombine from './Components/gettingStarted/GetStartedCombine';
import Dashboard from './Components/dashboard/Dashboard';
import ProtectedRoute from './protectedRoute/protectedroute'
import PublicRoute from './Components/publicRoute/PublicRoute'
import LoadingPage from './Components/loadingPage/LoadingPage';
import {ThemeProvider} from "@material-ui/core/styles";
import {Theme, DarkTheme} from "./Components/theme/Theme";
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Loading from './Components/loading/Loading';
import ConfirmEmail from './Components/resetPassword/ConfirmationEmail'
import ResetPassword from './Components/resetPassword/ResetPassword'

const url="https://analytica-parsb-api.herokuapp.com"

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));


function App() {

  const history = useHistory();
  const [isloading,setisloading]=useState(true)
  const [isLoggedin,setLoggedin]=useState(false)
  
  const classes = useStyles();
  const checkedDarkLight = useSelector(state=>state.changeTheme);
  return (

      <ThemeProvider theme ={checkedDarkLight? DarkTheme : Theme}>
        <div className={classes.root}>
          <Router>
            <Switch>          
              <PublicRoute exact path="/" exact Component={GetStartedCombine}  location="/"/>
              <PublicRoute path="/Login" Component={Login} location="/Login" />
              <PublicRoute path="/Register" Component={Register}  location="/Register"/>   
              <Route path="/Loading" component={Loading}  />         
              <Route path="/forgotPassword/emailConfirmation" component={ConfirmEmail}  /> 
              <Route path="/forgotPassword/ResetPassword" component={ResetPassword}  /> 
              <ProtectedRoute path="/Dashboard" Component={Dashboard} location="/Dashboard"/>
            </Switch>
            </Router>
        </div>        
      </ThemeProvider>

  );
}

export default App;
