'use client';
import { useEffect, useRef, useState } from "react";
import $ from "jquery";

const useSticky = () => {
  const [sticky, setSticky] = useState(false);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const stickyHeader = (): void => {
    const currentScroll = window.scrollY;

    setSticky(currentScroll > 200);

    // Scroll direction logic
    if (typeof window !== "undefined") {
      if (!stickyHeader.lastScrollY) stickyHeader.lastScrollY = 0;

      if (currentScroll > stickyHeader.lastScrollY && currentScroll > 200) {
        setHidden(true); // Scrolling down = hide header
      } else {
        setHidden(false); // Scrolling up = show header
      }

      stickyHeader.lastScrollY = currentScroll;
    }
  };
  // Store last scroll position (as property of function)
  stickyHeader.lastScrollY = 0;

  useEffect(() => {
    const setHeaderHeight = headerRef.current?.offsetHeight;

    if (setHeaderHeight) {
      const headerElements = document.querySelectorAll<HTMLDivElement>('.tp-header-height');
      headerElements.forEach(element => {
        element.style.height = `${setHeaderHeight}px`;
      });
    }
  }, []);

  const headerFullWidth = () => {
    const menuElements = document.querySelectorAll(".tp-menu-fullwidth");
    menuElements.forEach((element: Element) => {
      const previousDiv = element.parentElement?.parentElement;
      if (previousDiv) {
        previousDiv.classList.add("has-homemenu");
      }
    });
  };

  const adjustMenuBackground = () => {
    if ($('.tp-header-3-area').length > 0) {
      const menuBox = $('.tp-header-3-menu-box');
      const menuBoxWidth = menuBox.width()!;
      const menuBoxHeight = menuBox.height()!;
      $('.menu-bg').css({
        'width': menuBoxWidth + 46,
        'height': menuBoxHeight,
        'left': menuBox.offset()!.left
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return {
    sticky,
    hidden,
    headerRef,
    headerFullWidth,
    adjustMenuBackground,
  };
};

export default useSticky;
