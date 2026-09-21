import { useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>

        <p>₹{item.price}</p>
      </div>

      <div>
        <button
          onClick={() =>
            dispatch(decreaseQuantity(item.id))
          }
        >
          -
        </button>

        <span className="quantity">
          {item.quantity}
        </span>

        <button
          onClick={() =>
            dispatch(increaseQuantity(item.id))
          }
        >
          +
        </button>

        <button
          onClick={() =>
            dispatch(removeFromCart(item.id))
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;