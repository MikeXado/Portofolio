import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { bio, social } from "../../constants";

export default function BioSlider() {
  return (
    <div className="bio-slider about-side">
      <div className="bio-slider__message">Adjust Bio Length</div>
      <div className="swiper__pagination"></div>
      <div className="bio-slider__size">
        <div className="size">shortest</div>
        <div className="size">longest</div>
      </div>
      <div className="bio-slider__slider">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          observer={true}
          observeParents={true}
          autoHeight={true}
          speed={800}
          pagination={{
            clickable: true,
            el: ".swiper__pagination",
            type: "bullets",
          }}
        >
          {bio.map((slide) => {
            return (
              <SwiperSlide key={slide.id} className="slide">
                {slide.text}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="connect-me">
        <div className="connect-me__title">Connect with me:</div>
        <div className="connect-me__socials">
          {social.map((social) => {
            return (
              <a key={social.id} className="social-link" href={social.href}>
                <img src={social.img} alt="social-media" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
