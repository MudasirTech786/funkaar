"use client";
import React from "react";

export default function ProjectThree() {
  return (
    <div
      className="tp-project-4-area pb-120 project-panel-area"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            {/* Video 1 */}
            <div className="tp-project-4-bg project-panel">
              <div style={{ width: "90vw", position: "relative" }}>
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                >
                  <source src="/assets/img/home-04/portfolio/port-11.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video 2 */}
            <div className="tp-project-4-bg project-panel">
              <div style={{ width: "90vw", position: "relative" }}>
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                >
                  <source src="/assets/img/home-04/portfolio/port-2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video 3 */}
            <div className="tp-project-4-bg project-panel">
              <div style={{ width: "90vw", position: "relative" }}>
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                >
                  <source src="/assets/img/home-04/portfolio/port-12.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video 4 */}
            <div className="tp-project-4-bg project-panel">
              <div style={{ width: "90vw", position: "relative" }}>
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                >
                  <source src="/assets/img/home-01/hero/like-1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
