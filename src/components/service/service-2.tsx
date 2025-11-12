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

const ServiceOne: React.FC = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row align-items-center">

          {/* Left Column */}
          <div className="col-xl-6 col-lg-6 mx-auto text-center">
            <div
              className="tp-service-title-box p-relative mx-auto"
              style={{ maxWidth: "700px" }}
            >
              <h4 className="tp-section-title tp_fade_bottom mb-4 text-black">
                CREATIVE & CONTENT LAB
              </h4>

              <p
                className="tp-section-subtitle tp_fade_bottom text-black"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                We craft compelling visuals, stories, and branding that captivate and convert.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-6 col-lg-6">
            <div
              className="tp-hero-bottom-img"
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <video
                loop
                muted
                autoPlay
                playsInline
                preload="auto"
                poster="/assets/img/home-01/hero/preview.jpg" // optional fallback image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              >
                <source
                  src="/assets/img/home-01/hero/port-7_ifmuf2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>

        {/* Optional: Display services list */}
        <div className="tp-service-right-wrap mt-5">
          {service_data.map((s) => (
            <div
              key={s.id}
              className="tp-service-item d-flex align-items-start mb-4 tp_fade_bottom"
            >
              <div className="tp-service-content">
                <h4 className="tp-service-title-sm mb-2">
                  <b>{s.title}</b>
                </h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceOne;
