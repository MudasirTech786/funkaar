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
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/Bhegum Inayat Welfare Society.mp4",
    year: 2024,
  },
  {
    id: 2,
    title: "Nilofer Shahid",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/Nilofer Shahid.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 3,
    title: "Oppo-DVC",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/Oppo-DVC.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 4,
    title: "Oppo-F17 PRO",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/Oppo-F17 PRO.mp4", 
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 5,
    title: "Abacus consulting",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/abacus.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 6,
    title: "Nilofer Shahid",
    category: "Concept",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/Rohma.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 7,
    title: "Yamaha",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/yamaha.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 8,
    title: "Swyft",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/Swyft.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 9,
    title: "SOS Childrens Villages 2018",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/SOS.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 10,
    title: "Seedout DVC",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/seed_out.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 11,
    title: "Oppo - Corporate Profile IOT devices",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/Oppo - Corporate.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 12,
    title: "Monsanto",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/monsanto.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 13,
    title: "Karandaaz",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/karandaaz.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 14,
    title: "Human Capital Index Pakistan",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/human.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 15,
    title: "Hairoil-4th JUly-ishq_mobile",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/hairoil.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 16,
    title: "ADB (Asian Development Bank)",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/adb.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 17,
    title: "GreenBrilliance",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/seed_out.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 18,
    title: "Lums",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/lums.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 19,
    title: "Seed Out documentary",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/seed_out.mp4",
    img: "p_img_2",
    year: 2024,
  },
  {
    id: 20,
    title: "Select & Airlink",
    category: "Branding",
    video: "https://raw.githubusercontent.com/MudasirTech786/funkaarData/main/public/videos/Select.mp4",
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
                        preload="none"
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