import { useEffect, useState } from "react";
import "./App.css"; // Import CSS styles

function App() {
  const [coin, setCoin] = useState([]);

  const getCoin = () => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
      .then(res => res.json())
      .then((data) => {
        setCoin(data);
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCoin();
  }, []);

  return (
    <div className="container">
      <h2 className="title">💱 Currancy API</h2>
      <div className="card-grid">
        {coin.map((c, i) => (
          <div className="coin-card" key={i}>
            <img src={c.image} alt={c.name} className="coin-image" />
            <h3>{c.name} ({c.symbol.toUpperCase()})</h3>
            <p><strong>Price:</strong> ₹{c.current_price.toLocaleString()}</p>
            <p><strong>Market Cap:</strong> ₹{c.market_cap.toLocaleString()}</p>
            <p className="updated"><small>Updated: {new Date(c.last_updated).toLocaleString()}</small></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
