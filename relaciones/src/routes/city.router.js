const { getAll, create, getOne, remove, update } = require('../controllers/city.controllers');
const express = require('express');

const routerCities = express.Router();

routerCities.route('/')
  .get(getAll)
  .post(create);

routerCities.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update);

module.exports = routerCities;