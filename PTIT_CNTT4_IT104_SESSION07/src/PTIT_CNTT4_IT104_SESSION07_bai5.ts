class Account {
    public id: string;
    public userName: string;
    private passWord: number;
    public isLogin: boolean;
    public role:string;
    constructor(id:string, userName:string, passWord:number, isLogin:boolean, role:string){
        this.id = id;
        this.userName = userName;
        this.passWord = passWord;
        this.isLogin = isLogin;
        this.role = role;
    }
    public login():void{
        this.isLogin = true;
        console.log("Đăng nhập thành công 1");
    }
    public logOut():void{
        if(this.isLogin){
            this.isLogin = false;
            return console.log("Đăng xuất thành công");
        } else {
            console.log("Bạn chưa đăng nhập");
            
        }
    }
}
class userAcc extends Account{
    public status: string;
    constructor(id:string, userName:string, passWord:number, isLogin:boolean, role:string,status:string){
        super(id,userName,passWord,isLogin,role);
        this.status = status;
    }
    public login(): void {
        if(this.status === "active"){
            super.login();
        }
        if (this.status === "banned"){
            console.log("Tài khoản đã bị khóa");
        }
    }
    
}
const acc1 = new userAcc("1", "anh", 123344, false, "user", "active");
acc1.login();
acc1.logOut();