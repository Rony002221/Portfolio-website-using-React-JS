import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, ResponsiveContainer, BarChart, XAxis, Tooltip} from "recharts";


class Analysis extends Component {
    constructor() {
        super();
        this.state = {
            data : [
                {T : 'Java', V : 90},
                {T : 'C++', V : 60},
                {T : '.net', V : 50},
                {T : 'Javascript', V : 85},
                {T : 'HTML', V : 91},
                {T : 'PHP', V : 83},
                {T : 'Laravel', V : 90},
                {T : 'Android', V : 70},
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <Container className="text-center">

                    <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                    <Row>
                        <Col style={{width: '50%', height: '300px'}} lg={6} md={12} sm={12}>

                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="T" />
                                    <Tooltip/>
                                    <Bar dataKey="V" fill="#3385FF" />
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>
                        <Col lg={6} md={12} sm={12}>

                            <p className="text-justify" align = "justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Analysis;