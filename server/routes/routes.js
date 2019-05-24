const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


module.exports = {
    app: async(app)=>{
        app.use(bodyParser.json());
        app.use(express.static(`${__dirname}/../../dist`));
        app.get('*', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    },

    spotify: async(app)=>{
        app.use(bodyParser.json());
        // spotify creds and variables
        let client_id = process.env.SPOTIFY_CLIENT_ID; 
        let client_secret = process.env.SPOTIFY_CLIENT_SECRET; 
        let redirect_uri = '/spotifyredirect'; // not sure what we want to do with this yet
        let stateKey = 'spotify_auth_state';

        let randomString = '';
        const generateRandmonString = (length) =>{
        
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (let i=0; i<length; i++){
                randomString += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            
            return randomString;
        };
        app.use(express.static(__dirname + '/public'))
            .use(cors())
            .use(cookieParser());

        app.get('/spotifyLogin', (req, res)=>{
           let state = generateRandmonString(16); 
           res.cookie(stateKey, state);
           
           // app request authorization 
           let scope = 'user-read-private user-read-email';

            res.redirect('https://accounts.spotify.com/authorize?' +
                querystring.stringify({
                response_type: 'code',
                client_id: client_id,
                scope: scope,
                redirect_uri: redirect_uri,
                state: state
            }));
        });

        app.get('/spotifycallback', (req, res)=>{
            
            let code = req.query.code || null;
            let state = req.query.state || null;
            let storedState = req.cookies ? req.cookies[stateKey] : null;

            
        });

        app.get('/spotify_refresh_token', (req, res)=>{

        });
    }    
};
