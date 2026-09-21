import { useCartStore } from "../store/cartStore";

function CartItem({ item }) {
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
      </div>

      <div>
        <button
          onClick={() =>
            decreaseQuantity(item.id)
          }
        >
          -
        </button>

        <span className="quantity">
          {item.quantity}
        </span>

        <button
          onClick={() =>
            increaseQuantity(item.id)
          }
        >
          +
        </button>

        <button
          onClick={() =>
            removeFromCart(item.id)
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;