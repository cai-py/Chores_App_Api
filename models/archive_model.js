const mongoose = require('mongoose');

const archiveSchema = new mongoose.Schema({
    week: Number,
    user: String,
    points: Number
});

const Archive = mongoose.model('Archive', archiveSchema);

module.exports = Archive