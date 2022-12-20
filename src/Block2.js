import React, { useEffect } from "react";
import "../src/Block2.css";
import lftimg from "../src/images/card2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Block2() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div class="bg-[#111b24]  md:py-0 py-32">
      <div className="rounded-lg abc  bg-[#111b24]  shadow-lg  h-[350px] bg-pack-train1 bg-no-repeat pt-8  px-8">
        <div data-aos="fade-right">
          <div class="flex  justify-start items-center pt-14 h-full  ">
            <div class="  flex flex-col md:flex-row md:max-w-[650px] rounded-lg bg-white shadow-lg">
              <div className="zoomWrapper">
                <img
                  class=" inner-img w-full h-96 md:h-[310px] object-cover md:w-[400px] rounded-t-sm md:rounded-none "
                  src={lftimg}
                  alt=""
                />
              </div>
              <div class="p-6 flex flex-col justify-start bg-[#111b24] ">
                <div className="flex justify-start mr-10   ">
                  <div class="h-[50px]  mt-1  bg-[#7FF4E3] w-[3px]"></div>
                  <h4
                    class="text-white  text-xl w-[240px] 
                  
                  
                   font-medium ml-5 mb-2 ">
                    Curious about
                    <strong className="pl-3">upcoming network upgrades?</strong>
                  </h4>
                </div>
                <div className="pl-1 pt-10 flex justify-end  text-[#7FF4E3] cursor-pointer">
                  <div className="pl-3 text-[#00CCAB] text-[16px] hover:text-[#7FF4E3]">
                    <p className="text-[16px]">Go to the Roadmap</p>
                  </div>
                  <div className="pl-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
                {/* <p class="text-gray-600 text-xs">Last updated 3 mins ago</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
