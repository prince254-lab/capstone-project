function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <span className="badge">SALE</span>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;