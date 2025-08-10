class RectangleBai5 {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public setWidth(newWidth: number): void {
        if (newWidth > 0) {
            this.width = newWidth;
        }
    }

    public setHeight(newHeight: number): void {
        if (newHeight > 0) {
            this.height = newHeight;
        }
    }

    public getArea(): number {
        return this.width * this.height;
    }

    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Sử dụng đúng tên biến
const rectBai5 = new RectangleBai5(5, 10);

console.log("Chiều rộng:", rectBai5.getWidth());
console.log("Chiều dài:", rectBai5.getHeight());
console.log("Chu vi:", rectBai5.getPerimeter());
console.log("Diện tích:", rectBai5.getArea());

rectBai5.setWidth(8);
rectBai5.setHeight(12);

console.log("Chiều rộng:", rectBai5.getWidth());
console.log("Chiều dài:", rectBai5.getHeight());
console.log("Chu vi:", rectBai5.getPerimeter());
console.log("Diện tích:", rectBai5.getArea());
