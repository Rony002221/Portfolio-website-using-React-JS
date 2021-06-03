import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../asset/css/custom.css'
import MobileAppIcon from '../../asset/image/mobile.svg'
import WebAppIcon from '../../asset/image/web.svg'
import GraphicsAppIcon from '../../asset/image/graphics.svg'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                            <img src={WebAppIcon}/>
                            <h2 className="serviceName">Web Development</h2>
                            <p className="serviceDescription">Web development is the work involved in developing a Web site for the Internet or an intranet.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                            <img src={MobileAppIcon}/>
                            <h2 className="serviceName">Mobile App Development</h2>
                            <p className="serviceDescription">Mobile app development is the act or process by which a mobile app is developed for mobile </p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                            <img src={GraphicsAppIcon}/>
                            <h2 className="serviceName">Graphics Design</h2>
                            <p className="serviceDescription">Graphic design is a craft where professionals create visual content to communicate messages.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;