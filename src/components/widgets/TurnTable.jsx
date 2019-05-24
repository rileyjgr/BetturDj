import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactTurntable from 'react-turntable';

//import "react-turntable/assets/index.css"

class TurnTable extends Component {
    render() {
        const styles ={
            justifyContent: 'left',
            alignContent: 'left',
            display: 'flex'
        }

        const styles2 = {
            justifyContent: 'right',
            alignContent: 'right',
            display: 'flex'
        }

        const prizes = ['', ''];
        const options = {
            prizes,
            width: 300,
            height: 300,
            primaryColor: '#000000',
            secondaryColor: '#000000',
            speed: 1000,

        }

        const options2 ={
            prizes,
            width: 300,
            height: 300,
            primaryColor: '#000000',
            secondaryColor: '#000000',
            speed: 1000
        }

        return (
            <div style = {styles}>
                <ReactTurntable {...options}/>
                <ReactTurntable {...options2} />
            </div>
        )
    }
}
export default TurnTable;