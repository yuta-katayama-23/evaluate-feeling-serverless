'use strict'

const axios = require('axios').default;
const serverless = require('serverless-http');

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
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

// for netify server-less
const router = express.Router();

router.post('/fetchMeaningCloud', (req, res) => {
    axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&lang=en&txt=${req.body.txt}`)
        .then((apiRes) => {
            res.send(apiRes.data)
        })
        .catch((error) => {
            console.log(error)
        })
})

// path must route to lambda
app.use('/.netlify/functions/index', router);
module.exports = app;
module.exports.handler = serverless(app);