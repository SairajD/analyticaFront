import react from 'react'
import {Route,Redirect} from 'react-router-dom'
function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {
    console.log(isAuthenticated)
    return (
        <Route
            {...rest}
            render={props =>
               
                isAuthenticated? <Redirect to="/login" />:  <Component {...props} />
            }
        />
    );
}
export default ProtectedRoute;