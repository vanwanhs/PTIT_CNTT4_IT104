class student{
    id:number;
    age:number;
    email:string;

    constructor(id:number, age:number, email: string){
        this.id = id;
        this.age = age;
        this.email = email;
    }
    displayInfo():void{
        console.log(`Id: ${this.id}
                    Tuổi: ${this.age}
                    Email:${this.email}
            `);
    }
}
let studentbai1: student[] = [];
studentbai1.push(new student(1,19,"anh@gmail.com"));
studentbai1.push(new student(2,19,"hihi@gamil.com"));
studentbai1.forEach(student=>student.displayInfo());