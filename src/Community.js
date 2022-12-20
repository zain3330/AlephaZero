import React, { useEffect } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import AOS from "aos";
import "aos/dist/aos.css";
import moveimg from "../src/images/moveimg.png";

export default function Community() {
  return (
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 md:pl-10 pl-5 py-[120px] bg-[#111b24] ">
      <div data-aos="zoom-in">
        <div className="py-10 md:py-0 ">
          <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
            <MouseParallaxChild factorX={1} factorY={1}>
              <img
                src={moveimg}
                className="h-[328px] w-[328px] md:h-[528px] md:w-[528px] "></img>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>

      <div class="">
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center   my-20 md:my-32 px-5 md:px-14 ">
          <p className="text-[34px] text-white ">
            <strong>Community</strong> of Over 100,000
            <br /> People
          </p>
          <hr class="my-4 h-[3px]  w-[10%] bg-[#7FF4E3] border-0 dark:bg-gray-700" />
          <p className="text-[18px] max-w-[350px]  pt-2 text-[#bccbd6]">
            Join us and get involved in a number of ongoing educational
            activities run not only by the core team but also by the community
            directly.
          </p>
          <div>
            <button
              type="submit"
              class=" text-[#00ccab] mt-6  bg-[#0f3538]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-[12px] dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-[#0e4445] dark:focus:ring-blue-800 ">
              <span className="text-[16px]">Get involved</span>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
