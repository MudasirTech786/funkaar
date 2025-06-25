import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.png";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.png";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";


const service_data = [
  {
    id: 1,
    img: ser_img_2,
    subtitle: "Creative & Content Lab",
    title: "Creative & Content Lab",
    text: "Creativity that captivates. We bring ideas to life through storytelling, visuals, and compelling content that resonates across platforms.",
    lists: [
      "Advertising",
      {
        title: "Design (Branding)",
        subItems: ["Logo Design", "Brand Identity"],
      },
      {
        title: "Photography",
        subItems: ["Fashion", "Products / E-commerce", "Events"],
      },
      {
        title: "Video Production",
        subItems: ["Commercials", "Documentaries", "Branded Content", "Events", "Fashion", "Ecommerce & products"],
      },
      "Social Media Content",
      "Integrated Campaigns",
      "Motion Graphics",
      "Animation",
      "Event videos / photography",
    ],
  },
  {
    id: 2,
    img: ser_img_3,
    subtitle: "Digital Marketing",
    title: "Digital Marketing",
    text: "Results-driven digital solutions to enhance visibility, engagement, and conversions.",
    lists: [
      "SEO (Search Engine Optimization)",
      "Paid Advertising",
      "Analytics & Performance Tracking",
      "Email Marketing",
      "SEM",
    ],
  },
  {
    id: 3,
    img: ser_img_1,
    subtitle: "Strategy",
    title: "Strategy",
    text: "Every great campaign starts with a clear direction. We analyze data, trends, and audience behavior to craft strategies that position your brand for success.",
    lists: [
      "Social Media Strategy",
      "Brand Positioning",
      "Audience Understanding",
      "Business Insights",
      "Audience + Competitor Insights",
    ],
  }
  
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2 mb-200 md:mb-2">
      <div className="container container-1630">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2"  style={{ marginBottom: "20px" }}>
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) =>
                            typeof list === "string" ? (
                              <li key={i}>{list}</li>
                            ) : (
                              <li key={i}>
                                {list.title}
                                <ul style={{ paddingLeft: "20px", marginTop: "5px" }}>
                                  {list.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex} style={{ marginTop: "2px" }}>{subItem}</li>
                                  ))}
                                </ul>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
