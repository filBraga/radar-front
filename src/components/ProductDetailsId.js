import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetailsId = () => {
  let { id } = useParams();

  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    async function fetchData() {
      // You can await here
      fetch(`http://localhost:9000/product/${id}`)
        .then((response) => response.json())
        .then((response) => setApiResponse(response))
        .then((response) => console.log(response));
      // ...
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="rowC">
        <h5>ID: {apiResponse._id}</h5>
        <h5>produto: {apiResponse.produto}</h5>
        <h5>descricao: {apiResponse.descricao}</h5>
        <h5>valor: {apiResponse.valor}</h5>
      </div>
      <button className="new-client-button">Editar</button>
    </div>
  );
};

export default ProductDetailsId;
