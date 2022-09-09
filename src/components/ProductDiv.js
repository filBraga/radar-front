import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";

function ProductDiv(props) {
  return (
    <div className="product-div">
      <Link to={`/${props.id}`}>
        <h6>Nome: {props.produto}</h6>
        <h6>Valor: {props.valor}</h6>
        <h6>Descriçao: {props.descricao}</h6>
      </Link>
    </div>
  );
}

export default ProductDiv;
