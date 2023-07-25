const express = require('express');

const routers = express.Router();

routers.get('/', function(request, response){
    response.send('Products');
});

module.exports = routers;