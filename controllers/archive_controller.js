const express = require('express');
const archive = express.Router();
const Archive = require('../models/archive_model.js');

//  CREATE 
archive.post('/', (req,res) => {
    Archive.create(req.body, (err, createdArchive) => {
        Archive.find({}, (err, foundArchives) => {
            res.json(foundArchives)
        })
    })
})

// READ
archive.get('/', (req,res) => {
    Archive.find({}, (err, foundArchives) => {
        if (err != null) {
            throw err
        }
        res.json(foundArchives)
    })
})

// UPDATE
archive.put('/:id', (req,res) => {
    Archive.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedArchive) => {
            if (err) {
                res.send(err)
            }else {
                Archive.find({}, (err, foundArchives) => {
                    res.json(foundArchives)
                })
            }
        }
    )
})

// DELETE
archive.delete('/:id', (req,res) => {
    Archive.findByIdAndDelete(
        req.params.id,
        (err, deletedArchive) => {
            Archive.find({}, (err, foundArchives) => {
                res.json(foundArchives)
            })
        }
    )
})

module.exports = archive