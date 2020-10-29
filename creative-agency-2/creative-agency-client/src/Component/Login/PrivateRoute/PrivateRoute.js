import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {login} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    // || sessionStorage.getItem('token')
    return (
        <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;