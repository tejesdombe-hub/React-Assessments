import { useDispatch } from "react-redux";

import { addToCart } from "../store/cartSlice";
import { products } from "../data/products";

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <button
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;