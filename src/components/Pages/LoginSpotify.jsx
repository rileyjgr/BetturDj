import React, { Component } from 'react';
import SpotifyLogin from 'react-spotify-login';
import NavbarPage from '../widgets/NavbarPage';
 
class LoginSpotify extends Component {
    render() {

        const onSuccess = response => console.log(response);
        const onFailure = response => console.error(response);
        let accesstoken= '';
        const clientId = 'da4389f7d11c4e928bc12b8274bda6f2';
        const redirectUri = 'http://localhost:3000/callback'; 
        return (
            <div>
                < NavbarPage />
                <SpotifyLogin clientId={clientId}
                    redirectUri={redirectUri}
                    onSuccess={onSuccess}
                    onFailure={onFailure}/>
                </div>
        )
    }
}
export default LoginSpotify;