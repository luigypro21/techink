import React, { Component } from 'react'
import Auxiliar from '../../Cao/Auxiliar';
import './NavBar.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-scroll";
import logo from '../../Assets/images/logosn.png'
import { Col, Row } from 'react-bootstrap'
export default class BarraMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Auxiliar>
                <Router>
                    <MDBNavbar fixed="top" dark expand="md" scrolling transparent>
                        <MDBNavbarBrand href="/">
                            <Row>
                                <Col>
                                    <img src={logo} alt="techink" />
                                </Col>
                            </Row>
                        </MDBNavbarBrand>
                        {!this.state.isWideEnough && <MDBNavbarToggler image="https://mdbootstrap.com/img/svg/hamburger3.svg?color=0A0A0A" onClick={this.onClick} />}
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem active>
                                    <Link
                                        activeClass="active"
                                        to="intro"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={600}>Home</Link>

                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link
                                        activeClass="active"
                                        to="About"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={600}>Acerca de Nosotros</Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link
                                        activeClass="active"
                                        to="Servicios"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={600}>Servicios</Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link
                                        activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={600}>Contacto</Link>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </Router>
            </Auxiliar>
        )
    }
}
