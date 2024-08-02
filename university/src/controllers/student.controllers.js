const catchError = require('../utils/catchError');
const Student = require('../models/student');

const getAll = catchError(async (req, res) => {
    const { program } = req.query;
    const where = program === 'computer-engineering' 
        ? { program: 'computer engineering' } 
        : {};
    const results = await Student.findAll({ where });
    return res.json(results.length ? results : { where });
});


const create = catchError(async(req, res) => {
    let result
    for (let i = 0; i < req.body.length; i++) {
        result = await Student.create(req.body[i]); 
    }
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Student.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Student.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Student.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}