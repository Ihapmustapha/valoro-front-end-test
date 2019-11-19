import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";

const mapStateToProps = state => ({
  userToken: state.loginReducer.loginToken
});

const PrivateRoute = connect(mapStateToProps)(
  ({ component: Component, path, userToken, ...rest }) => {
    console.log("userToken: " + userToken);
    return (
      <Route
        {...rest}
        render={props => {
          if (!userToken) return <Redirect to={{ pathname: "/login" }} />;
          else return <Component {...props} />;
        }}
      />
    );
  }
);

const PublicRoute = connect(mapStateToProps)(
  ({ component: Component, path, userToken, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (userToken) return <Redirect to={{ pathname: "/" }} />;
          else return <Component {...props} />;
        }}
      />
    );
  }
);

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/" component={Dashboard} />
      <PublicRoute exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
