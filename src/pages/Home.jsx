import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../data/products";

function Home({ addToCart, cart, setShowCart }) {
  return (
    <>
      <Navbar
        cartCount={cart.length}
        setShowCart={setShowCart}
      />

      <section className="hero">
        <h1>Biggest Deals of the Season</h1>
        <p>Shop premium gadgets, fashion & accessories</p>
        <button>Shop Now</button>
      </section>

      <div className="container">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;