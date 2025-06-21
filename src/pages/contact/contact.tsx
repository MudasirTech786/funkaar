"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ContactTwo from "@/components/contact/contact-two";
import ContactLocation from "@/components/contact/contact-location";
import FooterTwo from "@/layouts/footers/footer-two";
import VideTwo from "@/components/video/video-two";
// animation
import { charAnimation } from "@/utils/title-animation";

const ContactMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
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
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              <div className="tm-hero-area tm-hero-ptb">
                <div className="container">
                  <div className="row">
                      {/* video area */}
                      <VideTwo />
                      {/* video area */}
                    {/* <div className="col-xl-12">

                      <div className="tm-hero-content">
                        
                        <h3 className="tm-hero-title tp-char-animation">
                          Let’s Create Something Extraordinary
                        </h3>
                      </div>
                      <div className="tm-hero-text tp_title_anim">
                        <p className="text-white">
                          Every great story starts with a conversation.<br />
                          <b className="text-white">Whether you are a brand looking to make an impact or a creative partner ready to collaborate, we’re all ears.</b>
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* hero area start */}
              {/* hero area end */}

              {/* contact area */}
              <ContactTwo />
              {/* contact area */}

              {/* contact location */}
              {/* <ContactLocation /> */}
              {/* contact location */}
            </main>

            {/* footer area */}
            <FooterTwo topCls="" />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactMain;
