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
import Followers from '../followers/Followers';
import LoadingPageDash from '../loadingPage/LoadingPageDash';
import TwitterLogin from '../settings/TwitterLogin';
import InnerRoute from '../innerRoutes/InnerRoutes';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  '@media only screen and (max-width: 600px)':{
    
		}
}));


function Dashboard() {
  const classes = useStyles();
  const drawerBool = useSelector(state => state.openCloseDrawer);

  const dashboardDisplay = () => {
    if(window.matchMedia("(max-width: 600px)").matches)
    {
      if(drawerBool)
      {
        return <PermanentDrawerLeft/>
      }
      else
      {
        return <Router>
      <PrimarySearchAppBar/>
        <Switch>
          <InnerRoute path ="/Dashboard" exact component={Home} location ="/Dashboard"/>
          <InnerRoute path ="/Dashboard/Timeline"  component={CustomTimeline} location ="/Dashboard/Timeline"/>
          <InnerRoute path ="/Dashboard/SearchDisplay"  component={SearchDataDisplay} location ="/Dashboard/SearchDisplay"/>
          <InnerRoute path ="/Dashboard/Settings"  component={Settings} location ="/Dashboard/Settings"/>            
          <InnerRoute path ="/Dashboard/History"  component={History} location ="/Dashboard/History"/>            
          <InnerRoute path ="/Dashboard/Followers"  component={Followers} location ="/Dashboard/Followers"/>       
          <Route path ="/Dashboard/load"  component={LoadingPageDash}/>                            
          <InnerRoute path ="/Dashboard/twitter/login-next"  component={TwitterLogin} location ="/Dashboard/twitter/login-next"/> 
        </Switch>
        </Router>
      }
    }
    else
    {
      return <Router>
      <PermanentDrawerLeft/>
      <PrimarySearchAppBar/>
        <Switch>
          <InnerRoute path ="/Dashboard" exact component={Home} location ="/Dashboard"/>
          <InnerRoute path ="/Dashboard/Timeline"  component={CustomTimeline} location ="/Dashboard/Timeline"/>
          <InnerRoute path ="/Dashboard/SearchDisplay"  component={SearchDataDisplay} location ="/Dashboard/SearchDisplay"/>
          <InnerRoute path ="/Dashboard/Settings"  component={Settings} location ="/Dashboard/Settings"/>            
          <InnerRoute path ="/Dashboard/History"  component={History} location ="/Dashboard/History"/>            
          <InnerRoute path ="/Dashboard/Followers"  component={Followers} location ="/Dashboard/Followers"/>       
          <Route path ="/Dashboard/load"  component={LoadingPageDash}/>                            
          <InnerRoute path ="/Dashboard/twitter/login-next"  component={TwitterLogin} location ="/Dashboard/twitter/login-next"/> 
        </Switch>
        </Router>
    }
  }

  return (
    <div className={classes.root}>
      {dashboardDisplay()}
    </div>
  );
}

export default Dashboard;