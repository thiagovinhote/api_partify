const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const PartySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { collection: 'parties' });

const Party = mongoose.model('Party', PartySchema);

module.exports = Party;
