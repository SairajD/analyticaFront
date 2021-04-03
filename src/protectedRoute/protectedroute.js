
import react from 'react'
import {Route,Redirect} from 'react-router-dom'
function protectedroute({ component: Component, isAuthenticated, ...rest }) {
    console.log(isAuthenticated)
    return (
        <Route
            {...rest}
            render={props =>
               
                isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
}
export default protectedroute;