class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name:string,company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo():void{
        console.log(`
            Tên: ${this.name}
            Công ty: ${this.company}
            Số điện thoại: ${this.phone}
            `);
    }
}

const staffManger = new Employee("Nguyen Van Anh","TNHH HL","012345678");
console.log(staffManger);

