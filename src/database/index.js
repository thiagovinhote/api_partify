const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apinode', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
