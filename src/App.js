import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Default from './components/Default';
import Cart from './components/cart/Cart';
import { Switch, Route } from 'react-router-dom';
import Model from './components/Model';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/details/:slug.:id" exact component={Detail}/>
          <Route path="/cart" exact component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Model/>
      </React.Fragment>
    );
  }
}

export default App;