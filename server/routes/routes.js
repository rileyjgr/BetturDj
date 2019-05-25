const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const querystring = require('querystring')
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

    let redirect_uri = 
    process.env.REDIRECT_URI || 
    'http://localhost:3000/callback'
      
      app.get('/spotifylogin', function(req, res) {
          console.log(req);
        res.redirect('https://accounts.spotify.com/authorize?' +
          querystring.stringify({
            response_type: 'code',
            client_id: process.env.SPOTIFY_CLIENT_ID,
            scope: 'user-read-private user-read-email',
            redirect_uri
          }))
      });

      app.get('/callback', function(req, res) {
        let code = req.query.code || null
        let authOptions = {
          url: 'https://accounts.spotify.com/api/token',
          form: {
            code: code,
            redirect_uri,
            grant_type: 'authorization_code'
          },
          headers: {
            'Authorization': 'Basic ' + (new Buffer(
              process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
            ).toString('base64'))
          },
          json: true
        }
        request.post(authOptions, function(error, response, body) {
          var access_token = body.access_token
          let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
          res.redirect(uri + '?access_token=' + access_token)
        })
      });
    }    
};
