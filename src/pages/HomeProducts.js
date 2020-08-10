import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import "./styles/HomeProduct.css";
function HomeProducts() {
  const [homeprod, setLista] = useState([]);
  useEffect(() => {
    axios
      .get("https://apirestshoop.herokuapp.com/servicios/productos/")
      .then((res) => {
        setLista(res.data);
      });
  }, []);

  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-3">hola</div>
          <div className="col-9">
            <div className="product-grid">
              {homeprod.map((prod) => {
                return <Product className="product-grid" datos={prod} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeProducts;
