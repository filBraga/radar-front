import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ModalDiv from "./components/ModalDiv";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [productList, setProductList] = useState([]);
  return (
    <Router>
      <ModalDiv showModal={showModal} setShowModal={setShowModal} />
      <div className="App">
        <SearchBar setProductList={setProductList} />
        <Product setShowModal={setShowModal} />
        <div className="container">
          <ProductList productList={productList} />
          <div>
            <ProductDetails />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
