class AccountBai8 {
    public accountNumberBai8: number;
    protected balanceBai8: number;
    protected historyBai8: string[];
    protected statusBai8: string;

    constructor(accountNumberBai8: number, balanceBai8: number) {
        this.accountNumberBai8 = accountNumberBai8;
        this.balanceBai8 = balanceBai8;
        this.historyBai8 = [];
        this.statusBai8 = "active";
    }

    public depositBai8(amountBai8: number): void {
        if (amountBai8 <= 0) {
            console.log("Số tiền cần nạp phải lớn hơn 0");
            return;
        }
        this.balanceBai8 += amountBai8;
        this.historyBai8.push(`Nạp: ${amountBai8} | Số dư: ${this.balanceBai8}`);
        console.log(`Nạp thành công: ${amountBai8} | Số dư hiện tại: ${this.balanceBai8}`);
    }

    public withdrawBai8(amountBai8: number): void {
        if (amountBai8 <= 0 || amountBai8 > this.balanceBai8) {
            console.log("Số dư tài khoản của bạn không đủ thực hiện giao dịch");
            return;
        }
        this.balanceBai8 -= amountBai8;
        this.historyBai8.push(`Rút: ${amountBai8} | Số dư: ${this.balanceBai8}`);
        console.log(`Rút thành công ${amountBai8} | Số dư hiện tại: ${this.balanceBai8}`);
    }

    public showHistoryBai8(): void {
        console.log("=== Lịch sử giao dịch ===");
        this.historyBai8.forEach((recordBai8, indexBai8) => {
            console.log(`${indexBai8 + 1}. ${recordBai8}`);
        });
    }
}

class SavingAccountBai8 extends AccountBai8 {
    private intersRateBai8: number;

    constructor(accountNumberBai8: number, balanceBai8: number, intersRateBai8: number) {
        super(accountNumberBai8, balanceBai8);
        this.intersRateBai8 = intersRateBai8;
    }

    public withdrawBai8(amountBai8: number): void {
        if (amountBai8 <= 0 || amountBai8 > this.balanceBai8) {
            console.log("Tài khoản của bạn không đủ để thực hiện giao dịch");
            return;
        }
        this.balanceBai8 -= amountBai8;
        this.historyBai8.push(`Rút (Saving): ${amountBai8} | Số dư: ${this.balanceBai8}`);
        console.log(`Rút ${amountBai8} thành công | Số dư hiện tại: ${this.balanceBai8}`);
    }
}

class CheckingAccountBai8 extends AccountBai8 {
    private overdraftLimitBai8: number;

    constructor(accountNumberBai8: number, balanceBai8: number, overdraftLimitBai8: number) {
        super(accountNumberBai8, balanceBai8);
        this.overdraftLimitBai8 = overdraftLimitBai8;
    }

    public withdrawBai8(amountBai8: number): void {
        if (amountBai8 <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amountBai8 > this.balanceBai8 + this.overdraftLimitBai8) {
            console.log("Vượt quá hạn mức thấu chi");
            return;
        }
        this.balanceBai8 -= amountBai8;
        this.historyBai8.push(`Rút (Checking): ${amountBai8} | Số dư: ${this.balanceBai8}`);
        console.log(`Rút ${amountBai8} thành công | Số dư hiện tại: ${this.balanceBai8}`);
    }
}

console.log("===== TEST SavingAccountBai8 =====");
const savingAccBai8 = new SavingAccountBai8(100, 5000, 5);
savingAccBai8.depositBai8(2000);
savingAccBai8.withdrawBai8(1000);
savingAccBai8.withdrawBai8(70000);
savingAccBai8.showHistoryBai8();

console.log("\n===== TEST CheckingAccountBai8 =====");
const checkingAccBai8 = new CheckingAccountBai8(200, 3000, 2000);
checkingAccBai8.depositBai8(1000);
checkingAccBai8.withdrawBai8(3500); // Còn -500
checkingAccBai8.withdrawBai8(2000); // Còn -2500
checkingAccBai8.withdrawBai8(5000); // Vượt hạn mức
checkingAccBai8.showHistoryBai8();
