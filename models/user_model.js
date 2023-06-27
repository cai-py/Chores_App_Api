const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    img: { type: String, default: 'https://via.placeholder.com/150' }
});

const User = mongoose.model('User', userSchema);

module.exports = User
