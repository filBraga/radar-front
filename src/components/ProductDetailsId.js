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

  const handleDeleteClick = () => {
    async function fetchData() {
      console.log("Deleting");
      // You can await here
      fetch(`http://localhost:9000/product/${id}`, {
        method: "DELETE",
      });
      // .then((response) => response.json())
      // .then((response) => setApiResponse(response))
      // .then((response) => console.log(response));
      // ...
    }
    fetchData();
  };

  return (
    <div className="details-div">
      <div>
        <h3>{apiResponse.produto}</h3>
        <div className="thin-margin">
          <h3>Valor</h3>
          <p> R$ {apiResponse.valor}</p>
        </div>
        <p>{apiResponse.descricao}</p>
      </div>
      <button className="button-new-product">Editar</button>
      <button
        className="button-new-product"
        onClick={() => handleDeleteClick()}
      >
        Deletar
      </button>
    </div>
  );
};

export default ProductDetailsId;
