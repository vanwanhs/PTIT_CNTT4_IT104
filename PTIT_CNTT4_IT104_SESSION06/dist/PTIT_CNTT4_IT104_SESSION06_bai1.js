class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return (`Chiểu rộng: ${this.width} - Chiều dài: ${this.height}`);
    }
}
const Rectangle1 = new Rectangle("Hình vuông", 5, 5);
console.log(Rectangle1.getName());
console.log(Rectangle1.getSize());
