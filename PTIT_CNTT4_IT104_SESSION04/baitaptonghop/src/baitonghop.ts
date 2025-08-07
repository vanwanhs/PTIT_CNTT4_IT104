type Subject = {
    subjectName: string,
    score: number | string,
};

type Student = {
    id: number,
    name: string,
    age: number,
    subject: Subject[]
};

let student: Student[] = [];

function addStudent(id: number, name: string, age: number, subjects: Subject[]): void {
    const newStudent: Student = {
        id: id,
        name: name,
        age: age,
        subject: subjects
    };
    student.push(newStudent);
}

function printInforStudent(): void {
    for (let i = 0; i < student.length; i++) {
        const s = student[i];
        console.log(`Thông tin sinh viên:
  ID: ${s.id}
  Name: ${s.name}
  Age: ${s.age}
  Subjects:`);

        for (let subj of s.subject) {
            console.log(`    - ${subj.subjectName}: ${subj.score}`);
        }
        console.log('--------------------------------');
    }
}

addStudent(1, "Nguyễn Văn A", 20, [
    { subjectName: "Toán", score: 8.5 },
    { subjectName: "Lý", score: "Chưa có điểm" }
]);

addStudent(2, "Trần Thị B", 19, [
    { subjectName: "Hóa", score: 7 },
    { subjectName: "Sinh", score: 9 }
]);

printInforStudent();
