import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import Gallery from "../components/Gallery";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import TitleDestacado from "../images/title-destacado.png";
import "./styles/PetHome.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);

function PetHome() {
  const [petproduct, setLista] = useState([]);
  useEffect(() => {
    axios
      .get("https://apirestshoop.herokuapp.com/servicios/productos/")
      .then((res) => {
        setLista(res.data);
      });
  }, []);

  return (
    <React.Fragment>
      <React.Fragment>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          /* autoplay={{ delay: 2500, disableOnInteraction: false }} */
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {petproduct.map((prod) => (
            <SwiperSlide key={prod.id}>
              <div className="">
                <div className="title-banner">
                  <p className="title-big-banner">{prod.nombre}</p>
                  <p className="banner-description">{prod.brevedescripcion}</p>
                  <div className="">
                    <Link to={`/productos/${prod.id}`}>
                      <div className="btn-adqui">COMPRAR AHORA</div>
                    </Link>
                  </div>
                </div>
                <img src={prod.fotoportada} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </React.Fragment>
      <div className="">
        <img className="img-fluid" src={TitleDestacado} alt="imagen" />
      </div>
      <div className="">
        <Modal />
      </div>
      <div className="Gallery_container">
        <Gallery />
      </div>
    </React.Fragment>
  );
}

export default PetHome;
