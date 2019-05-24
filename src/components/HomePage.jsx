import React, { Component } from 'react';
import TurnTable from './widgets/TurnTable';
class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>BetturDj</h1>
                <h3>Created by Riley Griffin, <a href='wwww.rileygriffin.com'>Website</a>, <a href='github.com/rileyjgr'>Github</a></h3>
                <TurnTable />
            </div>
        )
    }
}
export default HomePage;
