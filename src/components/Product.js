import React from "react";
import { Link } from "react-router-dom";
import "./styles/Product.css";
import Button from "@material-ui/core/Button";
function Product(props) {
  return (
    <div className="card-product">
      <div className="img-product">
        <img
          className="img-fluid image-product"
          src={props.datos.photoprincipal}
          alt=""
        />
      </div>
      <div className="info-products">
        <div className="info-price">
          <p>{props.datos.nombre}</p>
          <p>{props.datos.nombre}</p>
        </div>
        <div className="product-btn">
          <Link to={"/productos/" + props.datos.id}>
            <Button className="hola" variant="contained" fullWidth="bool">
              Detalle
            </Button>
          </Link>
          <Button variant="contained" color="primary" fullWidth="bool">
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
