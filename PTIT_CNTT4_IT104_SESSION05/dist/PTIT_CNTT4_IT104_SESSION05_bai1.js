class Shape {
    constructor(value_name) {
        this.name = value_name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(value_name, value_width, value_hight) {
        super(value_name);
        this.height = value_hight;
        this.width = value_width;
    }
    getSize() {
        console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
    }
}
const rect = new Rectangle("Hình chữ nhật", 10, 5);
console.log("Tên hình:", rect.getName());
rect.getSize();
