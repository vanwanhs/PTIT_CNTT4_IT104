const getOrderSummary = (products = []) => {
  const details = products.map(p => {
    const {
      name,
      price,
      quantity,
      discount = 0,
      minQuantity = Infinity,  
      extraDiscount = 0
    } = p;

    const eligibleExtra = quantity >= minQuantity ? extraDiscount : 0;

    const finalPrice = Math.round(
      price * (1 - discount) * (1 - eligibleExtra)
    );

    const beforeItem = price * quantity;

    const subtotal = finalPrice * quantity;

    return { name, finalPrice, quantity, subtotal, beforeItem };
  });

  const totalBeforeDiscount = details
    .reduce((sum, { beforeItem }) => sum + beforeItem, 0);

  const totalAfterDiscount = details
    .reduce((sum, { subtotal }) => sum + subtotal, 0);

  const cleanDetails = details.map(({ beforeItem, ...rest }) => rest);

  return {
    summary: `Tổng trước giảm: ${totalBeforeDiscount.toLocaleString()} • Tổng sau giảm: ${totalAfterDiscount.toLocaleString()}`,
    totalBeforeDiscount,
    totalAfterDiscount,
    details: cleanDetails
  };
};

const products = [
  { name: "Áo thun", price: 150000, quantity: 3, discount: 0.1, minQuantity: 3, extraDiscount: 0.05 },
  { name: "Quần jean", price: 450000, quantity: 1, discount: 0.15 },
  { name: "Mũ lưỡi trai", price: 120000, quantity: 5, discount: 0, minQuantity: 4, extraDiscount: 0.1 }
];

console.log(getOrderSummary(products));


