const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

const mongoConnect = process.env.MONGODB_URI || "mongodb://localhost:27017/betterdj";

mongoose.connect(mongoConnect).then(function(error) {
    if (error) {
        console.log(error);
    }
});

const db = mongoose.connection;
Schema = mongoose.Schema;

db.on("error", console.error.bind(console, "connection error:"));

db.once('open', function(){
    routes.app(app);
    // routes.app(spotify);
    app.listen(PORT);
});

