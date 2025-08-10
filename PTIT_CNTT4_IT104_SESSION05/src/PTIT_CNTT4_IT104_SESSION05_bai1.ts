abstract class Shape{
    protected name: string;

    constructor(value_name: string){
        this.name = value_name;
    }

    getName():string {
        return this.name;
    }
    abstract getSize():void;
}
class Rectangle extends Shape{
    private width: number;
    private height: number;

    constructor(value_name: string, value_width:number, value_hight: number){
        super(value_name);
        this.height = value_hight;
        this.width = value_width;
    }
    getSize(): void {
        console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
    }
}
const rect = new Rectangle("Hình chữ nhật", 10, 5);

console.log("Tên hình:", rect.getName());
rect.getSize();