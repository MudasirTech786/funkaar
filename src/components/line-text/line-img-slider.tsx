import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import port_2 from "@/assets/img/inner-service/portfolio/port-1.png";
import port_1 from "@/assets/img/inner-service/portfolio/port-10.png";
import port_3 from "@/assets/img/inner-service/portfolio/port-4.jpg";
import port_4 from "@/assets/img/inner-service/portfolio/port-3.jpg";
import port_5 from "@/assets/img/inner-service/portfolio/port-5.png";
import port_6 from "@/assets/img/inner-service/portfolio/port-6.png";
import port_7 from "@/assets/img/inner-service/portfolio/port-8.jpg";
import port_8 from "@/assets/img/inner-service/portfolio/port-11.png";
import port_9 from "@/assets/img/inner-service/portfolio/port-9.jpg";
import port_10 from "@/assets/img/inner-service/portfolio/port-2.png";
import port_11 from "@/assets/img/inner-service/portfolio/port-11.png";
import port_12 from "@/assets/img/inner-service/portfolio/port-12.png";
import port_13 from "@/assets/img/inner-service/portfolio/port-13.jpg";
import port_14 from "@/assets/img/inner-service/portfolio/port-14.jpg";
import port_15 from "@/assets/img/inner-service/portfolio/port-15.jpg";
import port_16 from "@/assets/img/inner-service/portfolio/port-16.jpg";
import port_17 from "@/assets/img/inner-service/portfolio/port-17.png";
import port_18 from "@/assets/img/inner-service/portfolio/port-18.jpg";
import port_19 from "@/assets/img/inner-service/portfolio/port-19.jpg";
import port_20 from "@/assets/img/inner-service/portfolio/port-20.jpg";

// images
const port_images = [port_1, port_2, port_3, port_4, port_5, port_6, port_7, port_8, port_9, port_10,
  port_11, port_12, port_13, port_14, port_15, port_16, port_17, port_18, port_19, port_20
];

export default function LineImgSlider() {
  return (
    <div className="container container-1630">
      <div className="tp-line-text-wrap tp-line-text-wrap-2 pb-120 ">
        <div className="swiper tp-img-slide">
          <Marquee speed={60} gradient={false} pauseOnHover={true}>
            {port_images.map((imgSrc, index) => {
              // Alternate sizes
              const isEven = index % 2 === 0;

              const containerStyle = {
                width: isEven ? "400px" : "360px",     // wide image
                height: isEven ? "400px" : "300px",    // tall vs short
                borderRadius: "28px",
                overflow: "hidden",
                marginRight: "24px",
                flexShrink: 0,
              };

              return (
                <div key={index} style={containerStyle}>
                  <Image
                    src={imgSrc}
                    alt={`portfolio-${index}`}
                    width={isEven ? 260 : 360}
                    height={isEven ? 400 : 300}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
