class AccountBai6 {
    public id: number;
    public userName: string;
    private password: number;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: number, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }

    public login(): void {
        this.isLogin = true;
        console.log(`${this.userName} đã đăng nhập`);
    }

    public logOut(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log(`${this.userName} đã đăng xuất`);
        } else {
            console.log("Bạn chưa đăng nhập");
        }
    }
}

class UserAcc extends AccountBai6 {
    public status: string;

    constructor(id: number, userName: string, password: number, isLogin: boolean, role: string, status: string) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }

    public login(): void {
        if (this.status === "active") {
            super.login();
        } else if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa`);
        }
    }
}

class AdminAcc extends AccountBai6 {
    private userList: UserAcc[];

    constructor(id: number, userName: string, password: number, isLogin: boolean, role: string, userList: UserAcc[]) {
        super(id, userName, password, isLogin, role);
        this.userList = userList;
    }

    public banUser(userId: number): void {
        const user = this.userList.find(u => u.id === userId);
        if (user) {
            user.status = "banned";
            console.log(`Tài khoản ${user.userName} đã bị admin khóa`);
        } else {
            console.log(`Không tìm thấy tài khoản có ID: ${userId}`);
        }
    }
}

const user1 = new UserAcc(1, "anh", 123456, false, "user", "active");
const user2 = new UserAcc(2, "van", 654321, false, "user", "active");

const admin1 = new AdminAcc(100, "adminVan", 999999, false, "admin", [user1, user2]);

user1.login();     
admin1.banUser(1);  
user1.login();       
admin1.banUser(3);   
