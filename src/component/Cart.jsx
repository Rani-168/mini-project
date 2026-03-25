function Cart({ cart, setCart }) {

  // ➕ Increase Qty
  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ Decrease Qty
  const decreaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // ❌ Remove Item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // 💰 Total Price
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="p-10 bg-gray-50 min-h-screen">

      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow">

          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">

              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  className="w-20 h-20 object-contain"
                />

                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>₹{item.price}</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-4">

                {/* Qty */}
                <div className="flex items-center border rounded-full px-3">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span className="mx-2">{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

          {/* TOTAL */}
          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">
              Total: ₹{total}
            </h2>

            <button className="mt-4 bg-black text-white px-6 py-2 rounded-full">
              Checkout
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;