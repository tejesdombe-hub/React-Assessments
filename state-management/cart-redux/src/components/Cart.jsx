import { useSelector } from "react-redux";

import CartItem from "./CartItem";

function Cart() {
  const items = useSelector(
    (state) => state.cart.items
  );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;