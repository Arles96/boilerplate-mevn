const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.connect('mongodb://127.0.0.1:27017/mevn-database').then(db => {
  console.log('DB is connected')
}).catch(err => {
  console.log(err);
});

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/tasks' ,require('./routes/tasks'));

// Static File
app.use(express.static(`${__dirname}/public`))

// Server ins listening
app.listen(app.get('port'), () => {
  console.log('Server on port 3000');
});