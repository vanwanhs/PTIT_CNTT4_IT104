class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    constructor() {
        this.book = [];
    }
    addBook(book) {
        this.book.push(book);
    }
    //timf sach theo id neu co tra ve sach neu khong co tra ve underfined
    getBookById(id) {
        return this.book.find(item => item.id === id);
    }
    removeBookById(id) {
        let index = this.book.findIndex(item => item.id == id);
        if (index == -1)
            console.log("Khong co sach trong thu vien");
        else {
            let conformDelete = confirm(`Ban co muon xoa khong: ${this.book[index].title}`);
            if (confirm) {
                this.book.splice(index, 1);
            }
        }
    }
    updateInfo(id, new_book) {
        let index = this.book.findIndex(item => item.id === id);
        if (index == -1)
            console.log("Khong co sach trong thu vien");
        else {
            let conformDelete = confirm(`Ban co muon sua khong: ${this.book[index].title}`);
            if (confirm) {
                this.book[index] = new_book;
            }
        }
    }
    listBook() {
        for (let index of this.book) {
            console.log(`${index.id} - ${index.title} `);
        }
    }
    findAuthor(search) {
        return this.book.filter(item => search.includes(item.author));
    }
}
