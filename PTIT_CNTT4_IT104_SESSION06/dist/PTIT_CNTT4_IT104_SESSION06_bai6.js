class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        console.log("Danh sách học sinh trong lớp");
        this.students.forEach(s => {
            console.log(`Id: ${s.getId()}, Name: ${s.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter(s => s.getId() === id);
    }
    addStudentInClass(id) {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID:${id}`);
        }
    }
}
allStudents.push(new Student(1, "Ánh"));
allStudents.push(new Student(2, "VAnh"));
allStudents.push(new Student(3, "Nguyễn"));
allStudents.push(new Student(4, "Thị"));
allStudents.push(new Student(5, "Vân"));
allStudents.push(new Student(6, "Ánh"));
const class1 = new classroom();
const class2 = new classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("Lớp 1");
class1.showStudents();
console.log("Lớp 2");
class2.showStudents();
console.log("Học sinh còn lại trong allStudents:", allStudents);
