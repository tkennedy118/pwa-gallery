const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pga-gallery-db',
  { 
    useNewUrlParser: true,
    useFindAndModify: false 
  }
);