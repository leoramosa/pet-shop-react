import React, { useState, useEffect } from "react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Button from "@material-ui/core/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./styles/Gallery.css";

import axios from "axios";

function Gallery() {
  const [gallery, setLista] = useState([]);
  useEffect(() => {
    axios
      .get("https://apirestshoop.herokuapp.com/servicios/productos/")
      .then((res) => {
        setLista(res.data);
      });
  }, []);

  return (
    <div className="">
      <Swiper
        className="swiper__content"
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {gallery.map((photo) => (
          <SwiperSlide key={photo.id}>
            <div className="product_destacado">
              <div className="colors">
                {photo.idcolor.map((colores) => (
                  <div
                    key={colores.id}
                    className="color_prod"
                    style={{ backgroundColor: colores.numcolor }}
                  ></div>
                ))}
              </div>

              <div className="tallas-prod">
                <div className="title-talla">Tallas</div>
                {photo.idtallaproducto.map((tallas) => (
                  <div key={tallas.id} className="list-tallas">
                    {tallas.nomtalla}
                  </div>
                ))}
              </div>

              <img className="imgbanner" src={photo.photoprincipal} alt="" />
              <div className="title-bpro">
                <p className="title-big-bpro">{photo.nombre}</p>

                <Button className="btn-home" variant="outlined" color="primary">
                  <Link to={"/productos/" + photo.id}>COMPRAR AHORA</Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
