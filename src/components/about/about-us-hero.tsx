import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{backgroundImage: "url(https://res.cloudinary.com/dbp8ze1ux/image/upload/v1751025498/hero-1_hhynnh.jpg)"}}
    >
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span>
            Scroll to explore
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480" style={{ marginTop: "-10px" }}>
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <h1 className="ab-inner-hero-title tp-char-animation">
              Shaping Stories. Creating Impact.
              </h1>
              <p>We craft narratives that captivate, inspire, and drive real results.</p>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p>
                Liko develops, designs & delivers websites & creative campaigns
                that drive results,
              </p>
               <a className="tp-btn-white-sm border-style" href="#">Our Story</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
