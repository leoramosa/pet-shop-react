import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/styles/HomeProduct.css';
import { Link } from 'react-router-dom';

function Category() {
  const [homecatego, setGate] = useState([]);
  useEffect(() => {
    axios
      .get('https://apirestshoop.herokuapp.com/servicios/categorias/')
      .then((res) => {
        setGate(res.data);
      });
  }, []);

  return (
    <div className=" ">
      <div className="">Categorias</div>
      <div className="">
        {homecatego.map((cat) => {
          return (
            <div key={cat.id} className="listacategoria">
              <Link to={'/categoria/productos/' + cat.id}>
                {cat.nombrecategoria}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Category;
