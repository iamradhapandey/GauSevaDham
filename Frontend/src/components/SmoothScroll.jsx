import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let locoScroll;

    const scrollEl = document.querySelector("#main-container");

    // Initialize LocomotiveScroll only once
    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08, // smoothness (0.05 - 0.1 is good)
    });

    // Each time Locomotive Scroll updates, tell ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);

    // Set up scrollerProxy
    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    // Refresh ScrollTrigger after images load
    setTimeout(() => {
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }, 500);

    // Cleanup on unmount
    return () => {
      if (locoScroll) locoScroll.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return <div id="main-container">{children}</div>;
}