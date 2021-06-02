import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../asset/css/bootstrap.min.css'
import '../../asset/css/custom.css'

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid = {'true'} className="topFixedBanner">
                    <div className="topBannerOverlay p-0">

                        <Container className="topBannerOverlayText">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topBannerText">SOFTWARE ENGINEER</h1>
                                    <h4 className="topBannerSubText">Mobile & Web Application</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default TopBanner;