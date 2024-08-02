const Article = require("./Article")
const Author = require("./Author")
const City = require("./City")
const Country = require("./Country")
const Degree = require('./Degrees')
const Student = require('./Students')

Article.belongsTo(Author)
Author.hasMany(Article)

City.belongsTo(Country)
Country.hasMany(City)

Degree.hasMany(Student)
Student.belongsTo(Degree)