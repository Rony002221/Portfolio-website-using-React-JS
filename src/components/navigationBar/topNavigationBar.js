import React, {Component,Fragment} from 'react';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


class TopNavigationBar extends Component {
    render() {
        return (
            <Fragment>


                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">

                                </Nav>
                                <Nav>
                                    <Nav.Link href="#deets">HOME</Nav.Link>
                                    <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                                    <Nav.Link href="#deets">COURSES</Nav.Link>
                                    <Nav.Link href="#deets">SERVICES</Nav.Link>
                                    <Nav.Link href="#deets">CONTACT US</Nav.Link>
                                    <Nav.Link href="#deets">ABOUT US</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>




            </Fragment>
        );
    }
}

export default TopNavigationBar;