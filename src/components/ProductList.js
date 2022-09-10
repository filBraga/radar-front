import React from "react";
import { useState, useEffect } from "react";
import ProductDiv from "./ProductDiv";

const ProductList = (props) => {
  const [products, setProduct] = useState([]);
  const [productsSearch, setProductSearch] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/product`)
      .then((response) => response.json())
      .then((response) => setProduct(response));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9000/product/find/${props.productList}`)
      .then((response) => response.json())
      .then((response) => setProductSearch(response));
  }, []);

  return (
    <div>
      <p className="product">Lista de Produtos</p>
      <h6>{props.productList}</h6>
      {console.log(products)}
      {productsSearch.length > 0
        ? productsSearch.map((elem) => {
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
