class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        return `${this.name} - ${this.company} - ${this.phone}`;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        return `${super.printInfo()} - ${this.teamSize}`;
    }
}
const Employee1 = new Manager("Anh", "Văn", "123333", 4);
console.log(Employee1.printInfo());
