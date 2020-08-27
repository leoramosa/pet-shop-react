import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import "./styles/HomeProduct.css";
import Modal from "../components/Modal";

function HomeProducts() {
  const [homeprod, setLista] = useState([]);
  useEffect(() => {
    axios
      .get("https://apirestshoop.herokuapp.com/servicios/productos/")
      .then((res) => {
        setLista(res.data);
      });
  }, []);

  const [homecatego, setGate] = useState([]);
  useEffect(() => {
    axios
      .get("https://apirestshoop.herokuapp.com/servicios/categorias/")
      .then((res) => {
        setGate(res.data);
      });
  }, []);

  return (
    <div className="">
      <div className="container homecontent">
        <div className="row">
          <div className="col-3">
            <div className="">Categorias</div>
            <div className="">
              {homecatego.map((cat) => {
                return (
                  <div key={cat.id} className="listacategoria">
                    {cat.nombrecategoria}
                  </div>
                );
              })}
              <div className="">
                <Modal />
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="product-grid">
              {homeprod.map((prod) => {
                return (
                  <Product
                    key={prod.id}
                    className="product-grid"
                    datos={prod}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeProducts;
