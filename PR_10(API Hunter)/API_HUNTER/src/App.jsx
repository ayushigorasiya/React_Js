import React from "react";
import RecipeTable from "./Components/RecipeTable";
import ProductCard from "./Components/ProductCard";

function App() {
  return (
    <div className="container mt-4" align="center">
      <h1>API_HUNTER</h1>
      
      <br />
      <br />
      <h2 className="text-center">Recipes API (fetch) - Table</h2>
      <RecipeTable />
      <hr />
      <h2 className="text-center">Product API (axios) - Card</h2>
      <ProductCard />
    </div>
  );
}

export default App;
