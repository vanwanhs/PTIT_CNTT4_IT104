class BookBai9 {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public getIdBai9(): number {
        return this.id;
    }

    public getTitleBai9(): string {
        return this.title;
    }

    public getAuthorBai9(): string {
        return this.author;
    }

    public getYearBai9(): number {
        return this.year;
    }

    public setTitleBai9(newTitle: string): void {
        this.title = newTitle;
    }

    public setAuthorBai9(newAuthor: string): void {
        this.author = newAuthor;
    }

    public setYearBai9(newYear: number): void {
        this.year = newYear;
    }

    public getInfoBai9(): string {
        return `ID: ${this.id} | ${this.title} - ${this.author} (${this.year})`;
    }
}

class LibraryBai9 {
    private books: BookBai9[] = [];

    public addBookBai9(book: BookBai9): void {
        this.books.push(book);
    }

    public viewBooksBai9(): void {
        console.log(`Danh sách sách trong thư viện:`);
        this.books.forEach((book) => {
            console.log(book.getInfoBai9());
        });
    }

    public deleteBookByIdBai9(id: number): void {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getIdBai9() !== id);
        if (this.books.length < initialLength) {
            console.log(`Đã xóa sách có ID ${id}`);
        } else { 
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }

    public updateBookByIdBai9(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        const book = this.books.find(book => book.getIdBai9() === id);
        if (book) {
            book.setTitleBai9(newTitle);
            book.setAuthorBai9(newAuthor);
            book.setYearBai9(newYear);
            console.log(`Đã cập nhật sách có ID ${id}`);
        } else {
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
