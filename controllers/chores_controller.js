const express = require('express');
const chores = express.Router();

chores.get('/', (req,res) => {
    res.send('hello wurld');
})

module.exports = chores