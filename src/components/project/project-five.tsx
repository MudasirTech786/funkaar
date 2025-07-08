import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import ClickToPlayVideo from "@/components/ClickToPlayVideo";


// images
import p_img_2 from "@/assets/img/inner-project/masonary/masonary-1.jpg";

// video-enabled project data
const project_data = [
  {
    id: 1,
    title: "Bhegum Innayat Welfare Society",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022418/Bhegum_Innayat_Welfare_Society_p0vjxm.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022418/Bhegum_Innayat_Welfare_Society_p0vjxm.jpg",
    year: 2024,
  },
  {
    id: 2,
    title: "Nilofer Shahid",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022472/Nilofer_Shahid_o3b2m5.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022472/Nilofer_Shahid_o3b2m5.jpg",
    year: 2024,
  },
  {
    id: 3,
    title: "Oppo-DVC",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751021762/port-2_eonlto.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751021762/port-2_eonlto.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 4,
    title: "Oppo-F17 PRO",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751021690/port-11_ldpgcu.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751021690/port-11_ldpgcu.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 5,
    title: "Abacus consulting",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022413/Abacus_consulting_kt7xsj.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022413/Abacus_consulting_kt7xsj.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 6,
    title: "Nilofer Shahid",
    category: "Concept",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751024031/port-1_d8ciiq.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751024031/port-1_d8ciiq.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 7,
    title: "Yamaha",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022481/yamaha_gn21nn.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022481/yamaha_gn21nn.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 8,
    title: "Swyft",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022484/Swyft_oqc8al.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022484/Swyft_oqc8al.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 9,
    title: "SOS Childrens Villages 2018",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022482/SOS_Childrens_Villages_2018_jgdqfq.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022482/SOS_Childrens_Villages_2018_jgdqfq.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 10,
    title: "Seedout DVC",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751021191/port-10_ebxd0j.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751021191/port-10_ebxd0j.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 11,
    title: "Oppo - Corporate Profile IOT devices",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022471/Oppo_-_Corporate_Profile_IOT_devices_wm1u68.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022471/Oppo_-_Corporate_Profile_IOT_devices_wm1u68.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 12,
    title: "Monsanto",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022446/Monsanto_d5cgbu.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022446/Monsanto_d5cgbu.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 13,
    title: "Karandaaz",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022424/Karandaaz_yz9hbh.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022424/Karandaaz_yz9hbh.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 14,
    title: "Human Capital Index Pakistan",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022427/Human_Capital_Index_Pakistan_kbe3rz.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022427/Human_Capital_Index_Pakistan_kbe3rz.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 15,
    title: "Hairoil-4th JUly-ishq_mobile",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022420/Hairoil-4th_JUly-ishq_mobile_g4lwz2.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022420/Hairoil-4th_JUly-ishq_mobile_g4lwz2.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 16,
    title: "ADB (Asian Development Bank)",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022424/ADB_Asian_Development_Bank_s4vj1u.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022424/ADB_Asian_Development_Bank_s4vj1u.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 17,
    title: "GreenBrilliance",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022416/GreenBrilliance_lreiit.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022416/GreenBrilliance_lreiit.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 18,
    title: "Lums",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022420/Lums_t34pcv.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022420/Lums_t34pcv.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 19,
    title: "Seed Out documentary",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022475/Seed_Out_documentary_ir7oi0.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022475/Seed_Out_documentary_ir7oi0.jpg",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 20,
    title: "Select & Airlink",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022481/Select_Airlink_kwiebc.mp4",
    poster: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022481/Select_Airlink_kwiebc.jpg",
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
                  <ClickToPlayVideo
                    src={item.video}
                    poster={item.poster}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "12px"
                    }}
                  />
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
