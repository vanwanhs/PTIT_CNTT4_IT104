class Account {
    constructor(id, userName, passWord, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.passWord = passWord;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        this.isLogin = true;
        console.log("Đăng nhập thành công 1");
    }
    logOut() {
        if (this.isLogin) {
            this.isLogin = false;
            return console.log("Đăng xuất thành công");
        }
        else {
            console.log("Bạn chưa đăng nhập");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, passWord, isLogin, role, status) {
        super(id, userName, passWord, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            super.login();
        }
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
const acc1 = new userAcc("1", "anh", 123344, false, "user", "active");
acc1.login();
acc1.logOut();
