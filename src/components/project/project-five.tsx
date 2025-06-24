import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";

// images
import p_img_2 from "@/assets/img/inner-project/masonary/masonary-1.jpg";

// video-enabled project data
const project_data = [
  {
    id: 1,
    title: "Bhegum Innayat Welfare Society",
    category: "Branding",
    img: "p_img_2",
    video: "/assets/img/inner-project/masonary/Bhegum Innayat Welfare Society.mp4",
    year: 2024,
  },
  {
    id: 2,
    title: "Nilofer Shahid",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Nilofer Shahid.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 3,
    title: "Oppo-DVC",
    category: "Branding",
    video: "/assets/img/home-04/portfolio/port-2.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 4,
    title: "Oppo-F17 PRO",
    category: "Branding",
    video: "/assets/img/home-04/portfolio/port-11.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 5,
    title: "Abacus consulting",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Abacus consulting.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 6,
    title: "Nilofer Shahid",
    category: "Concept",
    video: "/assets/img/home-04/portfolio/port-1.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 7,
    title: "Yamaha",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/yamaha.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 8,
    title: "Swyft",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Swyft.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 9,
    title: "SOS Childrens Villages 2018",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/SOS Childrens Villages 2018.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 10,
    title: "Seedout DVC",
    category: "Branding",
    video: "/assets/img/home-04/portfolio/port-10.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 11,
    title: "Oppo - Corporate Profile IOT devices",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Oppo - Corporate Profile IOT devices.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 12,
    title: "Monsanto",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Monsanto.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 13,
    title: "Karandaaz",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Karandaaz.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 14,
    title: "Human Capital Index Pakistan",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Human Capital Index Pakistan.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 15,
    title: "Hairoil-4th JUly-ishq_mobile",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Hairoil-4th JUly-ishq_mobile.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 16,
    title: "ADB (Asian Development Bank)",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/ADB (Asian Development Bank).mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 17,
    title: "GreenBrilliance",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/GreenBrilliance.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 18,
    title: "Lums",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Lums.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 19,
    title: "Seed Out documentary",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Seed Out documentary.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 20,
    title: "Select & Airlink",
    category: "Branding",
    video: "/assets/img/inner-project/masonary/Select & Airlink.mp4",
    img: "p_img_2",
    year: 2024,
  },
];

type IProps = {
  style_2?: boolean;
};

export default function ProjectFive({ style_2 = false }: IProps) {
  return (
    <div className="p-project-5-2-area pb-130">
      <div className="container">
        <div className="row gx-140">
          {project_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-project-5-2-thumb fix mb-140 p-relative">
                {/* <Link href=""> */}
                  <div className="tp_img_reveal">
                    {item.video ? (
                      <video
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          borderRadius: "12px"
                        }}
                      />
                    ) : (
                      <Image
                        src={item.img}
                        alt="project-img"
                        width={600}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                      />
                    )}
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    {/* <span className="tp-project-5-2-meta">{item.year}</span> */}
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                {/* </Link> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className={`tp-btn-circle ${style_2 ? "style-2" : ""} tp-hover-btn-item tp-hover-btn`}
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
        </div> */}
      </div>
    </div>
  );
}
