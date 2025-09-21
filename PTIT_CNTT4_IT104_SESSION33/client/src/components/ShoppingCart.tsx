import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import type { CartItem } from '../store/reducer/reducerCart';
import Modal from './Modal';

export default function ShoppingCart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});
  const [notification, setNotification] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [pendingDeleteItem, setPendingDeleteItem] = useState<CartItem | null>(null);

  const handleChange = (id: number, value: string) => {
    const qty = parseInt(value);
    if (!isNaN(qty) && qty >= 0) {
      setQuantities({ ...quantities, [id]: qty });
    }
  };

  const handleUpdate = (item: CartItem) => {
    const newQty = quantities[item.id] ?? item.quantity;

    if (item.stock !== undefined && newQty > item.stock) {
      setNotification('Số lượng sản phẩm vượt quá số lượng trong kho!');
      return;
    }

    dispatch({
      type: 'UPDATE',
      payload: {
        id: item.id,
        quantity: newQty,
      },
    });

    setNotification('Update cart successfully');
    setTimeout(() => setNotification(''), 2000);
  };

  // Khi click nút xóa thì hiện Modal
  const handleDeleteClick = (item: CartItem) => {
     console.log("Click DELETE:", item);
    setPendingDeleteItem(item);
    setModalMessage(`Bạn có chắc chắn muốn xóa ${item.title}?`);
    setModalVisible(true);
  };

  // Khi xác nhận trong Modal
  const confirmDelete = () => {
    if (pendingDeleteItem) {
      console.log("Dispatch DELETE for id:", pendingDeleteItem.id);
      dispatch({
        type: 'DELETE',
        payload: { id: pendingDeleteItem.id },
      });

      setNotification('Delete cart successfully');
      setTimeout(() => setNotification(''), 2000);
    }
    setModalVisible(false);
    setPendingDeleteItem(null);
  };

  // Khi Cancel trong Modal
  const cancelDelete = () => {
    setModalVisible(false);
    setPendingDeleteItem(null);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', fontStyle: 'italic' }}>
                      Empty product in your cart
                    </td>
                  </tr>
                ) : (
                  cart.map((item: CartItem, index: number) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.price} USD</td>
                      <td>
                        <input
                          name={`cart-item-quantity-${item.id}`}
                          type="number"
                          value={quantities[item.id] ?? item.quantity}
                          onChange={(e) => handleChange(item.id, e.target.value)}
                        />
                      </td>
                      <td>
                        <button
                          className="label label-info update-cart-item"
                          onClick={() => handleUpdate(item)}
                        >
                          Update
                        </button>
                        <button
                          className="label label-danger delete-cart-item"
                          onClick={() => handleDeleteClick(item)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot id="my-cart-footer">
                {cart.length > 0 && (
                  <tr>
                    <td colSpan={4}>
                      There are <b>{totalItems}</b> items in your shopping cart.
                    </td>
                    <td
                      colSpan={2}
                      className="total-price text-left"
                      style={{ color: 'red', fontWeight: 'bold' }}
                    >
                      {totalPrice} USD
                    </td>
                  </tr>
                )}
              </tfoot>
            </table>
          </div>
        </div>

        {/* Modal xác nhận xóa */}
        {modalVisible && (
          <Modal
            title="Xác nhận xóa"
            message={modalMessage}
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
          />
        )}

        {/* Modal thông báo thành công */}
        {notification && !modalVisible && (
          <div
            className={`alert ${
              notification.includes('successfully') ? 'alert-success' : 'alert-danger'
            }`}
            role="alert"
            id="mnotification"
          >
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}
