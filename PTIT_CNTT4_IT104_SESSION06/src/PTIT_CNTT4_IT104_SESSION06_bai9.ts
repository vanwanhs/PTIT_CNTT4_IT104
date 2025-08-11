class BookBai9 {
    private idBai9: number;
    private titleBai9: string;
    private authorBai9: string;
    private stockBai9: number;
    private statusBai9: string;

    constructor(idBai9: number, titleBai9: string, authorBai9: string, stockBai9: number, statusBai9: string) {
        this.idBai9 = idBai9;
        this.titleBai9 = titleBai9;
        this.authorBai9 = authorBai9;
        this.stockBai9 = stockBai9;
        this.statusBai9 = statusBai9;
    }

    public getIdBai9(): number {
        return this.idBai9;
    }

    public getTitleBai9(): string {
        return this.titleBai9;
    }

    public getAuthorBai9(): string {
        return this.authorBai9;
    }

    public getStockBai9(): number {
        return this.stockBai9;
    }

    public getStatusBai9(): string {
        return this.statusBai9;
    }

    public setStockBai9(stockBai9: number): void {
        this.stockBai9 = stockBai9;
    }

    public setStatusBai9(statusBai9: string): void {
        this.statusBai9 = statusBai9;
    }
}

class MemberBai9 {
    private idBai9: number;
    private nameBai9: string;
    private contactBai9: string;
    private lendedBooksBai9: LendedBookBai9[] = [];
    private statusBai9: string;

    constructor(idBai9: number, nameBai9: string, contactBai9: string, statusBai9: string) {
        this.idBai9 = idBai9;
        this.nameBai9 = nameBai9;
        this.contactBai9 = contactBai9;
        this.statusBai9 = statusBai9;
    }

    public getIdBai9(): number {
        return this.idBai9;
    }

    public getNameBai9(): string {
        return this.nameBai9;
    }

    public getContactBai9(): string {
        return this.contactBai9;
    }

    public getStatusBai9(): string {
        return this.statusBai9;
    }

    public setStatusBai9(statusBai9: string): void {
        this.statusBai9 = statusBai9;
    }

    public getLendedBooksBai9(): LendedBookBai9[] {
        return this.lendedBooksBai9;
    }
}

class LendedBookBai9 {
    private memberIdBai9: number;
    private bookIdBai9: number;
    private dueDateBai9: Date;

    constructor(memberIdBai9: number, bookIdBai9: number, dueDateBai9: Date) {
        this.memberIdBai9 = memberIdBai9;
        this.bookIdBai9 = bookIdBai9;
        this.dueDateBai9 = dueDateBai9;
    }
}

class LibraryBai9 {
    private booksBai9: BookBai9[] = [];
    private membersBai9: MemberBai9[] = [];

    public addBookBai9(bookBai9: BookBai9): void {
        this.booksBai9.push(bookBai9);
    }

    public showBooksBai9(): void {
        console.log("Danh sách sách trong thư viện:");
        this.booksBai9.forEach(bookBai9 => {
            console.log(`ID: ${bookBai9.getIdBai9()} | Tiêu đề: ${bookBai9.getTitleBai9()} | Tác giả: ${bookBai9.getAuthorBai9()} | Số lượng: ${bookBai9.getStockBai9()} | Trạng thái: ${bookBai9.getStatusBai9()}`);
        });
    }

    public registerMemberBai9(idBai9: number, nameBai9: string, contactBai9: string): void {
        const memberBai9 = new MemberBai9(idBai9, nameBai9, contactBai9, "Đang hoạt động");
        this.membersBai9.push(memberBai9);
    }

    public blockMemberBai9(idBai9: number): void {
        const memberBai9 = this.membersBai9.find(m => m.getIdBai9() === idBai9);
        if (memberBai9) {
            memberBai9.setStatusBai9("Bị khóa");
        }
    }

    public showMembersBai9(): void {
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
