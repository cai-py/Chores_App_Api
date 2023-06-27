const mongoose = require('mongoose');

const choreSchema = new mongoose.Schema({
    choreName: String,
    points: Number
});

const Chore = mongoose.model('Chore', choreSchema);

module.exports = Chore



// BUILD A SEED