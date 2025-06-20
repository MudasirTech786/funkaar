import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-3.png";

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

// service items
export function ServiceItems() {
  return (
    <div className="row">
      {service_data.map((item) => (
        <div key={item.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
          <div className="tp-service-5-item tp_fade_bottom space-1">
            {/* <div className="tp-service-4-icon">
              <Image src={item.icon} alt="icon" />
            </div> */}
            <div className="tp-service-4-content">
              <h4 className="tp-service-4-title-sm tp-text-black">
                <Link href="/service">{item.title}</Link>
              </h4>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// service five area
export default function ServiceFive() {
  return (
    <div className="tp-service-5-area pt-120 pb-70">
      <div className="container container-1775">
        <div className="tp-service-5-wrap">
          <ServiceItems/>
        </div>
      </div>
    </div>
  );
}
