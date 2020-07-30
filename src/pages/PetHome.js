import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
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
                <img src={prod.fotoportada} alt="" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default PetHome;
