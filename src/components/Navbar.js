import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class NavbarCar extends React.Component {
    render() {

        const menu = ['Home', 'Cars', 'Latest', 'Add']
        const menuList = menu.map( (element, i) => 
                <NavLink className="nav-item" key={'key_' + i} exact activeClassName="active" to={"/" + element }>
                     <li className="nav-link" style={{marginLeft: 20, listStyle: 'none', 'textDecoration': 'none'}}>{element}</li>
                </NavLink>)   

        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">
                    <img
                        alt="Logo"
                        src="./static/cargiant_logo.png"
                        className="d-inline-block align-top mt-2 mr-2 ml-2"
                    />{' '}
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {menuList}
                        </ul>
                    </div>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}