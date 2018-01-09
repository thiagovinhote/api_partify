const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Party = require('../models/party');
const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const parties = await Party.find();
    
    return res.send(parties);
  } catch (e) {
    return res.status(400).send({ error: 'Error' });
  }
});

router.get('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const party = await Party.findById(_id);
    
    if(!party)
      return res.status(400).send({ error: 'Party not found.' });

    return res.send(party);
  } catch (e) {
    return res.status(400).send({ error: 'Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const party = await Party.create(req.body);

    return res.send(party);
  } catch (e) {
    return res.status(400).send({ error: 'Register failed' });
  }
});

router.put('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    var party = await Party.findById(_id);
    
    if(!party)
      return res.status(400).send({ error: 'Party not found.' });


    await Party.findByIdAndUpdate(_id, {
      '$set': req.body,
    });

    party = await Party.findOne({ _id });

    return res.send(party);
  } catch (e) {
    return res.status(400).send({ error: 'Update failed' });
  }
});

router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const party = await Party.findByIdAndRemove(_id);

    if(!party)
      return res.status(400).send({ error: 'Party not found.' });

    return res.send(party);
  } catch (e) {
    return res.status(400).send({ error: 'Update failed' });
  }
});

module.exports = app => app.use('/parties', router);
