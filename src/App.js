import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SearchBar from "./components/SearchBar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import SelectAnItem from "./components/SelectAnItem";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar />
        <Product />
        <div className="container">
          <ProductList />
          <div>
            <ProductDetails />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
