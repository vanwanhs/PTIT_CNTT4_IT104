abstract class Person{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract displayInfo():void;
}
class Student extends Person{
    private id : number;
    constructor (name:string, id:number){
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`${this.id} - ${this.name}`);
    }
}
class Teacher extends Person{
    private subject: string;
    constructor(name:string,subject:string){
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`${this.name} - ${this.subject}`);
    }
}

const student1 = new Student("anh",1);
const teacher1 = new Teacher("van", "math");
student1.displayInfo();
teacher1.displayInfo();