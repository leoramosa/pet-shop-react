import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import InputNumber from "../components/InputNumber";
import "./styles/Details.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Modal from "../components/Modal";
import { AppContext } from "../context/AppContext";

function DetailsProduct(props) {
  let { cart, setCart } = useContext(AppContext);
  const [cantidad, setCantidad] = useState(1);
  const [producto, setProducto] = useState({
    idcolor: [],
    idtallaproducto: [],
    idcategoria: [],
  });
  const val_id = props.match.params.id;
  useEffect(() => {
    axios
      .get(
        "https://apirestshoop.herokuapp.com/servicios/productos/" + val_id + "/"
      )
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
  function updateCantidad(e) {
    setCantidad(e.target.value);
  }

  function agregarProducto() {
    let idprod = props.match.params.id;
    let nProducto = {
      id: idprod,
      nombre: producto.nombre,
      precio: producto.precionormal,
      cantidad: parseInt(cantidad),
    };
    let nCart = cart;
    let encontrado = false;
    for (let item of nCart) {
      // Recorro los items del carrito
      if (item.id === idprod) {
        // Si encuentro el producto en el carrito
        item.cantidad += nProducto.cantidad; //sumo la cantidad que compro a la existente
        encontrado = true;
        break;
      }
    }
    if (!encontrado)
      //si no se encontró el producto en el carrito
      nCart = cart.concat(nProducto); //Agrego un nuevo producto
    localStorage.setItem("cart", JSON.stringify(nCart));
    setCart(nCart);
    alert("Producto agregado!");
  }

  return (
    <div className="main_detail">
      <div className="col-lg-12 rutes">
        <Link to="/">Home</Link> / <Link to="">Categoría</Link> /
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
            <div className="modal-detail">
              <p className="title_product">{producto.nombre}</p>
              <div className="">
                <Modal />
              </div>
            </div>
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
              <InputNumber
                type="number"
                className="cantidad"
                onChange={updateCantidad.bind(this)}
                defaultValue="1"
                min="1"
              />
              <div className="btn-add">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={agregarProducto.bind(this)}
                >
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
