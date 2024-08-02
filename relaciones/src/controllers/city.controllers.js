const catchError = require('../utils/catchError');
const cities = require('../models/City');

const getAll = catchError(async(req, res) => {
    return res.json(cities)
});

module.exports = {
    getAll
}