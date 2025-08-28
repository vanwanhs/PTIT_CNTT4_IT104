import React, { useMemo } from "react";

const ShoppingCart = () => {
  // Dữ liệu giỏ hàng (thường sẽ lấy từ props hoặc state)
  const cartItems = [
    { id: 1, name: "Áo thun", price: 200000, quantity: 2 },
    { id: 2, name: "Quần jeans", price: 500000, quantity: 1 },
    { id: 3, name: "Giày sneaker", price: 1200000, quantity: 1 },
  ];

  const total = useMemo(() => {
    console.log("Tính toán lại tổng giá trị đơn hàng...");
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [cartItems]);




  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-96">
      <h2 className="text-xl font-bold mb-4">Giỏ hàng</h2>
      <ul className="space-y-2">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>{(item.price * item.quantity).toLocaleString()}đ</span>
          </li>
        ))}
      </ul>
      <hr className="my-3" />
      <h3 className="text-lg font-semibold">
        Tổng: {total.toLocaleString()}đ
      </h3>
    </div>
  );
};

export default ShoppingCart;

