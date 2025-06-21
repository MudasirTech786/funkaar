import React from "react";
import Image from "next/image";
import { UpArrow } from "../svg";
import Link from "next/link";
import testImage from "@/assets/img/inner-project/work/work-1.png";
// images
import p_img_1 from "@/assets/img/inner-project/work/masonary-1.jpg";
import p_img_2 from "@/assets/img/inner-project/masonary/masonary-1.jpg";
import p_img_3 from "@/assets/img/inner-project/masonary/masonary-3.jpg";
import p_img_4 from "@/assets/img/inner-project/masonary/masonary-4.jpg";
import p_img_5 from "@/assets/img/inner-project/masonary/masonary-5.jpg";
import p_img_6 from "@/assets/img/inner-project/masonary/masonary-6.jpg";

const project_data = [
  {
    id: 1,
    title: "Art Direction",
    category: "Branding",
    img: p_img_1,
    video: "/videos/sample-1.mp4",
    year: 2024,
  },
  {
    id: 2,
    title: "Petit Navire",
    category: "Branding",
    img: p_img_2,
    year: 2024,
  },
  {
    id: 3,
    title: "Big dream",
    category: "Branding",
    img: p_img_3,
    year: 2024,
  },
  {
    id: 4,
    title: "The Stage",
    category: "Branding",
    img: p_img_4,
    year: 2024,
  },
  {
    id: 5,
    title: "Big dream",
    category: "Branding",
    img: p_img_5,
    year: 2024,
  },
  {
    id: 6,
    title: "Sed Lectus",
    category: "Concept",
    img: p_img_6,
    year: 2024,
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFive({ style_2 = false }: IProps) {
  return (
    <div
      className="p-project-5-2-area pb-130"
    >
      <div className="container">
        <div className="row gx-140">
          {project_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="tp-project-5-2-thumb fix mb-140 p-relative"
              >
                <Link className="" href="/portfolio-details-1">
                  <div className="tp_img_reveal">
                    <div className="tp_img_reveal">
                      <Image
                        src={item.img}
                        alt="project-img"
                        width={600}
                        height={400}
                        style={{ height: "auto", width: "100%" }}
                      />

                    </div>
                  </div>
                  {/* <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div> */}
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className={`tp-btn-circle ${style_2 ? "style-2" : ""
                    } tp-hover-btn-item tp-hover-btn`}
                  href="/portfolio-details-1"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
