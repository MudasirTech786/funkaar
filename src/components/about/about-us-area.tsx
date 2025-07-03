import React from "react";
import Image from "next/image";
import { Hand } from "../svg";
import ProjectOne from "@/components/project/project-one";

// images

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

        <ProjectOne style_2={true} />

        {/* Second part of the text */}
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <p className="tp-dropcap tp_fade_bottom mt-4">
                From high-impact campaigns to transformative media projects, we help brands, nonprofits, and organizations stand out, speak louder, and connect deeper.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
