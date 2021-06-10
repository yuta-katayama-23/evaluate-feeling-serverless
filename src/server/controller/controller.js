'use strict'

// 以下を書くかURLの記事のようにするかどっちでもOK
// https://qiita.com/yuta-katayama-23/items/29b91fed629fe758a42d#%E2%85%B0-referenceerror-regeneratorruntime-is-not-defined
// for using async/await in babel
require('core-js/stable')
require('regenerator-runtime/runtime')

const axios = require('axios').default;

// dotenv
const dotenv = require('dotenv')
dotenv.config();

const fetchMeaningCloud = async (req, res) => {
    // console.log(req.body)
    try {
        const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&lang=en&txt=${req.body.txt}`)
        res.status(200).send(response.data)
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).send({
                error: error.response.data,
                errorMsg: error.message
            })
        } else {
            res.status(500).send({ errorMsg: error.message })
        }
    }
}

module.exports = {
    fetchMeaningCloud
}