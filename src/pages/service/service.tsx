"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import BrandSix from "@/components/brand/brand-six";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import { ServiceItems } from "@/components/service/service-five";
import ServiceHero from "@/components/service/service-hero";
import ServiceSix from "@/components/service/service-six";
import { BrandItems } from "@/components/brand/brand-two";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";

const ServiceMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      servicePanel();
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
            {/* service hero */}
            <ServiceHero />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        At Funkaar, we build strategic solutions
                      </span>
                      <h4 className="tp-service-5-title">
                        From concept to execution, we immerse ourselves in your brand’s challenges, ensuring every touchpoint is infused
                        with creativity, innovation, and purpose. Whether it’s strategy, storytelling, or digital presence, we approach
                        problems from all angles to deliver measurable impact that drive real results.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* line img slider */}
            <LineImgSlider />
            {/* line img slider */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        Our Services.
                      </span>
                      <h4 className="tp-service-5-title">
                        We create with purpose, strategize with intent, and execute with impact.
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <div className="tp-service-5-wrap">
                  <ServiceItems />
                </div> */}
              </div>
            </div>

            {/* service area */}
            <ServiceSix />
            {/* service area */}
            
            {/* brand area */}
            <BrandSix /> <br /> <br /><br /><br /><br />



            {/* brand area */}
            {/* <div className="tp-brand-4-area pt-120 pb-120">
              <div className="container">
                <div className="row gx-0">
                  <BrandItems />
                </div>
              </div>
            </div> */}


            {/* line image slider  */}
            {/* line image slider  */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceMain;
