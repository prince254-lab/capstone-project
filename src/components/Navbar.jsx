function Navbar({ cartCount, setShowCart }) {
  return (
    <nav className="navbar">
      <h2>ShopEase</h2>

      <input
        type="text"
        placeholder="Search products..."
        className="search"
      />

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li onClick={() => setShowCart(true)}>
          Cart ({cartCount})
        </li>
        <li>Profile</li>
      </ul>
    </nav>
  );
}

export default Navbar;