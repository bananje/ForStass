import React, {useEffect, useState} from 'react';
import './Layout.css';
import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping, faGear, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link, Outlet} from "react-router-dom";
import Modal from "../Modal/Modal";
import Authorize from "../Authorize/Authorize";
import Registration from "../Registration/Registration";

const Layout = () => {

    const [modalActive, setModalActive] = useState(false);
    const [content, setContent] = useState(true);
    const [isAuth, setAuth] = useState(false);

    function authorizeHandle(){
       setModalActive(true);
    }
    function registrationHandle(active){
        setModalActive(false);
        setContent(active);
        setModalActive(true);
    }
    function settingsRender(active){
        setAuth(active);
        setModalActive(false)
    }

    return (
        <div>
            <Modal active={modalActive} setActive={setModalActive}>
                {
                    content ?
                        (<Authorize authHandle={settingsRender} modalHandle={registrationHandle}/>) : (<Registration />)
                }
            </Modal>
            <div className="header">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Link to="/main" className="links">
                            <Navbar.Brand>
                             <img
                                alt=""
                                src={require('../../img/logo.png')}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                             />{' '}
                            ВелоМото
                         </Navbar.Brand>
                      </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="links" to="/main">
                                    Главная
                                </Link>
                                <Link className="links" to="/products">
                                    Товары
                                </Link>
                            </Nav>
                            <Nav>
                                {
                                    isAuth ? (<Link to="/admin"><FontAwesomeIcon className="settings-icon" icon={faGear} size={"xl"} style={{color: "#000000",}} /></Link>) : (<div></div>)
                                }
                                <FontAwesomeIcon icon={faBasketShopping} style={{color: "#000000"}} size={"xl"} className="basket-icon"/>
                                <Nav.Link eventKey={2} href="#memes">
                                    <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} size={"xl"} onClick={authorizeHandle}/>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Outlet />

            <div className="footer">
                    <Container>
                        <Row>
                            <Col className={"col-4"}>
                                <h1 className={"title"}>Компания</h1>
                                <p>
                                    Компания "ВелоМото" -- это магазин по продаже вело и мото техники.
                                    Здесь каждый клиент сможет найти товар, который будет ему по-душе.
                                    Наши продавцы помогут вам с выбором и расскажут, как правильно обращаться с инструментом.
                                </p>
                            </Col>
                            <Col>
                                <h1 className={"title"}>Время работы</h1>
                                <p>
                                    <Row>
                                        <Col>Понедельник</Col><Col>12:00-15:00</Col>
                                    </Row>
                                    <Row>
                                        <Col>Вторник</Col><Col>09:00-15:00</Col>
                                    </Row>
                                    <Row>
                                        <Col>Среда</Col><Col>09:00-15:00</Col>
                                    </Row>
                                    <Row>
                                        <Col>Четверг</Col><Col>09:00-15:00</Col>
                                    </Row>
                                    <Row>
                                        <Col>Пятница</Col><Col>09:00-15:00</Col>
                                    </Row>
                                    <Row>
                                        <Col>Суббота</Col><Col>09:00-15:00</Col>
                                    </Row>
                                    <Row>
                                        <Col>Воскресенье</Col><Col>09:00-15:00</Col>
                                    </Row>
                                </p>
                            </Col>
                            <Col>
                                <h1 className={"title"}>Контакты</h1>
                                <p>
                                    <Row>
                                        <iframe src="https://yandex.ru/sprav/widget/rating-badge/112758141157?type=rating" width="150"
                                                height="50" frameBorder="0"></iframe>
                                    </Row>
                                </p>
                            </Col>

                        </Row>
                    </Container>
            </div>
        </div>
    );
};

export default Layout;