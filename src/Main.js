import React, { Component } from "react";
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Hobbies from "./Hobbies";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/hobbies">Hobbies</NavLink></li>
            </ul>
            <div className="content center">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/hobbies" element={<Hobbies />}/>
                </Routes>
            </div>
          </div>
        </HashRouter>
      );
    }
}
 
export default Main;