import React from "react";
import { useState, useEffect } from "react";
import ProductDiv from "./ProductDiv";

const ProductList = (props) => {
  const [products, setProduct] = props.productState;
  const [productsSearch] = props.searchStringState;
  const [filteredProduct] = props.filteredProductState;

  return (
    <div>
      <p className="product">Lista de Produtos</p>
      <h6>{props.productList}</h6>
      {console.log(products)}
      {productsSearch.length > 0 && filteredProduct.length > 0
        ? filteredProduct.map((elem) => {
            return (
              <ProductDiv
                id={elem._id}
                produto={elem.produto}
                valor={elem.valor}
                descricao={elem.descricao}
              />
            );
          })
        : products.map((elem) => {
            return (
              <ProductDiv
                id={elem._id}
                produto={elem.produto}
                valor={elem.valor}
                descricao={elem.descricao}
              />
            );
          })}
    </div>
  );
};

export default ProductList;
