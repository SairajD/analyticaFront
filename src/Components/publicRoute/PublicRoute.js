import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import Axios from 'axios'
import cookies from 'react-cookies'
import LoadingPage from '../loadingPage/LoadingPage'
const url='https://analytica-parsb-api.herokuapp.com'

export const PublicRoute = (props) => {
    (function() {
        let tokenValue= cookies.load('Token') ;
        if (tokenValue) {
          Axios.defaults.headers.common['Authorization'] = tokenValue;
        } else {
          Axios.defaults.headers.common['Authorization'] = null;
        
        }
      })();
      const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
 

    const { Component: Component, ...rest } = props;
    const fetchData = async () => {
        let tokenValue= cookies.load('Token') ;
        if(tokenValue===undefined){
         
            setLoading(false)
            setIsAuthenticated(false)
            return;
        }
        console.log(url+'/Analytica/users/checkexists')
       const result=await Axios.get(url+'/Analytica/users/checkexists')
            console.log('s2')
            if(result.status===200){
                console.log('s3')
                setIsAuthenticated(true)
                setLoading(false)
                console.log('reidredcted')
            }
            else{
                console.log('s4')
                setLoading(false)
                setIsAuthenticated(false)
            }
      
         
    };
    useEffect( () => {
        console.log('s1')
      
        fetchData();
                
    }, []);

    return (
        <Route
            {...rest}
            render={() =>(
                isAuthenticated ? (
                  
                    <Redirect
                    to={{
                        pathname: "/Dashboard",
                        state: { from: props.location },
                    }}
                />
                   
                ) : loading ? (
                
                    <LoadingPage></LoadingPage>
                ) : (
                
                    <Component />
                )
            )
            }
        />
    );
};


export default PublicRoute