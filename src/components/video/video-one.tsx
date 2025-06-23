'use client';
import React from 'react';
import Image from 'next/image';

const VideOne = () => {
  return (
    <div className="tp-hero-bottom-img-wrap tp-hero-ptb main-slider">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="tp-hero-title-wrap p-relative" style={{ position: "relative" }}>
              <div style={{ position: "relative", width: "fit-content", margin: "0 auto" }}>
                {/* Image */}
                <Image
                  src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
                  alt="shape"
                  width={900}
                  height={800}
                  style={{
                    height: "auto",
                    display: "block"
                  }}
                />

                {/* Text over image */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    textAlign: "center",
                    color: "#fff",
                    padding: "0 20px",
                  }}
                  className="tp_fade_bottom"
                >
                  <p className="text-white leading-relaxed font-medium text-center">
                    Funkaar is a full-service marketing agency crafting high-impact content that drives growth.
                    Our powerful narratives cut through the noise, turning your brand’s story into a compelling
                    message that engages and delivers results.
                  </p>

                </div>
              </div>
            </div>

            {/* Keep this if needed */}
            {/* <div className="row">
              <div className="col-xl-12"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideOne;
