import React, { Component } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Button from "@material-ui/core/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./styles/Gallery.css";

class Gallery extends React.Component {
  state = {
    loading: true,
    product: null,
  };

  async componentDidMount() {
    const url =
      "https://apirestshoop.herokuapp.com/servicios/productos/?activo=0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ product: data, loading: false });
  }

  render() {
    if (this.state.loading === true) {
      return "Loading...";
    }
    return (
      <div className="">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {this.state.product.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="product_destacado">
                <div className="colors">
                  {photo.idcolor.map((colores) => (
                    <div
                      className="color_prod"
                      style={{ backgroundColor: colores.numcolor }}
                    ></div>
                  ))}
                </div>
                <img className="imgbanner" src={photo.photoprincipal} alt="" />
                <div className="title-bpro">
                  <p className="title-big-bpro">{photo.nombre}</p>

                  <Button variant="outlined" color="primary">
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
}

export default Gallery;
