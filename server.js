const express = require('express'),
      mongoose = require('mongoose'),
      logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Database and mongoose connection
require('./config/connection');
const db = require('./models/index');

// Routes
require('./controllers/htmlroutes')(app);
require('./controllers/apiroutes')(app);

// Start the server.
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});