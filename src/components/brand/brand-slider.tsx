"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/brand-1.png";
import b_2 from "@/assets/img/home-01/brand/brand-2.png";
import b_3 from "@/assets/img/home-01/brand/brand-3.png";
import b_4 from "@/assets/img/home-01/brand/brand-4.png";
import b_5 from "@/assets/img/home-01/brand/brand-5.png";
import b_6 from "@/assets/img/home-01/brand/brand-6.png";
import b_7 from "@/assets/img/home-01/brand/brand-7.png";
import b_8 from "@/assets/img/home-01/brand/brand-8.png";
import b_9 from "@/assets/img/home-01/brand/brand-9.png";
import b_10 from "@/assets/img/home-01/brand/brand-10.png";
import b_11 from "@/assets/img/home-01/brand/brand-11.png";
import b_12 from "@/assets/img/home-01/brand/brand-12.png";
import b_13 from "@/assets/img/home-01/brand/brand-13.png";
import b_14 from "@/assets/img/home-01/brand/brand-14.png";
import b_15 from "@/assets/img/home-01/brand/brand-15.png";
import b_16 from "@/assets/img/home-01/brand/brand-16.png";
import b_17 from "@/assets/img/home-01/brand/brand-17.png";
import b_18 from "@/assets/img/home-01/brand/brand-18.png";
import b_19 from "@/assets/img/home-01/brand/brand-19.png";
import b_20 from "@/assets/img/home-01/brand/brand-20.png";
import b_21 from "@/assets/img/home-01/brand/brand-21.png";
import b_22 from "@/assets/img/home-01/brand/brand-22.png";
import b_23 from "@/assets/img/home-01/brand/brand-23.png";


const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8, b_9, b_10, b_11, b_12, b_13, b_14, b_15, b_16, b_17, b_18, b_19, b_20, b_21, b_22, b_23, b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8, b_9, b_10, b_11, b_12, b_13, b_14, b_15, b_16, b_17, b_18, b_19, b_20, b_21, b_22, b_23];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <div key={i} className="tp-brand-item" style={{ width: "140px", margin: "0 24px" }}>
  <Image src={b} alt="" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
</div>

        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
