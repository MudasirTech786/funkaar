import React from "react";
import Image from "next/image";
import { Hand } from "../svg";
import ProjectOne from "@/components/project/project-one";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about-1.jpg";
import ab_2 from "@/assets/img/inner-about/about/about-2.png";
import ab_3 from "@/assets/img/inner-about/about/about-3.jpg";
import ab_4 from "@/assets/img/inner-about/about/about-4.jpg";
import ab_5 from "@/assets/img/inner-about/about/about-5.jpg";
import ab_6 from "@/assets/img/inner-about/about/about-6.jpg";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-20 z-index-5">
      <div className="container container-1480">

        {/* First part of the text */}
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <p className="tp-dropcap tp_fade_bottom">
                At Funkaar, we craft storytelling that inspires and drives impact. Blending cinematic production with strategic marketing,
                we create content that captures attention, sparks emotion, and moves people to action.
              </p>
            </div>
          </div>
        </div>

        {/* Pictures Section */}
        {/* <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end mb-5">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "700px", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "360px", width: "100%", objectFit: "cover", marginBottom: "30px" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "460px", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-end mb-5 flex-row-reverse">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "650px", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "360px", width: "100%", objectFit: "cover", marginBottom: "20px" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "400px", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "700px", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "360px", width: "100%", objectFit: "cover", marginBottom: "30px" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "460px", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div> */}
        <ProjectOne style_2={true}/>


        {/* Second part of the text */}
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <p className="tp-dropcap tp_fade_bottom">
                From high-impact campaigns to transformative media projects, we help brands, nonprofits, and organizations stand out, speak louder, and connect deeper.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
