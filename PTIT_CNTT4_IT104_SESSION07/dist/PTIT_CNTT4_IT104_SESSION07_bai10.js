class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.available = true;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(customerName, tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        if (!table.available) {
            console.log(`Bàn ${tableId} đã được đặt!`);
            return;
        }
        table.available = false;
        const reservation = new Reservation(Date.now(), customerName, tableId);
        this.reservations.push(reservation);
        console.log(`Đặt bàn thành công cho ${customerName} tại bàn ${tableId}`);
    }
    placeOrder(tableId, itemIds) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            console.log("Bàn không tồn tại!");
            return;
        }
        const items = this.menu.filter(item => itemIds.includes(item.id));
        const order = new Order(Date.now(), tableId, items);
        this.orders.push(order);
        console.log(`Đặt món thành công cho bàn ${tableId}`);
    }
    generateBill(tableId) {
        const orders = this.orders.filter(order => order.tableId === tableId);
        if (orders.length === 0) {
            console.log("Không có đơn hàng cho bàn này.");
            return;
        }
        const total = orders.reduce((sum, order) => sum + order.getTotal(), 0);
        console.log(`Tổng tiền cho bàn ${tableId}: ${total} VND`);
        const table = this.tables.find(t => t.id === tableId);
        if (table)
            table.available = true;
    }
}
const restaurant = new Restaurant();
restaurant.addMenuItem(new MenuItem(1, "Phở bò", 50000));
restaurant.addMenuItem(new MenuItem(2, "Bún chả", 60000));
restaurant.addMenuItem(new MenuItem(3, "Trà đá", 5000));
restaurant.addTable(new Table(1, 4));
restaurant.addTable(new Table(2, 2));
restaurant.makeReservation("Nguyễn Văn A", 1);
restaurant.placeOrder(1, [1, 3]);
restaurant.placeOrder(1, [2]);
restaurant.generateBill(1);
restaurant.makeReservation("Trần Thị B", 1);
