class Vehicle {
    constructor(id, name, year, companyb2) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.companyb2 = companyb2;
    }
    display() {
        console.log(`
            Id: ${this.id}
            Name: ${this.name}
            Year: ${this.year}
            Company: ${this.companyb2}
            `);
    }
}
const vehicle1 = new Vehicle(1, "HL", 2026, "PTIT Crop");
console.log(vehicle1);
