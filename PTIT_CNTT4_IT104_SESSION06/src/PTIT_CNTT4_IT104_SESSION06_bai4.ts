interface Geometry{
    calculateArea():number;
    calculatePerimeter():number;
}
class Circle implements Geometry{
    private radius: number;
    constructor(radius:number){
        this.radius = radius;
    }
    public calculateArea(): number {
        return Math.PI * this.radius * this.radius
    }
    public calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
class RectangleBai4 implements Geometry{
    private width: number;
    private height: number;
    constructor(width: number, height: number){
        this.height = height;
        this.width = width;
    }
    public calculateArea(): number {
        return this.height * this.width;
    }
    public calculatePerimeter(): number {
        return (this.height + this.width) * 2;
    }
}
const Circle1 = new Circle(5);
const RectangleBai41 = new RectangleBai4(3,4);
console.log(`Diện tích hình tròn ${Circle1.calculateArea()} Chu vi hình tròn ${Circle1.calculatePerimeter()}`);
console.log(`Diện tích chữ nhật ${RectangleBai41.calculateArea()} Chu vi hình chữ nhật ${RectangleBai41.calculatePerimeter()}`);

