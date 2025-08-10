class Novel {
    private code: number;
    private name: string;
    private writer: string;

    constructor(code: number, name: string, writer: string) {
        this.code = code;
        this.name = name;
        this.writer = writer;
    }

    public getCode(): number {
        return this.code;
    }

    public showDetails(): string {
        return `${this.code} - ${this.name} - ${this.writer}`;
    }

    public editDetails(newName: string, newWriter: string): void {
        this.name = newName;
        this.writer = newWriter;
    }
}

class Bookshelf {
    private collection: Novel[] = [];

    public store(book: Novel): void {
        this.collection.push(book);
    }

    public listAll(): void {
        console.log("Danh sách sách trên kệ:");
        this.collection.forEach((book) => {
            console.log(book.showDetails());
        });
    }

    public modifyById(code: number, newName: string, newWriter: string): void {
        const target = this.collection.find((b) => b.getCode() === code);
        if (target) {
            target.editDetails(newName, newWriter);
            console.log(`Sách có mã ${code} đã được chỉnh sửa.`);
        } else {
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
