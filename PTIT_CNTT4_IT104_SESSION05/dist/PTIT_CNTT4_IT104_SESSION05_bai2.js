class student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    displayInfo() {
        console.log(`Id: ${this.id}
                    Tuổi: ${this.age}
                    Email:${this.email}
            `);
    }
}
let studentbai1 = [];
studentbai1.push(new student(1, 19, "anh@gmail.com"));
studentbai1.push(new student(2, 19, "hihi@gamil.com"));
studentbai1.forEach(student => student.displayInfo());
