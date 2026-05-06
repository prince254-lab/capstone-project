import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      {showCart ? (
        <Cart cart={cart} setShowCart={setShowCart} />
      ) : (
        <Home
          addToCart={addToCart}
          cart={cart}
          setShowCart={setShowCart}
        />
      )}
    </>
  );
}

export default App;