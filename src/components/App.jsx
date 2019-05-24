import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import SocialFeed from './Pages/SocialFeed';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="social" exact path="/social" component={SocialFeed} />
                </div>
            </Router>
        )
    }
}
export default App;
