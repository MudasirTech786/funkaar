'use client';
import React from 'react';
import Image from 'next/image';
import BrandSlider from "@/components/brand/brand-slider";

const VideOne = () => {
  return (
    <div className="tp-hero-bottom-img-wrap tp-hero-ptb main-slider relative z-10 bg-white">
      <div className="container-fluid px-4 sm:px-6 md:px-10">
        <div className="row justify-center">
          <div className="col-xxl-12">
            <div className="tp-hero-title-wrap p-relative" style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "fit-content",
                  margin: "0 auto",
                  marginTop: "-150px",
                }}
              >
                {/* Circle Image */}
                {/* <Image
                  src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
                  alt="shape"
                  width={500}
                  height={400}
                  style={{
                    height: "auto",
                    display: "block",
                  }}
                  className="w-[500px] md:w-[400px] sm:w-[300px]"
                /> */}

                {/* Centered Text */}
                <div className="funkaar-container tp_fade_bottom">
                  <h1 className="funkaar-heading text-center">
                    BUILT TO AMPLIFY WHAT<br /> YOU STAND FOR
                  </h1>

                  <p className="funkaar-text">

                    Funkaar is a full-service marketing agency crafting high-impact content that drives growth.<br />
                    Our powerful narratives cut through the noise, turning your brand’s story into a compelling<br />
                    message that engages and delivers results.
                    
                  </p>
                </div>


              </div>
            </div>

            {/* Brand Section – No change for laptop */}

          </div>
        </div>
      </div>
      <div className="row mt-4 bg-black">
        <div className="tp-brand-brd-top tp-brand-ptb">
          <div style={{ marginBottom: "70px" }} className="row align-items-center">
            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
              <div className="tp-brand-title-box text-center">
                <h4 className="tp-brand-title tp_fade_bottom clients">
                  Clients We’ve Worked With
                </h4>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-12">
              <div className="tp-brand-slider-wrapper">
                <BrandSlider />
              </div>
            </div>
          </div>
        </div>
      </div> <br />
    </div>
  );
};

export default VideOne;
