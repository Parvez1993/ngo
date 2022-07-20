import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Appbar from "./Appbar";
import { carousalData } from "../../data/carousal";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "./styles/Banner.css";
function Banner({ show, title }) {
  return (
    <div className="banner">
      {show ? (
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
              <SwiperSlide key={k}>
                <img src={i.img} alt="bannerImg" className="full zoom" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="page_banner">
          <h1 className="page_banner_title fade-in-text">{title}</h1>
        </div>
      )}
    </div>
  );
}

export default Banner;
