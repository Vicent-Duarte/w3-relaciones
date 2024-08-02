const { getAll, create, getOne, remove, update } = require('../controllers/article.controllers');
const express = require('express');

const routerArticle = express.Router();

routerArticle.route('/')
  .get(getAll)
  .post(create);

routerArticle.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update);

module.exports = routerArticle;