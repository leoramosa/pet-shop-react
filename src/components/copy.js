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
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = [];
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }

    const response = await fetch(
      "https://apirestshoop.herokuapp.com/servicios/"
    );
    const data = await response.json();
  };

  render() {
    if (this.state.loading === true) {
      return "Loading...";
    }
    return (
      <div className="">
        <div>
          <p>hola leonardo</p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>fg</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>

        {this.state.data.map((prod) => (
          <p>
            <li key={prod.id}></li>
            <p>{prod.name}</p>
          </p>
        ))}
      </div>
    );
  }
}

export default PetHome;
