import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [usercarts, setUsercarts] = useState([]);

  const getCart = () => {
    fetch('https://dummyjson.com/carts')
      .then(res => res.json())
      .then((cartdata) => {
        setUsercarts(cartdata.carts);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="app-container">
      <h1>🛒 My Cart API</h1>
      <div className="cart-container">
        {usercarts.map((val, index) => (
          <div key={index} className="cart-card">
            <div className="cart-info">
              <h2>Cart ID: {val.id}</h2>
              <p><strong>User ID:</strong> {val.userId}</p>
              <p><strong>Total Products:</strong> {val.totalProducts}</p>
              <p><strong>Total Quantity:</strong> {val.totalQuantity}</p>
              <p><strong>Total:</strong> ${val.total}</p>
              <p><strong>Discounted Total:</strong> ${val.discountedTotal}</p>
            </div>

            <div className="products-row">
              {val.products.map((pro, ind) => (
                <div key={ind} className="product-card">
                  <img src={pro.thumbnail} alt={pro.title} />
                  <div className="product-info">
                    <h4>{pro.title}</h4>
                    <p>Price: ${pro.price}</p>
                    <p>Qty: {pro.quantity}</p>
                    <p>Total: ${pro.total}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
