const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apipartify', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
