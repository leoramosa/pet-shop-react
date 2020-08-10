import React, { useState, useEffect } from "react";
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

import { Link } from "react-router-dom";

import TitleDestacado from "../images/title-destacado.png";

import "./styles/PetHome.css";
import axios from "axios";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);

class PetHome extends React.Component {
  state = {
    loading: true,
    gif: null,
  };

  async componentDidMount() {
    const url =
      "https://apirestshoop.herokuapp.com/servicios/productos/?activo=1/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ gif: data, loading: false });
  }

  render() {
    if (this.state.loading === true) {
      return "Loading...";
    }
    return (
      <div className="">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {this.state.gif.map((prod) => (
            <SwiperSlide key={prod.id}>
              <Link to={"/productos/" + prod.id}>
                <div className="title-banner">
                  <p className="title-big-banner">{prod.nombre}</p>
                  <p className="banner-description">{prod.brevedescripcion}</p>
                  <Link to={"/productos/" + prod.id}>
                    <div className="btn-adqui">COMPRAR AHORA</div>
                  </Link>
                </div>
                <img src={prod.fotoportada} alt="" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="">
          <img className="img-fluid" src={TitleDestacado} alt="" />
        </div>
        <div className="Gallery_container">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default PetHome;
