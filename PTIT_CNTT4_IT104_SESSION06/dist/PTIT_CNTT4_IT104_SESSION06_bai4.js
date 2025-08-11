class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class RectangleBai4 {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        return this.height * this.width;
    }
    calculatePerimeter() {
        return (this.height + this.width) * 2;
    }
}
const Circle1 = new Circle(5);
const RectangleBai41 = new RectangleBai4(3, 4);
console.log(`Diện tích hình tròn ${Circle1.calculateArea()} Chu vi hình tròn ${Circle1.calculatePerimeter()}`);
console.log(`Diện tích chữ nhật ${RectangleBai41.calculateArea()} Chu vi hình chữ nhật ${RectangleBai41.calculatePerimeter()}`);
