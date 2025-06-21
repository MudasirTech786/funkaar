"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
import PortfolioShowcaseMain from "@/pages/portfolio/portfolio-showcase-main";
import ProjectFive from "@/components/project/project-five";
// animation
import { hoverBtn } from "@/utils/hover-btn";
import { charAnimation, titleAnimation } from "@/utils/title-animation";

import PortfolioMasonryArea from "@/components/portfolio/portfolio-masonry-area";

const PortfolioMasonryMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">FUNKAAR</span>
                      <h3 className="tm-hero-title tp-char-animation">
                        Where Ideas Meet Execution.
                      </h3>
                    </div>
                    <div className="tm-hero-text tp_title_anim">
                      <p className="text-white">
                        A showcase of our creativity, strategy, and impact—crafted with purpose, delivered with excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <ProjectFive />
            {/* <PortfolioMasonryArea /> */}
            {/* portfolio area */}

            {/* big text */}
            <div className="pt-80">
              <BigText />
            </div>
            {/* big text */}

            {/* portfolio area */}
            {/* <PortfolioShowcaseMain /> */}
            {/* portfolio area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioMasonryMain;
