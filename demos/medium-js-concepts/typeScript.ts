type Person = {
    name: string,
    age: number
}

type Studying = {
    semester: number
}

type Student = {
    id: string,
    age: number,
    semester: number
}

function createPerson() { 
    return { name: "Stefan", age: 39, semester: 25, id: "XPA"}
}

function printPerson(person: Person) {
    console.log(person.name, person.age);
}

function studyForAnotherSemester(student: Studying) {
    student.semester++;
}

function isLongTimeStudent(student: Student) {
    return student.age - student.semester / 2 > 30 && student.semester > 20
}

const me = createPerson();

printPerson(me);
studyForAnotherSemester(me);
isLongTimeStudent(me);

// -> 

type Collection<T> = {
    entries: T[]
}

function printCollection(coll: Collection<unknown>) {
    console.log(...coll.entries);
}

const person = {
    role: "abc"
}

type Person1 = typeof person;

class Person2 {
    name: string

    constructor(n: string) {
        this.name = n
    }
}

// value
const person = new Person2("abc");

// type
type PersonCollection = Collection<Person2>

function printPersons(coll: PersonCollection) {
    // ... crazy stuff here
}

