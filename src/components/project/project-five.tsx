import React, { useState } from "react";
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
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022418/Bhegum_Innayat_Welfare_Society_p0vjxm.mp4",
    year: 2024,
  },
  {
    id: 2,
    title: "Nilofer Shahid",
    category: "Branding",
    video: "/assets/img/home-01/hero/Nilofer_Shahid_o3b2m5.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 3,
    title: "Oppo-DVC",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751021762/port-2_eonlto.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 4,
    title: "Oppo-F17 PRO",
    category: "Branding",
    video: "/assets/img/home-01/hero/port-11_ldpgcu.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 5,
    title: "Abacus consulting",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022413/Abacus_consulting_kt7xsj.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 6,
    title: "Nilofer Shahid",
    category: "Concept",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751024031/port-1_d8ciiq.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 7,
    title: "Yamaha",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022481/yamaha_gn21nn.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 8,
    title: "Swyft",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022484/Swyft_oqc8al.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 9,
    title: "SOS Childrens Villages 2018",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022482/SOS_Childrens_Villages_2018_jgdqfq.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 10,
    title: "Seedout DVC",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751021191/port-10_ebxd0j.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 11,
    title: "Oppo - Corporate Profile IOT devices",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022471/Oppo_-_Corporate_Profile_IOT_devices_wm1u68.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 12,
    title: "Monsanto",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022446/Monsanto_d5cgbu.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 13,
    title: "Karandaaz",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022424/Karandaaz_yz9hbh.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 14,
    title: "Human Capital Index Pakistan",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022427/Human_Capital_Index_Pakistan_kbe3rz.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 15,
    title: "Hairoil-4th JUly-ishq_mobile",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022420/Hairoil-4th_JUly-ishq_mobile_g4lwz2.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 16,
    title: "ADB (Asian Development Bank)",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022424/ADB_Asian_Development_Bank_s4vj1u.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 17,
    title: "GreenBrilliance",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022416/GreenBrilliance_lreiit.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 18,
    title: "Lums",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022420/Lums_t34pcv.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 19,
    title: "Seed Out documentary",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022475/Seed_Out_documentary_ir7oi0.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 20,
    title: "Select & Airlink",
    category: "Branding",
    video: "https://res.cloudinary.com/dbp8ze1ux/video/upload/v1751022481/Select_Airlink_kwiebc.mp4",
    img: "p_img_2",
    year: 2024,
  },
];

// type IProps = {
//   style_2?: boolean;
// };


const ITEMS_PER_PAGE = 6;

type Project = {
  id: number;
  title: string;
  category: string;
  video: string;
  img?: string;
  year: number;
};

type IProps = {
  style_2?: boolean;
};

export default function ProjectFive({ style_2 = false }: IProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProjects = project_data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(project_data.length / ITEMS_PER_PAGE);

  return (
    <div className="p-project-5-2-area pb-130">
      <div className="container">
        <div className="row gx-140">
          {paginatedProjects.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-project-5-2-thumb fix mb-140 p-relative">
                <div className="tp_img_reveal">
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
                </div>
                <div className="tp-project-5-2-content tp_fade_anim">
                  <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center gap-4">
          <button
            className="tp-btn-circle"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span className="text-white">Page {currentPage} of {totalPages}</span>
          <button
            className="tp-btn-circle"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}