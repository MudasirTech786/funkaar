"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
import useSticky from "@/hooks/use-sticky";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import { Search } from "lucide-react"; // Import the search icon

const HeaderOne = () => {
  const { sticky, hidden, headerRef, headerFullWidth } = useSticky();
  const [openOffCanvas, setOpenOffCanvas] = useState(false);

  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="tp-header-height" ref={headerRef}>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-mob-space header-sticky pl-60 pr-60 z-index-9 ${
            hidden ? "header-hidden" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="tp-header-logo">
                  <Link className="logo-1" href="/">
                    <Image
                      src="/assets/img/logo/logo.png"
                      alt="logo"
                      width={285}
                      height={256}
                      style={{ width: "140px", height: "90px" }}
                    />
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image
                      src="/assets/img/logo/logo-white.png"
                      alt="logo"
                      width={285}
                      height={256}
                      style={{ width: "140px", height: "90px" }}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-xl-8 col-lg-9 d-none d-xl-block">
                <div className="tp-header-menu header-main-menu text-center">
                  <nav className="tp-main-menu-content">
                    <HeaderMenus />
                  </nav>
                </div>
              </div>

              <div className="col-xl-2 col-lg col-6">
                <div className="tp-header-bar text-end">
                  <button
                    className="tp-offcanvas-open-btn"
                    onClick={() => setOpenOffCanvas(true)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileOffcanvas
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffCanvas}
      />
    </>
  );
};

export default HeaderOne;
