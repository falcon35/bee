import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavBar from "./components/NavBar"
import ProductList from "./components/ProductList"
import Detail from "./components/Detail"
import Cart from "./components/Cart/Cart"
import Def from "./components/Def"
import {Switch,Route} from 'react-router-dom'
import Modal from "./components/Modal"

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/details" component={Detail}/>
          <Route exact path="/cart" component={Cart}/>
          <Route  component={Def}/>
        </Switch>
        <Modal/>
        </React.Fragment>
       
    )
  }
}
