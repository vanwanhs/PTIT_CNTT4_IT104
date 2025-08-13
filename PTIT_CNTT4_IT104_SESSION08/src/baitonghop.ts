class Book{
    id:number;
    title:string;
    author:string;
    year:number;
    constructor(id:number, title:string, author:string, year:number){
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library<T extends { id: number, title:string, author:string }>{
    book: T[] = [];
    addBook(book:T):void{
        this.book.push(book);
    }
    //timf sach theo id neu co tra ve sach neu khong co tra ve underfined
    getBookById(id:number):T|undefined{
        return this.book.find(item=>item.id === id)
    }
    removeBookById(id:number):void{
        let index = this.book.findIndex(item=>item.id == id);
        if(index == -1) console.log("Khong co sach trong thu vien");
        else {
            let conformDelete = confirm(`Ban co muon xoa khong: ${this.book[index].title}`);
            if(confirm){
                this.book.splice(index,1);
            }
        }
    }
    updateInfo(id:number, new_book:T):void{
        let index = this.book.findIndex(item=>item.id === id);
        if(index == - 1) console.log("Khong co sach trong thu vien");
        else{
            let conformDelete = confirm(`Ban co muon sua khong: ${this.book[index].title}`);
            if(confirm){
                this.book[index] = new_book;
            }
        }
    }
    listBook():void{
        for(let index of this.book){
            console.log(`${index.id} - ${index.title} `);
        }
    }
    findAuthor(search:string):T[]{
        return this.book.filter(item=>search.includes(item.author))
    }


}