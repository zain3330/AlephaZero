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
      <div class="marquee bg-[#111b24]">
        <div data-aos="fade-up">
          <div>
            <p className="marquee-title">FEATURED IN</p>
          </div>
          <div class="marquee-content">
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp5} alt="" />
            </div>
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp4} alt="" />
            </div>
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp3} alt="" />
            </div>
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp4} alt="" />
            </div>
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp5} alt="" />
            </div>
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp6} alt="" />
            </div>
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp7} alt="" />
            </div>
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp8} alt="" />
            </div>
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp3} alt="" />
            </div>
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp2} alt="" />
            </div>
            <div class="marquee-item">
              <img className="bg-[#111b24]" src={camp1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
