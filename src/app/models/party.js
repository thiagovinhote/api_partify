const mongoose = require('../../database');

const PartySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  place: {
    type: String,
    required: true,
  },
  dateBegin: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: false,
    default: 'https://firebasestorage.googleapis.com/v0/b/partify-9c7f4.appspot.com/o/grupo_images%2F82068708-92C3-408D-A770-FB2C477CA90D?alt=media&token=3596551c-fb85-4ba5-928a-85a4171450f5'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { collection: 'parties' });

const Party = mongoose.model('Party', PartySchema);

module.exports = Party;
