class BookBai9 {
    constructor(idBai9, titleBai9, authorBai9, stockBai9, statusBai9) {
        this.idBai9 = idBai9;
        this.titleBai9 = titleBai9;
        this.authorBai9 = authorBai9;
        this.stockBai9 = stockBai9;
        this.statusBai9 = statusBai9;
    }
    getIdBai9() {
        return this.idBai9;
    }
    getTitleBai9() {
        return this.titleBai9;
    }
    getAuthorBai9() {
        return this.authorBai9;
    }
    getStockBai9() {
        return this.stockBai9;
    }
    getStatusBai9() {
        return this.statusBai9;
    }
    setStockBai9(stockBai9) {
        this.stockBai9 = stockBai9;
    }
    setStatusBai9(statusBai9) {
        this.statusBai9 = statusBai9;
    }
}
class MemberBai9 {
    constructor(idBai9, nameBai9, contactBai9, statusBai9) {
        this.lendedBooksBai9 = [];
        this.idBai9 = idBai9;
        this.nameBai9 = nameBai9;
        this.contactBai9 = contactBai9;
        this.statusBai9 = statusBai9;
    }
    getIdBai9() {
        return this.idBai9;
    }
    getNameBai9() {
        return this.nameBai9;
    }
    getContactBai9() {
        return this.contactBai9;
    }
    getStatusBai9() {
        return this.statusBai9;
    }
    setStatusBai9(statusBai9) {
        this.statusBai9 = statusBai9;
    }
    getLendedBooksBai9() {
        return this.lendedBooksBai9;
    }
}
class LendedBookBai9 {
    constructor(memberIdBai9, bookIdBai9, dueDateBai9) {
        this.memberIdBai9 = memberIdBai9;
        this.bookIdBai9 = bookIdBai9;
        this.dueDateBai9 = dueDateBai9;
    }
}
class LibraryBai9 {
    constructor() {
        this.booksBai9 = [];
        this.membersBai9 = [];
    }
    addBookBai9(bookBai9) {
        this.booksBai9.push(bookBai9);
    }
    showBooksBai9() {
        console.log("Danh sách sách trong thư viện:");
        this.booksBai9.forEach(bookBai9 => {
            console.log(`ID: ${bookBai9.getIdBai9()} | Tiêu đề: ${bookBai9.getTitleBai9()} | Tác giả: ${bookBai9.getAuthorBai9()} | Số lượng: ${bookBai9.getStockBai9()} | Trạng thái: ${bookBai9.getStatusBai9()}`);
        });
    }
    registerMemberBai9(idBai9, nameBai9, contactBai9) {
        const memberBai9 = new MemberBai9(idBai9, nameBai9, contactBai9, "Đang hoạt động");
        this.membersBai9.push(memberBai9);
    }
    blockMemberBai9(idBai9) {
        const memberBai9 = this.membersBai9.find(m => m.getIdBai9() === idBai9);
        if (memberBai9) {
            memberBai9.setStatusBai9("Bị khóa");
        }
    }
    showMembersBai9() {
        console.log("Danh sách thành viên thư viện:");
        this.membersBai9.forEach(memberBai9 => {
            console.log(`ID: ${memberBai9.getIdBai9()} | Tên: ${memberBai9.getNameBai9()} | Liên hệ: ${memberBai9.getContactBai9()} | Trạng thái: ${memberBai9.getStatusBai9()}`);
        });
    }
}
const libraryBai9 = new LibraryBai9();
libraryBai9.addBookBai9(new BookBai9(1, "Lập trình Java", "Nguyễn Văn A", 5, "Còn hàng"));
libraryBai9.addBookBai9(new BookBai9(2, "Học TypeScript", "Trần Thị B", 2, "Còn hàng"));
libraryBai9.showBooksBai9();
libraryBai9.registerMemberBai9(1, "Nguyễn Văn Nam", "0123456789");
libraryBai9.registerMemberBai9(2, "Trần Thị Lan", "0987654321");
libraryBai9.registerMemberBai9(3, "Lê Văn Minh", "0369874521");
libraryBai9.showMembersBai9();
libraryBai9.blockMemberBai9(2);
console.log("\nSau khi khóa thành viên ID = 2:");
libraryBai9.showMembersBai9();
