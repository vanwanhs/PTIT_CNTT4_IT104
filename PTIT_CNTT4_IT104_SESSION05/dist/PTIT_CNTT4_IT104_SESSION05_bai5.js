class RectangleBai5 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(newWidth) {
        if (newWidth > 0) {
            this.width = newWidth;
        }
    }
    setHeight(newHeight) {
        if (newHeight > 0) {
            this.height = newHeight;
        }
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
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
