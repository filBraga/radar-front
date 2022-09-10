import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";

function ProductDiv(props) {
  return (
    <div className="product-div thin-margin">
      <Link to={`/${props.id}`} className="product-title">
        <h3 id="title">{props.produto}</h3>
        <h3 id="type">Eletrônico</h3>
        <h3 id="price">R$ {props.valor}</h3>
      </Link>
    </div>
  );
}

export default ProductDiv;
