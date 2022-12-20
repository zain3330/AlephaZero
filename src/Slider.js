import React, { useEffect } from "react";
import "../src/Slider.css";
// import logo1 from "../src/images/logo1.svg";
// import logo2 from "../src/images/logo2.svg";
import img from "../src/images/discord.svg";
import img2 from "../src/images/logo3.png";
import camp1 from "../src/images/camp1.png";
import camp2 from "../src/images/camp2.png";
import camp3 from "../src/images/camp3.png";
import camp4 from "../src/images/camp4.png";
import camp5 from "../src/images/camp5.png";
import camp6 from "../src/images/camp6.png";
import camp7 from "../src/images/camp7.png";
import camp8 from "../src/images/camp8.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

export default function Slider1() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <>
      <div class="marquee bg-[#14202A]   " style={{}}>
        <div className="hh-top-2  ">
          <div className="hh-top-3 "></div>
        </div>

        <div data-aos="fade-up ">
          <div>
            <p className="marquee-title text-[15px] md:text-[12px]">
              FEATURED IN
            </p>
          </div>

          <div class="marquee-content ">
            <div class="marquee-item hover:opacity-100 transition duration-300 ease-in-out">
              <img className="" src={camp5} alt="" />
            </div>
            <div class="marquee-item ">
              <img className="" src={camp4} alt="" />
            </div>
            <div class="marquee-item">
              <img className="" src={camp3} alt="" />
            </div>
            <div class="marquee-item">
              <img className="" src={camp4} alt="" />
            </div>
            <div class="marquee-item">
              <img className="" src={camp5} alt="" />
            </div>
            <div class="marquee-item">
              <img className="" src={camp6} alt="" />
            </div>
            <div class="marquee-item">
              <img className="" src={camp7} alt="" />
            </div>
            <div class="marquee-item">
              <img className="" src={camp8} alt="" />
            </div>
            <div class="marquee-item">
              <img className="" src={camp3} alt="" />
            </div>
            <div class="marquee-item">
              <img className="" src={camp2} alt="" />
            </div>
            <div class="marquee-item">
              <img className="" src={camp1} alt="" />
            </div>
          </div>
          <hr class="my-4 mx-auto h-px mb-14 w-[88%] bg-[#1B2B38] border-0 dark:bg-gray-700" />
        </div>
      </div>
    </>
  );
}
