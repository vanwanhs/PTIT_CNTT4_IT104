const listProduct = [
    {
        id: "P001",
        name: "Áo sơ mi cổ lọ",
        prince: 2000000,
        category: {
            id: "ASM01",
            name: "Thời trang cho nam",
        },
        discount: 10,
    },
    {
        id: "P002",
        name: "Chuột không dây",
        prince: 100000,
        category: {
            id: "CKD01",
            name: "Phụ kiện điện tử",
        }
    },
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.prince * (1 - product.discount / 100);
    }
    return product.prince;
}
function printProductInfo(product) {
    const finalPrice = getFinalPrice(product);
    console.log(`San pham: ${product.name}`);
    console.log(`Danh muc: ${product.category.name}`);
    console.log(`Gia goc: ${product.prince.toLocaleString()} VND`);
    if (product.discount) {
        console.log(`Giam gia: ${product.discount}%`);
        console.log(`Gia sau giam: ${finalPrice.toLocaleString()} VND`);
    }
    else {
        console.log(`Khong giam gia`);
    }
    console.log("-------------------------");
}
for (const product of listProduct) {
    printProductInfo(product);
}
