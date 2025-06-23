import React from "react";

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger bg-white">
      <div className="container">
        <div className="row justify-content-center">
          {/* Centered Column */}
          <div className="col-xl-8 col-lg-10">
            <div className="tp-service-title-box text-center">
              <h2 className="tp-section-title tp_fade_bottom mb-6 text-black text-4xl md:text-5xl font-bold">
                CAPABILITIES
              </h2>
              <p className="tp-section-subtitle tp_fade_bottom text-black text-[18px] md:text-[20px] leading-8 max-w-2xl mx-auto">
                We create with purpose, strategize with intent, and execute with impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
