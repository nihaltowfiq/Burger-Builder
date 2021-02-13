import React from "react";
import { Route } from "react-router-dom";
import Auth from "./Auth/Auth";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Checkout from "./BurgerBuilder/Orders/Checkout";
import Orders from "./BurgerBuilder/Orders/Orders";
import Header from "./Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Auth} />
      </div>
    </div>
  );
};

export default Main;
