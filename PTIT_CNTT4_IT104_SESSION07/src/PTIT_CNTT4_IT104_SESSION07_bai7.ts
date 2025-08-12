class AccountBai7 {
    public accountNumber : number;
    protected balance: number;
    protected history: string[];
    protected status: string;
    constructor(accountNumber:number, balance:number){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = "active";
    }
    public deposit(amount:number):void{
        if(amount <= 0){
            console.log("Số tiền cần nạp phải lớn hơn 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: ${amount} | Số dư: ${this.balance}`);
        console.log(`Nạp thành công: ${amount} | Số dư hiện tại: ${this.balance}`);
        
    }
    public withdraw(amount: number):void{
        if(amount <= 0 || amount > this.balance){
            console.log("Số dư tài khoản của bạn không đủ thực hiện giao dịch");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút ${amount} | Số dư hiện tại: ${this.balance}`);
        console.log(`Ruts thành công ${amount} | Số dự hiện tại: ${this.balance}`);
    }
    public showHistory():void{
        console.log("Lịch sử giao dịch");
        this.history.forEach((record,index)=>{
            console.log(`${index+1}.${record}`);
            
        });
    }
}
class SavingAccount extends AccountBai7{
    private intersRate : number;
    constructor(accountNumber:number, balance:number, intersRate:number){
        super(accountNumber,balance);
        this.intersRate = intersRate;
    }
    public withdraw(amount: number): void {
        if(amount <= 0 || amount > this.balance){
            console.log("Tài khoàn của bạn không đủ để thực hiện giao dịch");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút : ${amount} | Số dư: ${this.balance}`);
        console.log(`Ruts ${amount} thành công | Số dư hiện tại: ${this.balance}`);
        
    }
}

const SavingAccount1 = new SavingAccount(100,5000,5);
SavingAccount1.deposit(2000);
SavingAccount1.withdraw(1000);
SavingAccount1.withdraw(70000);
SavingAccount1.showHistory();