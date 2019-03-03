const express = require('express');
const rouetr = express.Router();
const createUser = require('../app/command/createUser');
const commandHandler = require('../app/handlers/userCommandHandler');

rouetr.post('/create', (req, res) => {
    const command = new createUser(req.body.name, req.body.family);
    console.log('i am in controller');
    const userId = commandHandler.create(command);
    return res.send(userId);
});

rouetr.get('/', (req, res) => {
    
});

module.exports = rouetr;