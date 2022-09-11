import React from "react";
import SelectAnItem from "./SelectAnItem";
import ProductDetailsId from "./ProductDetailsId";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ProductDetails = (props) => {
  return (
    <div>
      <p className="product">Detalhes</p>
      <Routes>
        <Route path="/" element={<SelectAnItem />} />
        <Route
          path="/:id"
          element={<ProductDetailsId productState={props.productState} />}
        />
      </Routes>
    </div>
  );
};

export default ProductDetails;
