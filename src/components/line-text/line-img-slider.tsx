import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import port_1 from "@/assets/img/inner-service/portfolio/port-2.jpg";
import port_2 from "@/assets/img/inner-service/portfolio/port-1.png";
import port_3 from "@/assets/img/inner-service/portfolio/port-4.png";
import port_4 from "@/assets/img/inner-service/portfolio/port-3.png";
import port_5 from "@/assets/img/inner-service/portfolio/port-5.jpg";
import port_6 from "@/assets/img/inner-service/portfolio/port-6.jpg";
import port_7 from "@/assets/img/inner-service/portfolio/port-7.jpg";
import port_8 from "@/assets/img/inner-service/portfolio/port-9.jpg";

// images
const port_images = [port_1, port_2, port_3, port_4, port_5, port_6, port_7, port_8, port_4, port_5];

export default function LineImgSlider() {
  return (
    <div className="container container-1630">
      <div className="tp-line-text-wrap tp-line-text-wrap-2 pb-120 ">
        <div className="swiper tp-img-slide">
          <Marquee speed={150}>
            {port_images.map((imgSrc, index) => (
              <div
                key={index}
                className={`sv-port-thumb port-thumb-${index % 2 === 0 ? 1 : 2}`}
                style={{
                  marginRight: '20px', width: '250px',      // 👈 Adjust width here
                  height: 'auto'
                }}
              >
                <Image src={imgSrc}
                  alt="port-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px' // optional
                  }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
