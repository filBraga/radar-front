import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetailsId = (props) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [apiResponse, setApiResponse] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const [produto, setProduto] = useState();
  const [valor, setValor] = useState();
  const [descricao, setDescricao] = useState();

  const [productState, setProductState] = props.productState;

  const toHomepage = () => {
    navigate("/");
  };

  async function fetchData() {
    await fetch(`http://localhost:9000/product/${id}`)
      .then((response) => response.json())
      .then((response) => setApiResponse(response))
      .then((response) => console.log(response));
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleDeleteClick = () => {
    async function fetchDataDelete() {
      console.log("Deleting");
      // You can await here
      fetch(`http://localhost:9000/product/${id}`, {
        method: "DELETE",
      });
    }
    setProductState((prev) =>
      prev.filter((product) => {
        return product._id !== id;
      })
    );
    fetchDataDelete();
    toHomepage();
  };

  const handleEditClick = () => {
    fetchData();
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    async function fetchDataSave() {
      console.log("Patching");
      // You can await here
      fetch(`http://localhost:9000/product/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          produto,
          valor,
          descricao,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    }
    fetchDataSave();
    toHomepage();
    setIsEditing(false);
  };

  return (
    <div className="details-div">
      {isEditing ? (
        <div>
          <h1>Edit:</h1>
          <form>
            <input
              style={{ width: "180px", fontSize: "14pt" }}
              placeholder={apiResponse.produto}
              onChange={(e) => setProduto(e.target.value)}
            />
            <input
              style={{ width: "180px", fontSize: "14pt" }}
              placeholder={apiResponse.valor}
              onChange={(e) => setValor(e.target.value)}
            />

            <textarea
              style={{ height: "100px", width: "340px", fontSize: "14pt" }}
              placeholder={apiResponse.descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </form>
          <button
            className="button-edit-delete"
            onClick={() => handleSaveClick()}
          >
            {" "}
            Save{" "}
          </button>
        </div>
      ) : (
        <div>
          <div>
            <h3>{apiResponse.produto}</h3>
            <div className="thin-margin">
              <h3>Valor</h3>
              <p> R$ {apiResponse.valor}</p>
            </div>
            <p>{apiResponse.descricao}</p>
          </div>
          <button
            className="button-edit-delete"
            onClick={() => handleEditClick()}
          >
            Editar
          </button>
          <button
            className="button-edit-delete"
            onClick={() => handleDeleteClick()}
          >
            Deletar
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsId;
