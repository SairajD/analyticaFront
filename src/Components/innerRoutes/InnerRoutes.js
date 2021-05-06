import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import Axios from 'axios'
import cookies from 'react-cookies'
import LoadingPageDash from '../loadingPage/LoadingPageDash'
import { makeStyles } from '@material-ui/core/styles';


const url='https://analytica-parsb-api.herokuapp.com'

const useStyles = makeStyles((theme) => ({

  }));

export const InnerRoute = (props) => {
    (function() {
        let tokenValue= cookies.load('Token') ;
        if (tokenValue) {
          Axios.defaults.headers.common['Authorization'] = tokenValue;
        } else {
          Axios.defaults.headers.common['Authorization'] = null;
        
        }
      })();

    const { Component: Component, ...rest } = props;
    const [loading, setLoading] = useState(true)
    const classes = useStyles();

    useEffect(() => {
        setTimeout(() => setLoading(false), 6000)
    }, [])
    return (
        <Route
            {...rest}
            render={() => loading===false ?<Component className={classes.root}/>:<LoadingPageDash className={classes.load}/>}
        />
    );

};


export default InnerRoute

