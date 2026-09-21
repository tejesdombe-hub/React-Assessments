import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";

function ProductList() {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div className="product" key={product.id}>
          <div>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>

          <button
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;