import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container">
      <h1>Zustand Cart</h1>

      <ProductList />

      <hr />

      <Cart />
    </div>
  );
}

export default App;