class AccountBai6 {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        this.isLogin = true;
        console.log(`${this.userName} đã đăng nhập`);
    }
    logOut() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log(`${this.userName} đã đăng xuất`);
        }
        else {
            console.log("Bạn chưa đăng nhập");
        }
    }
}
class UserAcc extends AccountBai6 {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            super.login();
        }
        else if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa`);
        }
    }
}
class AdminAcc extends AccountBai6 {
    constructor(id, userName, password, isLogin, role, userList) {
        super(id, userName, password, isLogin, role);
        this.userList = userList;
    }
    banUser(userId) {
        const user = this.userList.find(u => u.id === userId);
        if (user) {
            user.status = "banned";
            console.log(`Tài khoản ${user.userName} đã bị admin khóa`);
        }
        else {
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
