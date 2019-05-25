import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import SocialFeed from './Pages/SocialFeed';
import LoginSpotify from './Pages/LoginSpotify';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="social" exact path="/social" component={SocialFeed} />
                    <Route name="loginSpotify" exact path="/loginSpotify" component={LoginSpotify} />
                    <Route name="spotifyLogin" exact path="/spotifylogin" />
                </div>
            </Router>
        )
    }
}
export default App;
