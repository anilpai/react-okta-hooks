import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const SecureRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {( value ) => {
        if (value[0].loading)
          return <div>securing logging you in ... </div>
     return ( <Route
        render={props =>
          value[0].authenticated ? <Component {...props} /> : <Redirect to="/landing" />
        }
        {...rest}
      />)
    }}
  </AuthContext.Consumer>
);

export default SecureRoute;
