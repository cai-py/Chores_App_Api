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
    // console.log('get')
    Chore.find({}, (err, foundChores) => {
        if (err != null) {
            // console.log(err)
            throw err
        }
        // console.log(foundChores)
        res.json(foundChores)
    })
    // console.log('3')
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
                Chore.find({}, (err, foundChores) => {
                    res.json(foundChores)
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
const choreSeed = require('../models/seeds/chores_data')
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