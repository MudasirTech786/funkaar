'use client';
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { NextArrow, PrevArrow } from "../svg";
import shape from "@/assets/img/home-08/testimonial/test-1.png";
import logo from "@/assets/img/home-08/testimonial/test-logo-1.png";

// slider setting
const slider_setting = {
  slidesPerView: 1,
  autoplay: { delay: 3000, disableOnInteraction: false },
  loop: true,
  navigation: {
    prevEl: ".tp-studio-prev",
    nextEl: ".tp-studio-next",
  },
  modules: [Autoplay, Navigation],
};

// testimonial data
const testimonial_data = [
  {
    id: 1,
    logo: logo,
    name: "Ali, Marketing Manager - Seed Out",
    desc: `"From concept to execution, Funkaar LLC took our vision and turned it into a powerful narrative that resonated with our target audience. Their expertise in crafting compelling stories is why we consider them our go-to production partner."`,
  },
  {
    id: 2,
    logo: logo,
    name: "Creative Director",
    // designation: "CEO | Gemini Skincare",
    desc: `"Funkaar is not just a production agency—they are our creative partners. Their team consistently delivers exceptional results, blending innovative storytelling with powerful visuals. Every project feels like an investment in the future of our brand."`,
  },
  {
    id: 3,
    logo: logo,
    name: "CEO",
    // designation: "CEO | Gemini Skincare",
    desc: `"Funkaar redefines what it means to create high-quality content. Their strategic approach, paired with a creative edge, helped elevate our brand to new heights. They are not just another agency—they are THE agency for brands that want to make an impact."`,
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};

export default function StudioPanelFour({ style_2 = false }: IProps) {
  return (
    <div className={style_2 ? '' : 'panel-2'}>
      <div
        className={`tp-studio-testimonial-area tp-studio-plr  p-relative fix tp-studio-testimonial-xs-space`}
        style={{ overflow: "visible" }}
      >
        <div className="tp-studio-testimonial-title-box d-none d-md-block">
          <h4 className="tp-studio-testimonial-title">What Our Clients Say</h4>
        </div>
        <div className="container container-1330">
          <div className="tp-studio-testimonial-wrap pt-120">
            <h4 className="tm-hero-title tp-char-animation custom-subheading" style={{ textAlign: "center" }}>
              Testimonials
            </h4>
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="tp-studio-testimonial-shape">
                  <Image src={shape} alt="shape" style={{ height: "auto" }} />
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <div className="tp-studio-testimonial-top-title">
                  {/* <span style={{ fontSize: "28px" }}>Testimonials:</span> */}
                </div>
              </div>

              <div className="col-xl-7 col-lg-7 col-md-9">
                <div className="tp-studio-testimonial-wrapper">
                  <div className="tp-studio-testimonial-slider-wrap p-relative">
                    <Swiper {...slider_setting} className="swiper-container tp-studio-testimonial-active fix">
                      {testimonial_data.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="tp-studio-testimonial-item">
                            <div className="tp-studio-testimonial-text">
                              <p>{item.desc}</p>
                            </div>
                            <div className="tp-studio-testimonial-user-info-box d-flex align-items-center">
                              <div className="tp-studio-testimonial-user-info">
                                <h4 className="tp-studio-testimonial-user-name">{item.name}</h4>
                                {/* <span>{item.designation}</span> */}
                              </div>
                              <div className="tp-studio-testimonial-line d-none d-md-block">
                                <span></span>
                              </div>
                              {/* <div className="tp-studio-testimonial-logo">
                                <Image src={item.logo} alt="logo" />
                              </div> */}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="tp-studio-testimonial-arrow">
                      <button className="tp-studio-prev">
                        <span>
                          <PrevArrow />
                        </span>
                      </button>
                      <button className="tp-studio-next">
                        <span>
                          <NextArrow />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tm-hero-area tm-hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tm-hero-content">
                <h3 className="tm-hero-title tp-char-animation custom-subheading">
                  Let’s Create Something Unforgettable
                </h3>

                {/* Contact Button */}
                <a
                  href="/contact"
                  className="tp-btn tp-btn-white w-100 text-center"
                  style={{
                    padding: "2px 24px",
                    borderRadius: "6px",
                    display: "inline-block",
                    textDecoration: "none",
                    marginTop: "20px",
                    fontWeight: "600",
                    fontSize: "26px",
                    backgroundColor: "#fff",
                    color: "#000",
                    textAlign: "center",
                    transition: "all 0.3s ease"
                  }}
                >
                  Contact Us
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
