import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliders = [
    {
        id: 1,
        image: "/assets/slider-1.png",
        name: "Slider One"
    },
    {
        id: 2,
        image: "/assets/slider-2.png",
        name: "Slider Two"
    },
    {
        id: 3,
        image: "/assets/slider-3.png",
        name: "Slider Three"
    },
]

function MainSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      style={{ marginTop: "20px" }}
    >
      {sliders.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "auto"
            }}
          >
            <img src={item.image} alt={item.name} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MainSlider;
