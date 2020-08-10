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

      <div className="color-talla">
        <div className="colores-product">
          {props.datos.idcolor.map((colores) => (
            <div
              key={colores.id}
              className="color_prod"
              style={{ backgroundColor: colores.numcolor }}
            ></div>
          ))}
        </div>
        <div className="colores-product">
          {props.datos.idtallaproducto.map((tallas) => (
            <div key={tallas.id} className="list-tallas">
              {tallas.nomtalla}
            </div>
          ))}
        </div>
      </div>

      <div className="info-products">
        <div className="info-price">
          <div>{props.datos.nombre}</div>
          <div className="prince-product">S/.{props.datos.precionormal}</div>
        </div>
        <div className="product-btn">
          <Link to={"/productos/" + props.datos.id}>
            <Button className="" variant="contained" fullWidth="bool">
              Detalle
            </Button>
          </Link>
          <Button
            style={{ background: "#673ab7d4" }}
            variant="contained"
            color="primary"
            fullWidth="bool"
          >
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
