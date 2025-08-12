class Employee{
    name:string;
    company:string;
    phone:string;
    constructor(name:string,company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    public printInfo():string{
        return `${this.name} - ${this.company} - ${this.phone}`
    }
}

class Manager extends Employee {
    public teamSize : number;
    constructor (name:string, company:string, phone:string, teamSize:number){
        super(name,company,phone);
        this.teamSize = teamSize;
    }
    public printInfo(): string {
        return `${super.printInfo()} - ${this.teamSize}`;
    }
}
const Employee1 = new Manager("Anh", "Văn", "123333", 4);
console.log(Employee1.printInfo());
