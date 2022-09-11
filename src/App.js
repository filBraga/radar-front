import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ModalDiv from "./components/ModalDiv";

function App() {
  const [showModal, setShowModal] = useState(false);
  const productState = useState([]);
  const filteredProductState = useState([]);
  const searchStringState = useState("");

  useEffect(() => {
    fetch(`http://localhost:9000/product`)
      .then((response) => response.json())
      .then((response) => productState[1](response));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9000/product/find/${searchStringState[0]}`)
      .then((response) => response.json())
      .then((response) => filteredProductState[1](response));
  }, [searchStringState[0]]);

  return (
    <Router>
      <ModalDiv
        showModal={showModal}
        setShowModal={setShowModal}
        productState={productState}
      />
      <div className="App">
        <SearchBar searchStringState={searchStringState} />
        <Product setShowModal={setShowModal} />
        <div className="container">
          <ProductList
            searchStringState={searchStringState}
            productState={productState}
            filteredProductState={filteredProductState}
          />
          <div>
            <ProductDetails productState={productState} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
