import React from "react";
import Image from "next/image";
import ContactForm from "../form/contact-form";
import Social from "../social/social";
import shape from "@/assets/img/inner-about/about/shape-1.png";

export default function ContactTwo() {
  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <div className="row" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="col-xl-7">
            <div className="cn-contactform-wrap">
              {/* Text above the form */}
              <p style={{ fontSize: "38px", textAlign: "center", marginBottom: "30px", color: "white" }}>
                Fill out the form below, and let’s turn ideas into something unforgettable.
              </p>

              {/* form start */}
              <ContactForm />
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
