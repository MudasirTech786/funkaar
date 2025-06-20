'use client';
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";

const HeroBannerOne = () => {
  useGSAP(() => {
  
    if(typeof window !== 'undefined'){
      setTimeout(() => {
        fadeAnimation();
      },100)
    }
  }, {});
  return (
    <div className="tp-hero-area tp-hero-ptb main-slider">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="tp-hero-title-wrap mb-35 p-relative">
              <div className="">
                <Image
                  src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
                  alt="shape"
                  width={600}
                  height={700}
                  style={{ height: "auto", position: "absolute",
            top: "-13%",
            left: "30%" }}
                />
              </div>
              <div className="tp-hero-title-box text-center p-relative">
                <h1 className="tp-hero-title tp_fade_bottom">
                  <span className="p-relative">
                    Crafting Stories, <br /> Fueling Growth
                  </span>
                  
                </h1>
              </div>
            </div>
            <div className="tp-hero-content tp_fade_bottom">
              <p>
                <span></span>
                Funkaar is a full-service marketing agency crafting high-impact content that drives growth. Our powerful narratives cut through the noise,
                 turning your brand’s story into a compelling message that engages and delivers results.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOne;