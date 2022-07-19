import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { carousalData } from "../data/carousal";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

function Banner() {
  return (
    <Swiper
      spaceBetween={30}
      className="mySwiper"
      effect="fade"
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 5000 }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
    >
      {carousalData.map((i, k) => {
        return (
          <SwiperSlide>
            <img src={i.img} alt="bannerImg" className="full zoom" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Banner;
