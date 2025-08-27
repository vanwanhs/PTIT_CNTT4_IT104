import React, { useMemo } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  { id: 1, name: 'Áo thun', price: 200000, quantity: 2 },
  { id: 2, name: 'Quần jeans', price: 500000, quantity: 1 },
  { id: 3, name: 'Giày thể thao', price: 800000, quantity: 1 },
];

export default function ShoppingCart() {
  // ✅ Tính tổng giá trị đơn hàng nhưng chỉ khi cartItems thay đổi
  const totalPrice = useMemo(() => {
    console.log('Tính lại tổng đơn hàng...');
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <div>
      <h2>🛒 Giỏ hàng</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price.toLocaleString()} VNĐ × {item.quantity}
          </li>
        ))}
      </ul>
      <h3>
        🧾 Tổng cộng:{' '}
        <strong>{totalPrice.toLocaleString()} VNĐ</strong>
      </h3>
    </div>
  );
}
