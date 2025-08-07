interface Student{
    name: string;
    age: number;
    email: string;
}
const student1: Student = {
    name: "Nguyen Van Anh",
    age: 18,
    email: "hihi@gamil.com",
}
function printInforStudent(student : Student) : void{
    console.log(`My name is ${student.name} , Age: ${student.age}, email: ${student.email}`);
}
printInforStudent(student1);