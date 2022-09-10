import React from "react";

const ButtonNewProduct = (props) => {
  return (
    <button className="button-new-product" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonNewProduct;
