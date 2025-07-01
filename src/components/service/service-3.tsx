import React from "react";
import Image from "next/image";
import Link from "next/link";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";

// service data
const service_data = [
  {
    id: 1,
    title: "CAPABILITIES",
    desc: "We create with purpose, strategize with intent, and execute with impact.",
    icon: s_1,
  },
  {
    id: 2,
    title: "CREATIVE & CONTENT LAB",
    desc: "We craft compelling visuals, stories, and branding that captivate and convert.",
    icon: s_2,
  },
  {
    id: 3,
    title: "DIGITAL MARKETING",
    desc: "Data-driven strategies to maximize reach, engagement, and ROI across all platforms.",
    icon: s_3,
  },
  {
    id: 4,
    title: "STRATEGY",
    desc: "Research-backed roadmaps that drive growth, impact, and long-term success.",
    icon: s_4,
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <h4 className="tp-section-title tp_fade_bottom mb-40 text-black universal">
                DIGITAL MARKETING
                {/* <br />
                <span className="text-black">for Brands That Demand Impact</span> */}
              </h4> <br /><br />

              <p className="tp-section-subtitle tp_fade_bottom text-black" style={{ fontSize: "18px", lineHeight: "1.8" }}>
                Data-driven strategies to maximize reach, engagement, and ROI across all platforms.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-hero-bottom-img" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
              <video
                loop
                muted
                autoPlay
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '8px' // optional for soft corners
                }}
              >
                <source src="https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751021191/port-10_ebxd0j.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceOne;

{/* <div className="tp-service-right-wrap">
              {service_data.map((s) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm mb-2">
                      <b className="tp-service-title-sm mb-3">{s.title}</b>
                    </h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div> */}