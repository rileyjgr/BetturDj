import React, { Component } from "react";
import {Container, Row, Col, Image, } from 'react-bootstrap';
import Rotation from 'react-rotation';
import { PlayerIcon, Direction } from 'react-player-controls'
import Slider from 'react-rangeslider';
// import '../assets/index.less';

class DjTables extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
          volume: 0
        }
      }
    
      handleOnChange = (value) => {
        this.setState({
          volume: value
        })
      }

      render() {
        let { volume } = this.state;
        return (
                <Container>
                    <Row>
                    <Col xs={8} md={4}>
                        <Image src="https://via.placeholder.com/300" roundedCircle />
                        <div id='icons'>
                            <PlayerIcon.Previous width={32} height={32} style={{ marginRight: 32, background:'#72d687', marginBottom: 32, marginTop: 32 }}/>
                            <PlayerIcon.Play width={32} height={32} style={{ marginRight: 32, background:'#72d687', marginBottom: 32, marginTop: 32 }}/>
                            <PlayerIcon.Pause width={32} height={32} style={{ marginRight: 32, background:'#72d687', marginBottom: 32, marginTop: 32 }}/>
                            <PlayerIcon.Next width={32} height={32} style={{ marginRight: 32, background:'#72d687', marginBottom: 32, marginTop: 32 }}/>
                        </div>
                        <div id='slider1'>
                        <Slider
                            value={volume}
                            orientation="vertical"
                            onChange={this.handleOnChange}
                        />
                        </div>
                    </Col>
                    <Col xs={8} md={4}>
                        <Image src="https://via.placeholder.com/300" roundedCircle />
                        <div id='icons'>
                            <PlayerIcon.Previous width={32} height={32} style={{ marginRight: 32, background:'#72d687', marginBottom: 32, marginTop: 32 }}/>
                            <PlayerIcon.Play width={32} height={32} style={{ marginRight: 32, background:'#72d687', marginBottom: 32, marginTop: 32}}/>
                            <PlayerIcon.Pause width={32} height={32} style={{ marginRight: 32, background:'#72d687', marginBottom: 32, marginTop: 32 }}/>
                            <PlayerIcon.Next width={32} height={32} style={{ marginRight: 32, background:'#72d687', marginBottom: 32, marginTop: 32 }}/>
                        </div>
                        <div id='slider2'>
                        <Slider
                            value={volume}
                            orientation="vertical"
                            onChange={this.handleOnChange}
                        />
                        </div>
                    </Col>
                    </Row>
                </Container>
            );
    }
}

export default DjTables;