function getStudentSummary(student) {
    const { name, subjects } = student;
    const total = subjects.reduce((sum, subj) => sum + subj.score, 0);
    const avg = +(total / subjects.length).toFixed(2);
    let grade;
    if (avg >= 8.5) grade = "Học sinh giỏi";
    else if (avg >= 7) grade = "Học sinh khá";
    else if (avg >= 5) grade = "Học sinh trung bình";
    else grade = "Học sinh yếu";

    const best = subjects.reduce((a, b) => (a.score > b.score ? a : b));
    const worst = subjects.reduce((a, b) => (a.score < b.score ? a : b));
    return `${name} có điểm trung bình là ${avg}, được xếp loại: ${grade}.
    Môn học tốt nhất: ${best.name} (${best.score})
    Môn học kém nhất: ${worst.name} (${worst.score})`;
}

const student = {
    name: "Nguyễn Văn An",
    subjects: [
        { name: "Toán", score: 9 },
        { name: "Văn", score: 7.5 },
        { name: "Anh", score: 8.2 },
        { name: "Lý", score: 6.8 }
    ]
};

console.log(getStudentSummary(student));
