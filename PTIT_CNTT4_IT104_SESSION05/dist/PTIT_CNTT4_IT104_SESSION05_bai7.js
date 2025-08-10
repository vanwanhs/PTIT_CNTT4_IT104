class Novel {
    constructor(code, name, writer) {
        this.code = code;
        this.name = name;
        this.writer = writer;
    }
    getCode() {
        return this.code;
    }
    showDetails() {
        return `${this.code} - ${this.name} - ${this.writer}`;
    }
    editDetails(newName, newWriter) {
        this.name = newName;
        this.writer = newWriter;
    }
}
class Bookshelf {
    constructor() {
        this.collection = [];
    }
    store(book) {
        this.collection.push(book);
    }
    listAll() {
        console.log("Danh sách sách trên kệ:");
        this.collection.forEach((book) => {
            console.log(book.showDetails());
        });
    }
    modifyById(code, newName, newWriter) {
        const target = this.collection.find((b) => b.getCode() === code);
        if (target) {
            target.editDetails(newName, newWriter);
            console.log(`Sách có mã ${code} đã được chỉnh sửa.`);
        }
        else {
            console.log(` Không tìm thấy sách với mã ${code}`);
        }
    }
}
const n1 = new Novel(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const n2 = new Novel(2, "Lão Hạc", "Nam Cao");
const n3 = new Novel(3, "Tắt Đèn", "Ngô Tất Tố");
const n4 = new Novel(4, "Số Đỏ", "Vũ Trọng Phụng");
const n5 = new Novel(5, "Chí Phèo", "Nam Cao");
const shelf = new Bookshelf();
shelf.store(n1);
shelf.store(n2);
shelf.store(n3);
shelf.store(n4);
shelf.store(n5);
shelf.listAll();
shelf.modifyById(3, "Tắt Đèn (Bản Mới)", "Ngô Tất Tố");
shelf.listAll();
