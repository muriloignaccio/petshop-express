const petsModel = require('../models/pets.json');

const petsController = {
  buscarPets: (req, res) => {
    res.send(petsModel)
  }
};

module.exports = petsController;