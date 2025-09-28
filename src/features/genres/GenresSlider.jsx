import GenresItem from "./GenresItem";
import { useGetGenres } from "./useGetGenres";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MiniLoading from "@/components/MiniLoading";
import Error from "@/components/Error";

function GenresSlider() {
    const {genres, error, isError, isPending, refetch} = useGetGenres();

    if(isPending) return <MiniLoading />
    if(isError) return <Error error={error} refetch={refetch} />

    return (
        <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={5}
        slidesPerView={2}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        style={{ margin: "40px 0" }}
        breakpoints={{
          // When window width is >= 640px
          640: {
              slidesPerView: 2,
          },
          // When window width is >= 768px
          768: {
              slidesPerView: 3,
          },
          // When window width is >= 1024px
          1024: {
              slidesPerView: 4,
          },
          // When window width is >= 1424px
          1424: {
              slidesPerView: 6,
          },
      }}
    >
      {genres?.map((item) => (
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
            <GenresItem genre={item} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    )
}

export default GenresSlider;