const Student = require("./student");
const Course = require("./course");

Student.belongsToMany(Course, { through: 'cousestudents' })
Course.belongsToMany(Student, { through: 'cousestudents' })