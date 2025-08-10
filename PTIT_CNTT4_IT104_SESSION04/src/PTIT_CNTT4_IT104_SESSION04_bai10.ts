// type Subject10 = {
//   name: string
//   score: number | string
// }

// type Student10 = {
//   name: string
//   age: number
//   subjects10: Subject10[]
// }

// function convertScore(score: number | string): number {
//   if (typeof score === "number") return score
//   switch (score.toUpperCase()) {
//     case "A": return 10
//     case "B": return 8
//     case "C": return 6
//     case "D": return 4
//     case "F": return 0
//     default: return 0
//   }
// }

// function calculateAverage(student: Student10): number {
//   const total = student.subjects10.reduce((sum, subj) => sum + convertScore(subj.score), 0)
//   return student.subjects10.length > 0 ? total / student.subjects10.length : 0
// }

// function classifyStudent(student: Student10): string {
//   const avg = calculateAverage(student)
//   if (avg >= 9) return "Xuất sắc"
//   if (avg >= 8) return "Giỏi"
//   if (avg >= 6.5) return "Khá"
//   if (avg >= 5) return "Trung bình"
//   return "Yếu"
// }

// type StudentWithMeta10 = Student10 & {
//   average: number
//   classification: string
// }

// let students10: Student10[] = []

// function addStudent10(student: Student10): void {
//   students10.push(student)
// }

// function updateStudent10(name: string, updatedInfo: Partial<Student10>): void {
//   const index = students10.findIndex(s => s.name === name)
//   if (index !== -1) {
//     students10[index] = { ...students10[index], ...updatedInfo }
//   }
// }

// function deleteStudent10(name: string): void {
//   students10 = students10.filter(s => s.name !== name)
// }

// function printStudents10(): void {
//   students10.forEach(student => {
//     const meta: StudentWithMeta10 = {
//       ...student,
//       average: calculateAverage(student),
//       classification: classifyStudent(student)
//     }

//     console.log("-----")
//     console.log(`Tên: ${meta.name}`)
//     console.log(`Tuổi: ${meta.age}`)
//     meta.subjects10.forEach(subj => {
//       console.log(`  ${subj.name}: ${subj.score}`)
//     })
//     console.log(`Điểm TB: ${meta.average.toFixed(2)}`)
//     console.log(`Xếp loại: ${meta.classification}`)
//   })
// }

// addStudent10({
//   name: "Nguyễn Văn A",
//   age: 20,
//   subjects10: [
//     { name: "Toán", score: "A" },
//     { name: "Lý", score: 9 },
//     { name: "Hóa", score: "B" }
//   ]
// })

// addStudent10({
//   name: "Trần Thị B",
//   age: 19,
//   subjects10: [
//     { name: "Toán", score: 6 },
//     { name: "Lý", score: "C" },
//     { name: "Hóa", score: 7 }
//   ]
// })

// printStudents10()
type Student1= {
    readonly studentId: string,
    name: string,
    email: string,
    hasComplete: boolean,
    finalScore?: number,
}
type Course = {
    courseId: string,
    title: string,
    instructor: string,
    student: Student1[],
    isActive: boolean,
}
type CourseManager = {
    shoolName: string,
    year: number,
    courses: Course[],
};
// dữ liệu các sinh viên
const studentsCourse1: Student1[] = [
    { studentId: "S001", name: "An", email: "an@example.com", hasComplete: true, finalScore: 85 },
    { studentId: "S002", name: "Bình", email: "binh@example.com", hasComplete: false },
    { studentId: "S003", name: "Chi", email: "chi@example.com", hasComplete: true, finalScore: 92 },
];
const studentsCourse2: Student1[] = [
    { studentId: "S004", name: "Dũng", email: "dung@example.com", hasComplete: true, finalScore: 78 },
    { studentId: "S005", name: "Hà", email: "ha@example.com", hasComplete: false },
];
// Dữ liệu khóa học
const course1: Course = {
    courseId: "C001",
    title: "TypeScript Cơ Bản",
    instructor: "Nguyễn Văn A",
    isActive: true,
    student: studentsCourse1,
};

const course2: Course = {
    courseId: "C002",
    title: "Lập Trình Web",
    instructor: "Trần Thị B",
    isActive: false,
    student: studentsCourse2,
};
const courseManager: CourseManager = {
    shoolName: "PTIT University",
    year: 2025,
    courses: [course1, course2],
};
// function getAllCompletedStudents(manager: CourseManager): Student1[] {
//     return manager.courses
//         .flatMap(course => course.student)   // gộp tất cả sinh viên từ các khóa
//         .filter(student => student.hasComplete); // lọc ra sinh viên đã hoàn thành
// }

// console.log(getAllCompletedStudents(courseManager));
