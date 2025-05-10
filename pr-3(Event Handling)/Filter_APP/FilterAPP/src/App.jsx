import { category, product } from "./data";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter(category);
  }, []);

  const filterdata = (name) => {
    if (!name) {
      setFilter(category);
    } else {
      const filtered = category.filter((c) => c.name === name);
      setFilter(filtered);
    }
  };

  return (
    <div className="app">
      <h1 className="title">📦 Product Showcase</h1>

      <div className="buttons">
        <button onClick={() => filterdata("")} className="btn">
          All
        </button>
        {product.map((p, i) => (
          <button key={i} onClick={() => filterdata(p.name)} className="btn">
            {p.name}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filter.map(({ id, category, name, img }, i) => (
          <div className="card" key={i}>
            <img src={img} alt={name} className="card-img" />
            <div className="card-body">
              <h3>{name}</h3>
              <p><strong>Category:</strong> {category}</p>
              <p><strong>ID:</strong> #{id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
