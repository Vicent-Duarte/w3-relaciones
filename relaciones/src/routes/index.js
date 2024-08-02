const express = require('express');
const routerAuthor = require('./author.router');
const routerCountry = require('./country.router');
const routerArticle = require('./article.router');
const routerCities = require('./city.router');
const routerDegree = require('./degree.router');
const routerStudent = require('./student.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/articles', routerArticle)
router.use('/authors', routerAuthor)
router.use('/countries', routerCountry)
router.use('/cities', routerCities)
router.use('/degrees', routerDegree)
router.use('/students', routerStudent)

module.exports = router;