"use client";
import React from "react";
import ProjectTextLine from "./project-text-line";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// project images
import p_1 from "@/assets/img/inner-about/about/about-8.png";
import p_2 from "@/assets/img/inner-about/about/about-3.jpg";
import p_3 from "@/assets/img/inner-about/about/port-3.jpg";
import p_4 from "@/assets/img/inner-about/about/about-4.png";
import p_5 from "@/assets/img/inner-about/about/about-7.jpg";
import p_6 from "@/assets/img/inner-about/about/about-6.png";

// type
type IProject = {
  id: number;
  cls: string;
  cls_2: string;
  img: StaticImageData;
};

function ProjectItem({ item }: { item: IProject }) {
  return (
    <div className={`tp-project-item ${item.cls} mb-100`}>
      <div
        className={`tp-project-img ${item.cls_2} fix not-hide-cursor`}
        data-cursor="View<br>Demo"
      >
        <Link className="cursor-hide" href="/portfolio-details-3">
          <Image
            data-speed=".8"
            src={item.img}
            alt="project-img"
            style={{
              width: "150%",
              height: "400px",          // adjust size as needed
              objectFit: "cover",
              borderRadius: "12px",     // optional rounded edges
            }}
          />
        </Link>
      </div>
    </div>
  );
}


const project_data: IProject[] = [
  { id: 1, cls: "tp-project-mr", cls_2: "height-1", img: p_1 },
  { id: 2, cls: "text-end", cls_2: "height-2 d-inline-flex justify-content-end", img: p_2 },
  { id: 3, cls: "tp-project-mr", cls_2: "height-3", img: p_3 },
  { id: 4, cls: "", cls_2: "height-4", img: p_4 },
  { id: 5, cls: "tp-project-ml", cls_2: "height-5", img: p_5 },
  { id: 6, cls: "", cls_2: "height-6", img: p_6 },
];

// ⬆️ ProjectItem already updated above

// prop type
type IProps = {
  style_2?: boolean;
};

const ProjectOne = ({ style_2 = false }: IProps) => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-project-left-wrap">
              {project_data.slice(0, 3).map((item, i) => (
                <ProjectItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-project-right-wrap">
              {project_data.slice(3, 6).map((item) => (
                <ProjectItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectOne;
