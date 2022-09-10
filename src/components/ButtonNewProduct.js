import React from "react";

const ButtonNewProduct = (props) => {
  return (
    <button className="button-edit-delete" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonNewProduct;
