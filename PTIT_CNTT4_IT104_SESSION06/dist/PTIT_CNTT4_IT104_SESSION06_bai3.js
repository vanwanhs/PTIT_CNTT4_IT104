//Phương thức trừu trượng (abtract mothod)
// - Chỉ khai báo tên, kiểu trả về, tham số chứ không cần phần thân
// - Chỉ được khai báo bên trong abstract class
// - Lớp con bắt buộc phải ghi đè (inplement) phương thức này.
// -Dùng khi bạn muốn ép buộc các lớp con phải tự định nghĩa cách hoạt động
class animalAbtract {
    move() {
        console.log('Dog is moving...');
    }
}
class animalE extends animalAbtract {
    name() {
        console.log(`Dog`);
    }
}
const a = new animalE();
a.name();
a.move();
// Phương thức thường (method)
// - Là phương thức đầy các chức năng (body) trong lớp con hoặc lớp cha
// - Khi gọi sẽ thực hiện luôn phương thức là logic code
// - Có thể ghi đè (override) ở class con, hoặc dùng luôn logic của class cha
class animal {
    speak() {
        console.log(`Con chó kêu gâu gâu`);
    }
}
const method = new animal();
method.speak();
