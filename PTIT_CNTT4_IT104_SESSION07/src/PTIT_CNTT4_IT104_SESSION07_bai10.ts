class MenuItem {
    public id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Table {
    public id: number;
    public capacity: number;
    public available: boolean;

    constructor(id: number, capacity: number) {
        this.id = id;
        this.capacity = capacity;
        this.available = true;
    }
}

class Reservation {
    public id: number;
    public customerName: string;
    public tableId: number;

    constructor(id: number, customerName: string, tableId: number) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}

class Order {
    public id: number;
    public tableId: number;
    public items: MenuItem[];

    constructor(id: number, tableId: number, items: MenuItem[]) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }

    public getTotal(): number {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}

class Restaurant {
    public menu: MenuItem[];
    public tables: Table[];
    public reservations: Reservation[];
    public orders: Order[];

    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }

    public addMenuItem(item: MenuItem): void {
        this.menu.push(item);
    }

    public addTable(table: Table): void {
        this.tables.push(table);
    }

    public makeReservation(customerName: string, tableId: number): void {
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

    public placeOrder(tableId: number, itemIds: number[]): void {
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

    public generateBill(tableId: number): void {
        const orders = this.orders.filter(order => order.tableId === tableId);
        if (orders.length === 0) {
            console.log("Không có đơn hàng cho bàn này.");
            return;
        }
        const total = orders.reduce((sum, order) => sum + order.getTotal(), 0);
        console.log(`Tổng tiền cho bàn ${tableId}: ${total} VND`);
        const table = this.tables.find(t => t.id === tableId);
        if (table) table.available = true;
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
