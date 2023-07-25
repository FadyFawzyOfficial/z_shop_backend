const express = require('express');

const apiServer = express();

apiServer.listen(3000, ()=> console.log('API Server Started'));

apiServer.get('/', function (request, response) {
    response.send('Hi, Fady. This Message from Express');
});