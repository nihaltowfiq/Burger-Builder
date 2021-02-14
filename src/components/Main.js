import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import AlterAuth from "./AlternateAuth/AlterAuth";
// import Auth from "./Auth/Auth";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Checkout from "./BurgerBuilder/Orders/Checkout";
import Orders from "./BurgerBuilder/Orders/Orders";
import Header from "./Header/Header";

const Main = ({ email }) => {
  let routes = null;
  if (email === null) {
    routes = (
      <Switch>
        <Route path="/login" component={AlterAuth} />
        <Redirect to="login" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Header />
      <div className="container">{routes}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.email,
  };
};

export default connect(mapStateToProps)(Main);
