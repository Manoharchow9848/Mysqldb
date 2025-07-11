import students from "./student.js";
import identitycard from "./identitycard.js";
import courses from "./courses.js";
import studentcourses from "./studentcourse.js";
//one to one
students.hasOne(identitycard);
identitycard.belongsTo(students);

//many to many

students.belongsToMany(courses,{through:'studentcourses'})
courses.belongsToMany(students, {through:'studentcourses'})

export {students,identitycard,courses,studentcourses}
