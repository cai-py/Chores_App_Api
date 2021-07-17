const mongoose = require('mongoose');

const choreSchema = new mongoose.Schema({
    choreName: String,
    img: { type: String, default: 'https://via.placeholder.com/150' },
    points: Number
});

const Chore = mongoose.model('Chore', choreSchema);

module.exports = Chore



// BUILD A SEED