import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";
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

const Routes = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
