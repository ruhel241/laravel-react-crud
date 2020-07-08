import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Home from "./Home";
import AddNewPost from "./AddNewPost";

import EditPost from "./EditPost";

export default class Header extends Component {
    render() {
        return (
        //   <Router></Router>
                <div className="navber">
                    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add/post">
                                        Add Post
                                    </Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-outline-success my-2 my-sm-0"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add/post" component={AddNewPost} />
                    <Route exact path="/edit/post/:id" component={EditPost} />
                </div>
            
        );
    }
}
