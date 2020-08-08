import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import Gallery from "../components/Gallery";

import "./styles/PetHome.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class PetHome extends React.Component {
  state = {
    loading: true,
    gif: null,
  };

  async componentDidMount() {
    const url = "https://apirestshoop.herokuapp.com/servicios/productos/";
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
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {this.state.gif.map((prod) => (
            <SwiperSlide key={prod.id}>
              <a href="">
                <div className="title-banner">
                  <p className="title-big-banner">{prod.nombre}</p>
                  <p className="banner-description">{prod.brevedescripcion}</p>
                  <div className="btn-adqui">COMPRAR AHORA</div>
                </div>
                <img src={prod.fotoportada} alt="" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="Gallery_container">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default PetHome;
