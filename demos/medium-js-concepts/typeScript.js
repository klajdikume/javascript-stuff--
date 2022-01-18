function createPerson() {
    return { name: "Stefan", age: 39, semester: 25, id: "XPA" };
}
function printPerson(person) {
    console.log(person.name, person.age);
}
function studyForAnotherSemester(student) {
    student.semester++;
}
function isLongTimeStudent(student) {
    return student.age - student.semester / 2 > 30 && student.semester > 20;
}
var me = createPerson();
printPerson(me);
studyForAnotherSemester(me);
console.log(me.semester);
console.log(isLongTimeStudent(me));
