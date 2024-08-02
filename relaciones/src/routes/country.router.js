const { getAll, create, getOne, remove, update } = require('../controllers/country.controllers');
const express = require('express');

const routerCountry = express.Router();

routerCountry.route('/')
  .get(getAll)
  .post(create);

routerCountry.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update);

module.exports = routerCountry;