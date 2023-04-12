import React, {useContext} from 'react'
import { NavLink } from "react-router-dom";
import {UserContext} from "../App";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    console.log(`the navbar user ${state} and ${dispatch}`);

    return (
            <nav className="navbar bg-secondary navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex flex-row">
                        <a className="nav-link" href="/">Home </a>
                        <a className="nav-link" href="/">AboutMe</a>
                        <a className="nav-link" href="/contact">Contact</a>
                        <a className="nav-link" href="/signin">Login</a>
                        <a className="nav-link" href="/signup">Register</a>
                    </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
