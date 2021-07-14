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
chores.get('/', (req,res) => {
    Chore.find({}, (err, foundChores) => {
        res.json(foundChores)
    })
})

// UPDATE
chores.put('/:id', (req,res) => {
    Chore.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedChore) => {
            if (err) {
                res.send(err)
            }else {
                Chore.find({}, (err, foundChore) => {
                    res.json(foundChore)
                })
            }
        }
    )
})

// DELETE
chores.delete('/:id', (req,res) => {
    Chore.findByIdAndDelete(
        req.params.id,
        (err, deletedChore) => {
            Chore.find({}, (err, foundChores) => {
                res.json(foundChores)
            })
        }
    )
})

module.exports = chores