function convertScore(score) {
    if (typeof score === "number")
        return score;
    switch (score.toUpperCase()) {
        case "A": return 10;
        case "B": return 8;
        case "C": return 6;
        case "D": return 4;
        case "F": return 0;
        default: return 0;
    }
}
function calculateAverage(student) {
    const total = student.subjects10.reduce((sum, subj) => sum + convertScore(subj.score), 0);
    return student.subjects10.length > 0 ? total / student.subjects10.length : 0;
}
function classifyStudent(student) {
    const avg = calculateAverage(student);
    if (avg >= 9)
        return "Xuất sắc";
    if (avg >= 8)
        return "Giỏi";
    if (avg >= 6.5)
        return "Khá";
    if (avg >= 5)
        return "Trung bình";
    return "Yếu";
}
let students10 = [];
function addStudent10(student) {
    students10.push(student);
}
function updateStudent10(name, updatedInfo) {
    const index = students10.findIndex(s => s.name === name);
    if (index !== -1) {
        students10[index] = Object.assign(Object.assign({}, students10[index]), updatedInfo);
    }
}
function deleteStudent10(name) {
    students10 = students10.filter(s => s.name !== name);
}
function printStudents10() {
    students10.forEach(student => {
        const meta = Object.assign(Object.assign({}, student), { average: calculateAverage(student), classification: classifyStudent(student) });
        console.log("-----");
        console.log(`Tên: ${meta.name}`);
        console.log(`Tuổi: ${meta.age}`);
        meta.subjects10.forEach(subj => {
            console.log(`  ${subj.name}: ${subj.score}`);
        });
        console.log(`Điểm TB: ${meta.average.toFixed(2)}`);
        console.log(`Xếp loại: ${meta.classification}`);
    });
}
addStudent10({
    name: "Nguyễn Văn A",
    age: 20,
    subjects10: [
        { name: "Toán", score: "A" },
        { name: "Lý", score: 9 },
        { name: "Hóa", score: "B" }
    ]
});
addStudent10({
    name: "Trần Thị B",
    age: 19,
    subjects10: [
        { name: "Toán", score: 6 },
        { name: "Lý", score: "C" },
        { name: "Hóa", score: 7 }
    ]
});
printStudents10();
