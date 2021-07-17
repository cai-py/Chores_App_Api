const express = require('express');
const user = express.Router();
const User = require('../models/user_model');

// CREATE
user.post('/', (req,res) => {
    User.create(req.body, (err, createdUser) => {
        User.find({}, (err, foundUsers) => {
            res.json(foundUsers)
        })
    })
})

// READ
user.get('/', (req,res) => {
    User.find({}, (err, foundUsers) => {
        res.json(foundUsers)
    })
})

// UPDATE
user.put('/:id', (req,res) => {
    User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedUser) => {
            if (err) {
                res.send(err)
            }else {
                User.find({}, (err, foundUsers) => {
                    res.json(foundUsers)
                })
            }
        }
    )
})

// DELETE
user.delete('/:id', (req,res) => {
    User.findByIdAndDelete(
        req.params.id,
        (err, deletedUser) => {
            User.find({}, (err, foundUsers) => {
                res.json(foundUsers)
            })
        }
    )
})

module.exports = user