class BookBai8 {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getInfo(): string {
        return `${this.title} - ${this.author}`;
    }

    public getTitle(): string {
        return this.title;
    }
}

class LibraryBai8 {
    private books: BookBai8[] = [];

    public addBookBai8(book: BookBai8): void {
        this.books.push(book);
    }

    public viewBooksBai8(): void {
        console.log(`Danh sách trong thư viện:`);
        this.books.forEach((book, index) => {
            console.log(`${index + 1} - ${book.getInfo()}`);
        });
    }

    public searchBooksByTitleBai8(keyword: string): void {
        const foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm cho "${keyword}":`);
            foundBooks.forEach((book, index) => {
                console.log(`${index + 1} - ${book.getInfo()}`);
            });
        } else {
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
