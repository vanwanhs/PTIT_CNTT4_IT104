class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`${this.id} - ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`${this.name} - ${this.subject}`);
    }
}
const student1 = new Student("anh", 1);
const teacher1 = new Teacher("van", "math");
student1.displayInfo();
teacher1.displayInfo();
