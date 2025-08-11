abstract class Shape{
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
    public getName() : string{
        return this.name;
    }
    public abstract getSize() : string;
}

class Rectangle extends Shape{
    private width: number;
    private height: number;
    constructor(name:string,width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    public getSize(): string{
        return (`Chiểu rộng: ${this.width} - Chiều dài: ${this.height}`)
    }
}
const Rectangle1 = new Rectangle("Hình vuông", 5 , 5);
console.log(Rectangle1.getName());
console.log(Rectangle1.getSize());
