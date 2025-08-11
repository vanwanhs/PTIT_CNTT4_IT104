class StudentBai7 {
    private idBai7: number;
    private nameBai7: string;

    constructor(idBai7: number, nameBai7: string) {
        this.idBai7 = idBai7;
        this.nameBai7 = nameBai7;
    }

    public getIdBai7(): number {
        return this.idBai7;
    }

    public getNameBai7(): string {
        return this.nameBai7;
    }

    public setNameBai7(newNameBai7: string): void {
        this.nameBai7 = newNameBai7;
    }
}

let allStudentsBai7: StudentBai7[] = [];

class ClassroomBai7 {
    private studentsBai7: StudentBai7[] = [];

    public showStudentsBai7(): void {
        console.log("Danh sách học sinh trong lớp:");
        this.studentsBai7.forEach(s => {
            console.log(`ID: ${s.getIdBai7()}, Name: ${s.getNameBai7()}`);
        });
    }

    public addStudentBai7(studentBai7: StudentBai7): void {
        this.studentsBai7.push(studentBai7);
    }

    public filterStudentBai7(idBai7: number): StudentBai7[] {
        return this.studentsBai7.filter(s => s.getIdBai7() === idBai7);
    }

    public addStudentInClassBai7(idBai7: number): void {
        const index = allStudentsBai7.findIndex(s => s.getIdBai7() === idBai7);
        if (index !== -1) {
            this.studentsBai7.push(allStudentsBai7[index]);
            allStudentsBai7.splice(index, 1);
        } else {
            console.log(`Không tìm thấy học sinh với ID: ${idBai7}`);
        }
    }

    public removeStudentBai7(idBai7: number): void {
        const index = this.studentsBai7.findIndex(s => s.getIdBai7() === idBai7);
        if (index !== -1) {
            const removedStudentBai7 = this.studentsBai7.splice(index, 1)[0];
            allStudentsBai7.push(removedStudentBai7);
            console.log(`Đã xóa học sinh ID: ${idBai7} ra khỏi lớp.`);
        } else {
            console.log(`Không tìm thấy học sinh với ID: ${idBai7} trong lớp.`);
        }
    }

    public editStudentBai7(idBai7: number, newNameBai7: string): void {
        const studentBai7 = this.studentsBai7.find(s => s.getIdBai7() === idBai7);
        if (studentBai7) {
            studentBai7.setNameBai7(newNameBai7);
            console.log(`Đã đổi tên học sinh ID: ${idBai7} thành "${newNameBai7}".`);
        } else {
            console.log(`Không tìm thấy học sinh với ID: ${idBai7} trong lớp.`);
        }
    }
}


allStudentsBai7.push(new StudentBai7(1, "An"));
allStudentsBai7.push(new StudentBai7(2, "Bình"));
allStudentsBai7.push(new StudentBai7(3, "Cường"));
allStudentsBai7.push(new StudentBai7(4, "Dũng"));
allStudentsBai7.push(new StudentBai7(5, "Hà"));
allStudentsBai7.push(new StudentBai7(6, "Lan"));


const class1Bai7 = new ClassroomBai7();

class1Bai7.addStudentInClassBai7(1);
class1Bai7.addStudentInClassBai7(2);
class1Bai7.addStudentInClassBai7(3);

console.log("Ban đầu:");
class1Bai7.showStudentsBai7();

class1Bai7.removeStudentBai7(2);
console.log("\nSau khi xóa học sinh ID 2:");
class1Bai7.showStudentsBai7();
console.log("Danh sách allStudentsBai7 sau khi xóa:", allStudentsBai7);

class1Bai7.editStudentBai7(1, "Anh Tuấn");
console.log("\nSau khi sửa tên học sinh ID 1:");
class1Bai7.showStudentsBai7();
