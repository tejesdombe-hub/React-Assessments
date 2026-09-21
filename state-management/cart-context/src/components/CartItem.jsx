import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
      </div>

      <div>
        <button
          onClick={() =>
            dispatch({
              type: "DECREASE_QUANTITY",
              payload: item.id,
            })
          }
        >
          -
        </button>

        <span className="quantity">{item.quantity}</span>

        <button
          onClick={() =>
            dispatch({
              type: "INCREASE_QUANTITY",
              payload: item.id,
            })
          }
        >
          +
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item.id,
            })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;