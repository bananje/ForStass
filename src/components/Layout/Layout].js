import React from 'react';
import './Layout.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className="header">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={require('../../img/logo.png')}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            ВелоМото
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Главная</Nav.Link>
                                <Nav.Link href="#pricing">Товары</Nav.Link>
                            </Nav>
                            <Nav>
                                <FontAwesomeIcon icon={faBasketShopping} style={{color: "#000000"}} size={"xl"} className="basket-icon"/>
                                <Nav.Link eventKey={2} href="#memes">
                                    <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} size={"xl"}/>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Outlet />
        </div>
    );
};

export default Layout;