import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactTurntable from 'react-turntable';

//import "react-turntable/assets/index.css"

class TurnTable extends Component {
    render() {
        const styles ={
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex'
        }

        const prizes = ['Song Name', 'Arist Name'];
        // const prizes2 = ['Song Name2', 'Arist Name2']; 
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
            <div>
                <div style = {styles}>
                    <ReactTurntable {...options}/>
                    <ReactTurntable {...options2}/>
                </div>               
            </div>
        )
    }
}
export default TurnTable;