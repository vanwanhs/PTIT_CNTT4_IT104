class BookBai8 {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `${this.title} - ${this.author}`;
    }
    getTitle() {
        return this.title;
    }
}
class LibraryBai8 {
    constructor() {
        this.books = [];
    }
    addBookBai8(book) {
        this.books.push(book);
    }
    viewBooksBai8() {
        console.log(`Danh sách trong thư viện:`);
        this.books.forEach((book, index) => {
            console.log(`${index + 1} - ${book.getInfo()}`);
        });
    }
    searchBooksByTitleBai8(keyword) {
        const foundBooks = this.books.filter(book => book.getTitle().toLowerCase().includes(keyword.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm cho "${keyword}":`);
            foundBooks.forEach((book, index) => {
                console.log(`${index + 1} - ${book.getInfo()}`);
            });
        }
        else {
            console.log(`Không tìm thấy sách với từ khóa "${keyword}"`);
        }
    }
}
const book1Bai8 = new BookBai8("Dế mèn phiêu lưu kí", "Tô Hoài");
const book2Bai8 = new BookBai8("Lão Hạc", "Nam Cao");
const book3Bai8 = new BookBai8("Tắt Đèn", "Ngô Tất Tố");
const book4Bai8 = new BookBai8("Số Đỏ", "Vũ Trọng Phụng");
const book5Bai8 = new BookBai8("Chí Phèo", "Nam Cao");
const myLibraryBai8 = new LibraryBai8();
myLibraryBai8.addBookBai8(book1Bai8);
myLibraryBai8.addBookBai8(book2Bai8);
myLibraryBai8.addBookBai8(book3Bai8);
myLibraryBai8.addBookBai8(book4Bai8);
myLibraryBai8.addBookBai8(book5Bai8);
myLibraryBai8.viewBooksBai8();
myLibraryBai8.searchBooksByTitleBai8("đèn");
myLibraryBai8.searchBooksByTitleBai8("nam cao");
