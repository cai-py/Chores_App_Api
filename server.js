// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

// CONFIGURATION
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

// DATABASE
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// ERROR / SUCCESS
mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
);
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
);
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

// MIDDLEWARE
app.use(express.json()); // use .json(), not .urlencoded()
app.use(cors())

// ROUTES
const choresController = require('./controllers/chores_controller');
app.use('/chores', choresController)

const archiveController = require('./controllers/archive_controller');
app.use('/archive', archiveController)

const userController = require('./controllers/user_controller');
app.use('/users', userController)

// LISTENER
app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
})