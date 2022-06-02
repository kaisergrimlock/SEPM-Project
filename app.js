const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(function rqListener(req, res){
    console.log(req)
});

server.listen(3000);