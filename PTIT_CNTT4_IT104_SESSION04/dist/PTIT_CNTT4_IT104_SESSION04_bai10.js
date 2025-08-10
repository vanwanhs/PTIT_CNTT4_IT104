// type Subject10 = {
//   name: string
//   score: number | string
// }
// dữ liệu các sinh viên
const studentsCourse1 = [
    { studentId: "S001", name: "An", email: "an@example.com", hasComplete: true, finalScore: 85 },
    { studentId: "S002", name: "Bình", email: "binh@example.com", hasComplete: false },
    { studentId: "S003", name: "Chi", email: "chi@example.com", hasComplete: true, finalScore: 92 },
];
const studentsCourse2 = [
    { studentId: "S004", name: "Dũng", email: "dung@example.com", hasComplete: true, finalScore: 78 },
    { studentId: "S005", name: "Hà", email: "ha@example.com", hasComplete: false },
];
// Dữ liệu khóa học
const course1 = {
    courseId: "C001",
    title: "TypeScript Cơ Bản",
    instructor: "Nguyễn Văn A",
    isActive: true,
    student: studentsCourse1,
};
const course2 = {
    courseId: "C002",
    title: "Lập Trình Web",
    instructor: "Trần Thị B",
    isActive: false,
    student: studentsCourse2,
};
const courseManager = {
    shoolName: "PTIT University",
    year: 2025,
    courses: [course1, course2],
};
function getAllCompletedStudents(manager) {
    return manager.courses
        .flatMap(course => course.student) // gộp tất cả sinh viên từ các khóa
        .filter(student => student.hasComplete); // lọc ra sinh viên đã hoàn thành
}
console.log(getAllCompletedStudents(courseManager));
