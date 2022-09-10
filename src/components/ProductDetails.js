import React from "react";
import SelectAnItem from "./SelectAnItem";
import ProductDetailsId from "./ProductDetailsId";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div>
      <p className="product">Detalhes</p>
      <Routes>
        <Route path="/" element={<SelectAnItem />} />
        <Route path="/:id" element={<ProductDetailsId />} />
      </Routes>
    </div>
  );
};

export default ProductDetails;
