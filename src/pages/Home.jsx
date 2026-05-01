import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../data/products";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
