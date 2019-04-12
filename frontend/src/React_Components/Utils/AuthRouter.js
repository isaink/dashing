import React from "./node_modules/react";
import { connect } from './node_modules/react-redux';
import { Route, Redirect, withRouter} from "./node_modules/react-router-dom";

const AuthUser= ({component: Component, path, isLoggedIn, ...rest}) => {
  return (
    <Route
      exact path={path}
      render={ props => {
  
        return !isLoggedIn ? <Component {...props} {...rest} /> : <Redirect to="/dashboard" />
      }
      }
    />
  )
};

const Private = ({ component: Component, path, isLoggedIn }) => {
  return (
    <Route
       path={path}
      render={ props => 
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
};

const mapStateToProps = ( state, ownProps ) => {

  return {
    ...ownProps,
    isLoggedIn: state.userAuth.isLoggedIn 
  }
};

export const AuthRouter = withRouter(connect(mapStateToProps, null)(AuthUser))

export const PrivateRoute = withRouter(connect(mapStateToProps, null)(Private))