export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  stock: number;
}

export interface CartState {
  cart: CartItem[];
}

export interface Action {
  type: string;
  payload: any;
}


const savedCart = localStorage.getItem('cart');
const parsedCart = savedCart ? JSON.parse(savedCart) : [];

export const initialState: CartState = {
  cart: parsedCart.length > 0 ? parsedCart : [
    {
      id: 1,
      title: "Pizza",
      price: 10,
      quantity: 15,
      stock: 20
    },
    {
      id: 2,
      title: "Hamburger",
      price: 30,
      quantity: 22,
      stock: 30
    },
  ],
};

export const reducerCart = (
  state: CartState = initialState,
  action: Action
): CartState => {
  switch (action.type) {
    case "ADD": {
      if (!action.payload) return state;

      const existingIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      const updatedCart = [...state.cart];

      if (existingIndex !== -1) {
        const existingItem = updatedCart[existingIndex];

        // Nếu vượt quá số lượng trong kho thì không cộng thêm
        if (existingItem.quantity + action.payload.quantity > existingItem.stock) {
          alert("Vượt quá số lượng trong kho!");
          return state;
        }

        updatedCart[existingIndex].quantity += action.payload.quantity;
      } else {
        const newItem = {
          ...action.payload,
          quantity: action.payload.quantity ?? 1
        };
        updatedCart.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "UPDATE": {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "DELETE": {
      const filtered = state.cart.filter(item => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(filtered));
      return {
        ...state,
        cart: filtered,
      };
    }

    default:
      return state;
  }
};
