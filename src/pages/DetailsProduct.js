import React, { useState, useEffect } from "react";
import axios from "axios";
import InputNumber from "../components/InputNumber";
import "./styles/Details.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
function DetailsProduct(props) {
  const [producto, setProducto] = useState({
    idcolor: [],
    idtallaproducto: [],
    idcategoria: [],
  });
  let id = props.match.params.id;
  useEffect(() => {
    axios
      .get("https://apirestshoop.herokuapp.com/servicios/productos/" + id + "/")
      .then((res) => {
        setProducto(res.data);
      });
  }, []);

  let thumbnails = document.getElementsByClassName("thumbnail");

  let activeImages = document.getElementsByClassName("active");

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", function () {
      console.log(activeImages);

      if (activeImages.length > 0) {
        activeImages[0].classList.remove("active");
      }

      this.classList.add("active");
      document.getElementById("featured").src = this.src;
    });
  }

  return (
    <div className="main_detail">
      <div className="col-lg-12 rutes">
        <Link to="/">Home</Link> / <a href="#">Categoría</a> /
        {producto.idcategoria.nombrecategoria}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7" id="content-wrapper">
            <div id="slide-wrapper">
              <div id="slider">
                <img
                  className="thumbnail active"
                  src={producto.fotosproducts1}
                  alt=""
                />
                <img
                  className="thumbnail"
                  src={producto.fotosproducts2}
                  alt=""
                />
                <img
                  className="thumbnail"
                  src={producto.fotosproducts3}
                  alt=""
                />
                <img
                  className="thumbnail"
                  src={producto.fotosproducts4}
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <img
                className="img-fluid"
                id="featured"
                src={producto.fotosproducts1}
                alt=""
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 description__product">
            <p className="title_product">{producto.nombre}</p>
            <p className="description_product">{producto.descripcion}</p>
            <div className="title_price">
              <div className="price_internet">
                <div>Normal</div>
                <div>S/. {producto.precionormal}</div>
              </div>
              <div className="price_internet">
                <div>Internet</div>
                <div>S/ {producto.preciointernet}</div>
              </div>
              <div className="puntos__internet">
                <div>Acumulas</div>
                <div>{producto.preciointernet} PetPuntos</div>
              </div>
            </div>
            <div className="colors__product">
              <p className="colors__product-title">COLORES</p>
              <div className="color-type">
                {producto.idcolor.map((colores) => (
                  <div className="style-color" key={colores.id}>
                    {colores.nomcolor}
                  </div>
                ))}
              </div>
            </div>
            <div className="talla__product">
              <p className="talla___product-title">TALLA</p>
              <div className="talla-type">
                {producto.idtallaproducto.map((talla) => (
                  <div className="style-color" key={talla.id}>
                    {talla.nomtalla}
                  </div>
                ))}
              </div>
            </div>
            <div className="btn_compra_quanty">
              <InputNumber min={1} max={10} />
              <div className="btn-add">
                <Button variant="contained" color="primary" fullWidth="bool">
                  agregar a bolsa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
