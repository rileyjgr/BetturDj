const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = {
    app: async(app)=>{
        app.use(bodyParser.json());
        app.use(express.static(`${__dirname}/../../dist`));
        app.get('*', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    }
};
