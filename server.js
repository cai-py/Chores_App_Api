// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

// ROUTES
const choresController = require('./controllers/chores_controller');
app.use('/chores', choresController)

// LISTENER
app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
})