class Customer {
    constructor(email, phone) {
        this.id = Customer.nextId++;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        `${this.id} - ${this.email} - ${this.phone}`;
    }
}
Customer.nextId = 1;
