import React, { useEffect } from "react";
import icon1 from "../src/images/icon1.svg";
import icon2 from "../src/images/icon2.svg";
import icon3 from "../src/images/icon3.svg";
import bg5 from "../src/images/bg5.png";
import over from "../src/images/overlay1.png";
import over2 from "../src/images/overlay2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import "././Arezo.css";

export default function Azero() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const data = [
    {
      id: 1,
      t1: " AZERO",
      t2: "Wallet",
      p: "Set up your Aleph Zero wallet to be able to hold, transfer, or stake your AZERO coins.",
      image: icon1,
      altr: "image1",
    },
    {
      id: 2,
      t1: " AZERO",
      t2: "Explorer",
      p: "  Familiarize yourself with the Aleph Zero explorer launched in collaboration with Subscab.",
      image: icon2,
      altr: "image1",
    },
    {
      id: 3,
      t1: " AZERO",
      t2: "Utility",
      p: " Learn more about the utility and economics behind AZERO - Aleph Zero's native coin.",
      image: icon3,
      altr: "image1",
    },
  ];
  return (
    <>
      {/* <div className=" bg-pack-overlay   bg-[#111b24]"></div> */}
      <div>
        {/* <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
          <MouseParallaxChild factorX={1} factorY={1}> */}
        <img
          src={over}
          className="h-[100px] w-[100%] overflow-hidden bg-[#111b24]"></img>
      </div>

      <div class="grid md:grid-cols-3  grid-cols-1 bg-pack-train6  bg-no-repeat bg-contain   bg-[#111b24] md:px-36 px-8 py-20 items-center justify-center">
        {data.map((item) => {
          return (
            <div
              data-aos="zoom-in"
              className=" flex flex-col  md:mb-0 mb-8 w-[310px] border-2 border-[#1b2b38] border-b-[#00EAC7]  pt-2 bg-auto bg-no-repeat bg-pack-train3  bg-[#14202a] bg-pack-train3 ">
              <img src={item.image} className="w-[96px] h-[96px] ml-5  "></img>
              <div className="flex pl-[28px]   ">
                <div class="h-[20px]  mt-2  bg-[#7FF4E3] w-[3px]"></div>
                <h4
                  class=" text-white  text-[20px] w-[240px]  
                  
                  
                   font-medium ml-3  ">
                  {item.t1}
                  <strong className="pl-3">{item.t2}</strong>
                </h4>
              </div>
              <div>
                <p className="aw text-[14px] pb-3 w-[240px] ml-3  pt-4 pl-5 text-[#bccbd6]">
                  {item.p}
                </p>
              </div>
              <div>
                <nav class="social overflow-hidden pb-3  ">
                  <ul>
                    <li>
                      <a
                        className="flex "
                        href="https://twitter.com/ibrahim_jabbari ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-[#00EAC7] ">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                        <sapn className="pl-5">Go to</sapn>{" "}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          );
        })}

        <div className="bg-pack-train6 px-36 py-10  bg-no-repeat bg-contain  bg-[#111b24]  "></div>
        {/* <div className="bg-pack-train6  bg-no-repeat bg-contain   bg-[#111b24]"></div> */}
      </div>
      <img src={over2} className="h-[100px] w-[100%] bg-[#111b24] "></img>
    </>
  );
}
