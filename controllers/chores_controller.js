const express = require('express');
const chores = express.Router();
const Chore = require('../models/chore_model.js');

// CREATE
chores.post('/', (req,res) => {
    Chore.create(req.body, (err, createdChore) => {
        Chore.find({}, (err, foundChores) => {
            res.json(foundChores) // .json() will send proper headers in response so client knows it's json coming back
        })
    })
})

// READ

// UPDATE

// DELETE

module.exports = chores