import React from "react";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "./Modal";
import ButtonNewProduct from "./ButtonNewProduct";
import { useState } from "react";

const ModalDiv = (props) => {
  const [produto, setProduto] = useState();
  const [valor, setValor] = useState();
  const [descricao, setDescricao] = useState();
  const [productState, setProductState] = props.productState;

  const handleClick = async () => {
    fetch("http://localhost:9000/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({ produto, valor, descricao }), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((response) => {
        setProductState((prev) => [...prev, response]);
        props.setShowModal(false);
      });
  };

  return (
    <Modal
      show={props.showModal}
      setShow={props.setShowModal}
      // hideCloseButton
    >
      <ModalHeader>
        <h2>Novo Produto</h2>
      </ModalHeader>
      <ModalBody>
        <input
          style={{ width: "180px", fontSize: "14pt" }}
          placeholder="Nome"
          onChange={(e) => setProduto(e.target.value)}
        />
        <input
          style={{ width: "180px", fontSize: "14pt" }}
          placeholder="Valor"
          onChange={(e) => setValor(e.target.value)}
        />

        <textarea
          style={{ height: "100px", width: "400px", fontSize: "14pt" }}
          placeholder="Descricao"
          onChange={(e) => setDescricao(e.target.value)}
        />
      </ModalBody>
      <ModalFooter>
        <ButtonNewProduct onClick={() => handleClick()}>Add</ButtonNewProduct>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDiv;
