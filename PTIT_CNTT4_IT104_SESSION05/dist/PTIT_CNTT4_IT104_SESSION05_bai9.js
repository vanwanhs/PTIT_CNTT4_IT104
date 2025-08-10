class BookBai9 {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getIdBai9() {
        return this.id;
    }
    getTitleBai9() {
        return this.title;
    }
    getAuthorBai9() {
        return this.author;
    }
    getYearBai9() {
        return this.year;
    }
    setTitleBai9(newTitle) {
        this.title = newTitle;
    }
    setAuthorBai9(newAuthor) {
        this.author = newAuthor;
    }
    setYearBai9(newYear) {
        this.year = newYear;
    }
    getInfoBai9() {
        return `ID: ${this.id} | ${this.title} - ${this.author} (${this.year})`;
    }
}
class LibraryBai9 {
    constructor() {
        this.books = [];
    }
    addBookBai9(book) {
        this.books.push(book);
    }
    viewBooksBai9() {
        console.log(`Danh sách sách trong thư viện:`);
        this.books.forEach((book) => {
            console.log(book.getInfoBai9());
        });
    }
    deleteBookByIdBai9(id) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getIdBai9() !== id);
        if (this.books.length < initialLength) {
            console.log(`Đã xóa sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
    updateBookByIdBai9(id, newTitle, newAuthor, newYear) {
        const book = this.books.find(book => book.getIdBai9() === id);
        if (book) {
            book.setTitleBai9(newTitle);
            book.setAuthorBai9(newAuthor);
            book.setYearBai9(newYear);
            console.log(`Đã cập nhật sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
}
const book1Bai9 = new BookBai9(1, "Dế mèn phiêu lưu ký", "Tô Hoài", 1941);
const book2Bai9 = new BookBai9(2, "Lão Hạc", "Nam Cao", 1943);
const book3Bai9 = new BookBai9(3, "Tắt Đèn", "Ngô Tất Tố", 1939);
const book4Bai9 = new BookBai9(4, "Số Đỏ", "Vũ Trọng Phụng", 1936);
const book5Bai9 = new BookBai9(5, "Chí Phèo", "Nam Cao", 1941);
const myLibraryBai9 = new LibraryBai9();
myLibraryBai9.addBookBai9(book1Bai9);
myLibraryBai9.addBookBai9(book2Bai9);
myLibraryBai9.addBookBai9(book3Bai9);
myLibraryBai9.addBookBai9(book4Bai9);
myLibraryBai9.addBookBai9(book5Bai9);
myLibraryBai9.viewBooksBai9();
myLibraryBai9.deleteBookByIdBai9(3);
myLibraryBai9.viewBooksBai9();
myLibraryBai9.updateBookByIdBai9(2, "Lão Hạc - Phiên bản mới", "Nam Cao", 2025);
myLibraryBai9.viewBooksBai9();
