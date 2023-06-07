const express = require('express')
const dotenv = require('dotenv')
const app = (express(), dotenv)
const CONNECTION_STRING = require('../.env')
console.log(CONNECTION_STRING);

app.listen(CONNECTION_STRING, () => {
    console.log('Up on 4001');
})