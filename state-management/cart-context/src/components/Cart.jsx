import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { state } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;