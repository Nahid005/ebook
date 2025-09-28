import React from "react";
import { useSliders } from "@/hooks/useSliders";
import Loading from "./Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { baseURL } from "@/lib/halper";
import Error from "./Error";

function MainSlider() {
  const {sliders, error, isError, isLoading, refetch} = useSliders();

  if(isLoading) return <Loading />
  if(isError) return <Error error={error} reset={refetch}/>

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 2500, disableOnInteraction: false }}
      style={{ marginTop: "20px" }}
    >
      {sliders?.map((item) => (
        <SwiperSlide key={item._id}>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "auto"
            }}
          >
            <img className="w-full" src={`${baseURL}/assets/sliderImages/${item.image}`} alt={item.name} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MainSlider;
