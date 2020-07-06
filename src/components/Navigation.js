import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render() {
        return(
            <Navbar expand="xl" className="navbar-brand">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id='basic-navbar-nav'>
            {/* <nav class="navbar navbar-light bg-light"><a class="navbar-brand" href="#">
                <img src="images/logo.png" width="30" height="30" alt=""></a></nav> */}
            <Nav class="navbar-nav ml-auto">
            <NavLink className='d-lg-flex p-3 bg-white text-danger'
            to="/">Home</NavLink>
            <NavLink className='d-lg-flex p-3 bg-white text-dark font-family: "Montserrat"'
            to="/About">About</NavLink>
            <NavLink className='d-lg-flex p-3 bg-white text-dark font-family: "Montserrat"'
            to="/OurTeam">Our Team</NavLink>
            <NavLink className='d-lg-flex p-3 bg-white text-dark font-family: "Montserrat"'
            to="/ContactUs">Contact Us</NavLink>
            <NavLink className='d-lg-flex p-3 bg-white text-dark font-family: "Montserrat"'
            to="/Login"><button type="button" class="btn btn-danger">Login</button></NavLink>   
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}