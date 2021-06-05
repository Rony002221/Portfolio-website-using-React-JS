import React, {Component,Fragment} from 'react';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import whiteLogo from '../../asset/image/navlogo.svg'
import blueLogo from '../../asset/image/navlogoScroll.svg'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


class TopNavigationBar extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo: [whiteLogo]
        }
    }


    onScroll = () =>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll', navBarLogo: [blueLogo]});
        }
        else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle', navBarLogo:[whiteLogo]});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>


                    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home" className={this.state.navBarTitle}> <img src={this.state.navBarLogo} /> MHR</Navbar.Brand>
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