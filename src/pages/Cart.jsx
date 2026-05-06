function Cart({ cart, setShowCart }) {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <button onClick={() => setShowCart(false)}>
        Back to Shopping
      </button>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} width="100" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;