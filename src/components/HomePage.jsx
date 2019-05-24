import React, { Component } from 'react';
// import TurnTable from './widgets/TurnTable';
import DjTables from './widgets/DjTables';
import './assets/Home.css'
import NavbarPage from './widgets/NavbarPage';
// mimport Waveform from './widgets/Waveform';
class HomePage extends Component {
    render() {

        return (
            <div>
             <NavbarPage />   

                <div id = 'turntables'>
                    <DjTables />
                </div>
                <div id ='footer'>
                    <h3>Created by Riley Griffin, <a href='wwww.rileygriffin.com'>Website</a>, <a href='github.com/rileyjgr'>Github</a></h3>
                </div>
            </div>
        )
    }
}
export default HomePage;
