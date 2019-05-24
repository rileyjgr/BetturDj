import React, { Component } from "react";
import {Container, Row, Col, Image, } from 'react-bootstrap';
import Rotation from 'react-rotation';
class DjTables extends Component {

render() {
  return (
        <Container>
            <Row>
            <Col xs={6} md={4}>
                    <Image src="https://via.placeholder.com/300" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
                    <Image src="https://via.placeholder.com/300" roundedCircle />
            </Col>
            </Row>
        </Container>
    );
  }
}

export default DjTables;