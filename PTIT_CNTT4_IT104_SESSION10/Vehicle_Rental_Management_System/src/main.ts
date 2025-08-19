class Customer{
    static nextId = 1;
    id:number;
    email:string;
    phone:string;
    constructor(email:string,phone:string){
        this.id = Customer.nextId++;
        this.email = email;
        this.phone = phone;
    }
    getDetails():void{
        `${this.id} - ${this.email} - ${this.phone}`
    }
}
