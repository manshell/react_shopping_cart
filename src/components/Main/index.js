import React, { Component } from "react";
import {
    Route, 
    NavLink,
    HashRouter
} from "react-router-dom"
import Home from "../Home"
import About from "../About"
import Contact from "../Contact"
import Portfolio from "../Portfolio"
import FloatCart from '../FloatCart';

import './style/navbar.css'

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <ul className="navUl">
                    <li><NavLink className="navLi" exact to="/home">Home</NavLink></li>
                    <li><NavLink className="navLi" to="/about">About</NavLink></li>
                    <li><NavLink className="navLi" to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink className="navLi" to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </div>
            </div>
            <FloatCart />
        </HashRouter>
    );
  }
}
 
export default Main;