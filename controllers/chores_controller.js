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

// SEED Jun27-Jul11
    // add data
const choreSeed = require('../models/seeds/Jun27Jul11')
chores.get('/seed', (req,res) => {
    Chore.insertMany(choreSeed, (err, manyChores) => {
        res.redirect('/chores')
    })
})
    // drop collection
chores.get('/dropcollection', (req,res) => {
    Chore.collection.drop()
    res.redirect('/chores')
})

module.exports = chores