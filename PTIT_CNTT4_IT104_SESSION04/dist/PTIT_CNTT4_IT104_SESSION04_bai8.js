function calculateOrderTotal(order) {
    let total = 0;
    for (const item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
function printOrder(order) {
    console.log(`Don hang: #${order.orderId}`);
    console.log(`Khach hang: ${order.customerName}`);
    console.log(`san pham:`);
    for (const item of order.items) {
        const name = item.product.name;
        const price = item.product.price;
        const quantity = item.quantity;
        const total = price * quantity;
        console.log(`- ${name} x ${quantity} -> ${total.toLocaleString()} VND`);
    }
    const totalAmount = calculateOrderTotal(order);
    console.log(`Tong cong: ${totalAmount.toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chu: ${order.note}`);
    }
}
const order = {
    orderId: "ORD001",
    customerName: "Nguyen Van A",
    items: [
        {
            product: {
                id: "P001",
                name: "Ao so mi",
                price: 250000,
            },
            quantity: 2,
        },
        {
            product: {
                id: "P002",
                name: "Quan tay",
                price: 150000,
            },
            quantity: 1,
        },
    ],
    note: "Giao sau 18h",
};
printOrder(order);
