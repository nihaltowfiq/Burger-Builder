import React from "react";
import { Route } from "react-router-dom";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Checkout from "./BurgerBuilder/Orders/Checkout";
import Orders from "./BurgerBuilder/Orders/Orders";
import Header from "./Header/Header";

const Main = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout} />
      </div>
    </div>
  );
};

export default Main;
