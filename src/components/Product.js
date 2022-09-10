import React from "react";
import ButtonNewProduct from "./ButtonNewProduct";
import "../App.css";

const Product = (props) => {
  return (
    <div>
      <div className="container-header">
        <h5> Productos</h5>
        <ButtonNewProduct
          onClick={() => {
            props.setShowModal(true);
          }}
        >
          +
        </ButtonNewProduct>
      </div>
      <hr className="horizontal-rule" />
    </div>
  );
};

export default Product;
