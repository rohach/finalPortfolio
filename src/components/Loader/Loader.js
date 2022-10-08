import React, { useEffect } from "react";
import "./Loader.css";
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: {
        ease: "power1.out",
      },
    });
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.4 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  });
  return (
    <>
      <div class="intro">
        <div class="intro-text">
          <h1 class="hide">
            <span class="text">Hello</span>
          </h1>
          <h1 class="hide">
            <span class="text">beautiful</span>
          </h1>

          <h1 class="hide">
            <span class="text">people.</span>
          </h1>
          {/* <h1 class="hide">
            <div class="center">
              <div class="ring"> </div>
              <span>loading...</span>
            </div>
          </h1> */}
        </div>
      </div>
    </>
  );
};

export default Header;
