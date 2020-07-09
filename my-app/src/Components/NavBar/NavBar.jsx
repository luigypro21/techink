import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import techLogo from '../../Assets/images/techinkLogo.jpg';
class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={techLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <strong>TECH</strong>INK
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;