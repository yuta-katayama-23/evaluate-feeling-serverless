'use strict'

const router = require('./router/router');

const serverless = require('serverless-http');
const express = require('express');
const app = express();

/* Middleware */
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// dotenv
const dotenv = require('dotenv')
dotenv.config();

// path must route to lambda
app.use('/.netlify/functions/index', router);

module.exports = app;
module.exports.handler = serverless(app);