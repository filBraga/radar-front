import React from "react";
import { useState, useEffect } from "react";
import ProductDiv from "./ProductDiv";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/product`)
      .then((response) => response.json())
      .then((response) => setProduct(response));
  }, []);
  return (
    <div>
      <h5>Lista de Produtos</h5>
      {products.map((elem) => {
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
