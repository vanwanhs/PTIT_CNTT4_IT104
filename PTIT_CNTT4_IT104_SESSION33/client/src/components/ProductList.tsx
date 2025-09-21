import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pizza from '../images/pizza.jpg';
import bread from '../images/bread.jpg';
import hamburger from '../images/Hamburger.jpg';
import cake from '../images/Cake.jpg';
import type { RootState } from '../store/store';
import type { CartItem } from '../store/reducer/reducerCart';

interface Product {
  id: number;
  title: string;
  image: string;
  content: string;
  price: number;
  stock: number;
}

const data: Product[] = [
  {
    id: 1,
    title: "Pizza",
    image: pizza,
    content: "Pizza content",
    price: 20,
    stock: 30,
  },
  {
    id: 2,
    title: "Hamburger",
    image: hamburger,
    content: "Hamburger content",
    price: 30,
    stock: 30,
  },
  {
    id: 3,
    title: "Bread",
    image: bread,
    content: "Bread content",
    price: 15,
    stock: 30,
  },
  {
    id: 4,
    title: "Cake",
    image: cake,
    content: "Cake content",
    price: 25,
    stock: 30,
  }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [notification, setNotification] = useState<string>("");

  const handleAddToCart = (product: Product) => {
    // Kiểm tra nếu sản phẩm đã có trong giỏ
    const inCart = cart.find((item: CartItem) => item.id === product.id);
    const currentQty = inCart ? inCart.quantity : 0;
    const stock = product.stock;

    if (currentQty + 1 > stock) {
      setNotification("⚠ Số lượng sản phẩm vượt quá số lượng trong kho!");
      setTimeout(() => setNotification(""), 2000);
      return;
    }

    // Thêm sản phẩm vào giỏ
    dispatch({
      type: "ADD",
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        stock: product.stock,
      },
    });

    setNotification(" Thêm sản phẩm vào giỏ hàng thành công!");
    setTimeout(() => setNotification(""), 2000);
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {data.map((item: Product) => (
            <div key={item.id}>
              <div className="media product">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100px', height: '100px' }}
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">{item.title}</h4>
                  <p>{item.content}</p>

                  <input
                    name={`quantity-product-${item.id}`}
                    type="number"
                    value={1}
                    min={1}
                    className="form-control"
                    disabled
                  />

                  <a
                    data-product={item.id}
                    className="price"
                    style={{ cursor: 'pointer', display: 'inline-block', marginTop: '8px', color: '#007bff' }}
                    onClick={() => handleAddToCart(item)}
                  >
                    {item.price} USD
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {notification && (
        <div
          className={`alert ${
            notification.includes("V") ? "alert-success" : "alert-danger"
          }`}
          role="alert"
        >
          {notification}
        </div>
      )}
    </div>
  );
}
