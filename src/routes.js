import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";

const mapStateToProps = state => ({
  userToken: state.loginReducer.loginToken
});

const PrivateRoute = connect(mapStateToProps)(
  ({ component: Component, path, userToken, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        if (!userToken) return <Redirect to={{ pathname: "/login" }} />;
      }}
    />
  )
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
