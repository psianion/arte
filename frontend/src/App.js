import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Products from "./components/pages/Products";
import Product from "./components/pages/Product";
import SignIn from "./components/pages/SignIn";
import RegisterScreen from "./components/pages/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={Product} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={RegisterScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
