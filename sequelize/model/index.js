import students from "./student.js";
import identitycard from "./identitycard.js";


//one to one
students.hasOne(identitycard);
identitycard.belongsTo(students);


export {students,identitycard}
